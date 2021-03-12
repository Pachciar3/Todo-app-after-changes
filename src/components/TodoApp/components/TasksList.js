import React from "react";

import List from '@material-ui/core/List';

import TasksListElement from "./TasksListElement";

function TasksList({ users }) {

  return (
    <List >
      {users.map(user => (
        <TasksListElement user={user} />
      ))}
    </List>
  );
}

export default TasksList;