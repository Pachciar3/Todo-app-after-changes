import React, { useState } from "react";

import Collapse from '@material-ui/core/Collapse';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import createDate from "../../../utils/createDate";
import "./TaskStyles.scss";

function TasksListElement({ user }) {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(state => state = !state);
  };
  const labelId = `checkbox-list-label-${user.id}`;
  const priorityClass = user.priority ? "colored" : "";
  return (
    <>
      <ListItem key={user.id} role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={user.done}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
          />

        </ListItemIcon>
        <ListItemText className={priorityClass} id={labelId} primary={user.name} secondary={createDate(user.date)} />
        <ListItemSecondaryAction>
          <Button variant="contained" edge="end" style={{ backgroundColor: "#1976d2", color: "#FFF" }}>
            Edit
        </Button>
          <Button variant="contained" edge="end" style={{ backgroundColor: "#d32f2f", color: "#FFF" }}>
            Delete
        </Button>
          <Button onClick={handleClick} variant="contained" edge="end" >
            More
        </Button>
        </ListItemSecondaryAction>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Paper>{user.description}</Paper>
      </Collapse>
    </>
  );
}

export default TasksListElement;