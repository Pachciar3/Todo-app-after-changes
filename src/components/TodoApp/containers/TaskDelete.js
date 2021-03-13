import React from "react";

import { connect } from "react-redux";
import { fetchRequested } from "../redux";
import { addMessage } from '../../../ui/redux';

import api from "../../../api"
import Button from '@material-ui/core/Button';
import "./TaskStyles.scss";

function TasksListElement({ task, fetchRequested }) {
  const handleDeleteTask = (id) => {
    api.delete(`/tasks/${id}`)
      .then(() => {
        addMessage({ type: "success", text: "Task deleted" });
        fetchRequested();
      })
      .catch(() => {
        addMessage({ type: "error", text: "Error. Task not deleted" });
      })
  }

  return (
    <Button variant="contained" edge="end" style={{ backgroundColor: "#d32f2f", color: "#FFF" }} onClick={() => handleDeleteTask(task.id)}>
      Delete
    </Button>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchRequested: () => dispatch(fetchRequested()),
  addMessage: data => dispatch(addMessage(data))
});

export default connect(
  false,
  mapDispatchToProps
)(TasksListElement);