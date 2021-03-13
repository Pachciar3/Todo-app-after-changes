import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchRequested } from "../redux";
import { addMessage } from '../../../ui/redux';

import api from "../../../api"
import DialogStructure from "../components/DialogStructure"

function DialogAddAndChangeForm({ handleClose, openForm, defaultValues, fetchRequested, patchData = false, addMessage }) {
  const [formValues, setFormValues] = useState(defaultValues)
  const [sending, setSending] = useState(false);
  // const [hasError, setHasError] = useState(false);

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
      if (patchData) {
        api.patch(`/tasks/${patchData.id}`, formValues)
          .then(() => {
            addMessage({ type: "success", text: "Task updated" });
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
            addMessage({ type: "error", text: "Error. Task not updated" });
          })
      } else {
        api.post("/tasks", formValues)
          .then(() => {
            addMessage({ type: "success", text: "New task added" });
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
            addMessage({ type: "error", text: "Error. Task not added" }
            );
          })
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