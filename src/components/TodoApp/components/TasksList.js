import React from "react";

import List from '@material-ui/core/List';
import TasksCollapse from "../containers/TaskCollapse";

function TasksList({ tasks }) {
  return (
    <List >
      {tasks.map(task => (
        <TasksCollapse key={`task-${task.name}-${task.id}`} task={task} />
      ))}
    </List>
  );
}

export default TasksList;