import React from "react";

import Typography from '@material-ui/core/Typography';
import TodoApp from '../components/TodoApp/containers/Tasks';

function Todo() {
  return (
    <div>
      <Typography variant="h5" align="left">This is todo page</Typography>
      <TodoApp />
    </div>
  );
}

export default Todo;
