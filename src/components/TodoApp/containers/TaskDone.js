import React, { useState } from "react";

import { connect } from "react-redux";
import { addMessage } from "../../../ui/redux";

import api from "../../../api"
import Checkbox from '@material-ui/core/Checkbox';


function TaskDone({ task, addMessage, labelId }) {

  const [checked, setChecked] = useState(task.done);
  const [loading, setLoading] = useState(false);

  const handleCheckboxClick = () => {
    setLoading(true);
    const newTask = { ...task, done: !checked };
    api.patch(`/tasks/${task.id}`, newTask)
      .then(() => setChecked((checked) => checked = !checked))
      .then(() => {
        addMessage({ type: "success", text: "Task changed !" });
        setLoading(false);
      })
      .catch(() => { addMessage({ type: "error", text: "Error !!. Task not updated" }); setLoading(false); })
  };


  return (
    <Checkbox
      edge="start"
      checked={checked}
      inputProps={{ 'aria-labelledby': labelId }}
      onChange={handleCheckboxClick}
      disabled={loading}
    />

  );
}

const mapDispatchToProps = dispatch => ({
  addMessage: data => dispatch(addMessage(data))
});

export default connect(
  false,
  mapDispatchToProps
)(TaskDone);