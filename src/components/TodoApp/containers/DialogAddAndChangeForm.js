import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchRequested } from "../redux";
import { addMessage } from '../../../ui/redux';

import api from "../../../api"
import DialogStructure from "../components/DialogStructure"

function DialogAddAndChangeForm({ handleClose, openForm, defaultValues, fetchRequested, patchData = false, addMessage }) {
  const [formValues, setFormValues] = useState(defaultValues)
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues.name && formValues.date && formValues.description) {
      setSending(true);
      function apiRequest(type, path, errorMessage, successMessage) {
        api[type](path, formValues)
          .then(() => {
            addMessage({ type: "success", text: successMessage });
            setSending(false);
          })
          .then(() => {
            fetchRequested();
          })
          .then(() => {
            handleClose();
          })
          .catch(() => {
            setSending(false);
            addMessage({ type: "error", text: errorMessage });
          })
      }
      if (patchData) {
        apiRequest("patch", `/tasks/${patchData.id}`, "Error. Task not updated", "Task updated");
      } else {
        apiRequest("post", `/tasks`, "Error. Task not added", "New task added");
      }
    } else {
      addMessage({ type: "warning", text: "Please fill all fields" })
    }
  }
  return (
    <DialogStructure handleClose={handleClose} openForm={openForm} handleSubmit={handleSubmit} handleChange={handleChange} formValues={formValues} sending={sending} />
  )
}

const mapDispatchToProps = dispatch => ({
  fetchRequested: () => dispatch(fetchRequested()),
  addMessage: data => dispatch(addMessage(data))
});

export default connect(
  false,
  mapDispatchToProps
)(DialogAddAndChangeForm);