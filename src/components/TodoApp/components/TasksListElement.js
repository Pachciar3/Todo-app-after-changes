import React from "react";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import TaskDone from "../containers/TaskDone";
import TaskEdit from "../containers/TaskEdit";
import TaskDelete from "../containers/TaskDelete";
import createDate from "../../../utils/createDate";


function TasksListElement({ task, handleCollapseClick }) {
  const labelId = `checkbox-list-label-${task.id}`;
  const styles = {
    task: {
      margin: "5px 0px",
      border: task.priority ? "2px dashed #d32f2f" : "none"
    }
  }

  return (
    <ListItem style={styles.task} key={task.id} role={undefined} dense button onClick={handleCollapseClick}>
      <ListItemText id={labelId} primary={task.name} secondary={createDate(task.date)} />
      <ListItemSecondaryAction>
        <TaskDone task={task} labelId={labelId} />
        <TaskEdit task={task} />
        <TaskDelete task={task} />
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default TasksListElement;