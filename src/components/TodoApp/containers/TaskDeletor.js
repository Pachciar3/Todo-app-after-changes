import React from "react";
import { connect } from "react-redux";
import { fetchRequested } from "../redux";
import { addMessage } from '../../../ui/redux';

import api from "../../../api"
import Button from '@material-ui/core/Button';

function TaskDeletor({ task, fetchRequested }) {

  const handleButtonTask = () => {
    api.get(`/tasks/${task.id}`)
      .then(() => {
        addMessage({ type: "success", text: "Task deleted" });
        // fetchRequested();
      })
      .catch(() => {
        addMessage({ type: "error", text: "Error. Task are not updated" });
      })
  }

  return (
    <Button variant="contained" edge="end" style={{ backgroundColor: "#d32f2f", color: "#FFF" }} onClick={handleButtonTask}>
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
)(TaskDeletor);