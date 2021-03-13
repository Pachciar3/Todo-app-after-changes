import React from "react";

import List from '@material-ui/core/List';
import TasksCollapse from "../containers/TaskCollapse";

function TasksList({ tasks }) {
  return (
    <List >
      {tasks.map(task => (
        <TasksCollapse task={task} />
      ))}
    </List>
  );
}

export default TasksList;