import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchRequested } from "../redux";
import { addMessage } from "../../../ui/redux";

import api from "../../../api"
import Button from '@material-ui/core/Button';


function TaskDelete({ task, addMessage, fetchRequested }) {
  const [loading, setLoading] = useState(false);

  const handleCheckboxClick = () => {
    setLoading(true);
    const newTask = { ...task };
    newTask.done = !newTask.done
    api.delete(`/tasks/${task.id}`)
      .then(() => fetchRequested())
      .then(() => { addMessage({ type: "warning", text: "Task deleted !" }); setLoading(false); })
      .catch(() => { addMessage({ type: "error", text: "Error !!. Task not deleted" }); setLoading(false); })
  };

  return (
    <Button variant="contained" edge="end" style={{ backgroundColor: "#d32f2f", color: "#FFF" }} onClick={handleCheckboxClick} disabled={loading}>
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
)(TaskDelete);