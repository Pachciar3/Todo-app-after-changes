import React, { useState } from "react";

import Collapse from '@material-ui/core/Collapse';
import Paper from '@material-ui/core/Paper';
import TasksListElement from "../components/TasksListElement";

function TasksCollapse({ task }) {
  const [open, setOpen] = useState(false);

  const handleCollapse = () => {
    setOpen(state => state = !state);
  };

  return (
    <>
      <TasksListElement task={task} handleCollapseClick={handleCollapse} />
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Paper>{task.description}</Paper>
      </Collapse>
    </>
  );
}

export default TasksCollapse;