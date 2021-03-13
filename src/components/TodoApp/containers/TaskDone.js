import React, { useState } from "react";

import { connect } from "react-redux";
import { addMessage } from "../../../ui/redux";

import api from "../../../api"
import Checkbox from '@material-ui/core/Checkbox';


function TaskDone({ task, addMessage, labelId }) {

  const [checked, setChecked] = useState(task.done);

  const handleCheckboxClick = () => {
    const newTask = { ...task };
    newTask.done = !newTask.done
    api.patch(`/tasks/${task.id}`, newTask)
      .then(() => setChecked((checked) => checked = !checked))
      .then(() => addMessage({ type: "success", text: "Done changed !" }))
      .catch(() => addMessage({ type: "error", text: "Error !!. Task not updated" }))
  };

  return (

    <Checkbox
      edge="start"
      checked={checked}
      tabIndex={-1}
      disableRipple
      inputProps={{ 'aria-labelledby': labelId }}
      onClick={handleCheckboxClick}
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