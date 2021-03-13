import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchRequested } from "../redux";

import api from "../../../api"
import DialogStructure from "../components/DialogStructure"
import { addMessage } from '../../../ui/redux';

function DialogAddAndChangeForm({ handleClose, openForm, defaultValues, fetchRequested, patchData = false, addMessage }) {
  const [formValues, setFormValues] = useState(defaultValues)

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues.name && formValues.date && formValues.description) {
      handleClose();

      if (patchData) {
        api.patch(`/tasks/${patchData.id}`, formValues)
          .then(() => {
            addMessage({ type: "success", text: "Task updated" });
            fetchRequested();
          })
          .catch(() => {
            addMessage({ type: "error", text: "Error. Task not updated" });
          })
      } else {
        api.post("/tasks", formValues)
          .then(() => {
            addMessage({ type: "success", text: "New task added" });
            fetchRequested();
          })
          .catch(() => {
            addMessage({ type: "error", text: "Error. Task not added" });
          })
      }
    } else {
      addMessage({ type: "warning", text: "Please fill all fields" })
    }
  }
  return (
    <DialogStructure handleClose={handleClose} openForm={openForm} handleSubmit={handleSubmit} handleChange={handleChange} formValues={formValues} />
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