import React from "react";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import TaskDone from "../containers/TaskDone";
import TaskEdit from "../containers/TaskEdit";
import TaskDelete from "../containers/TaskDelete";
import Button from '@material-ui/core/Button';
import createDate from "../../../utils/createDate";

function TasksListElement({ task, handleCollapseClick }) {
  const labelId = `checkbox-list-label-${task.id}`;
  const priorityClass = task.priority ? "colored" : "";

  return (
    <ListItem key={task.id} role={undefined} dense>
      <ListItemIcon>
        <TaskDone task={task} labelId={labelId} />
      </ListItemIcon>
      <ListItemText className={priorityClass} id={labelId} primary={task.name} secondary={createDate(task.date)} />
      <ListItemSecondaryAction>
        <TaskEdit task={task} />
        <TaskDelete task={task} />
        <Button onClick={handleCollapseClick} variant="contained" edge="end" >
          More
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default TasksListElement;