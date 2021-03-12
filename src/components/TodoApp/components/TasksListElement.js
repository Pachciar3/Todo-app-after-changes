import React, { useState } from "react";

import { connect } from "react-redux";

import { fetchRequested } from "../redux";

import api from "../../../api"
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
import DialogForm from "../containers/DialogForm"

function TasksListElement({ user, fetchRequested }) {

  const [open, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [checked, setChecked] = useState(user.done);

  const handleClickOpen = () => {
    setOpenForm(true);
  };

  const handleClose = () => {
    setOpenForm(false);
  };

  const defaultValuesForDialogForm = user

  const handleClick = () => {
    setOpen(state => state = !state);
  };

  const handleDeleteTask = (id) => {
    api.delete(`/tasks/${id}`).then(fetchRequested())
  }

  const handleCheckboxClick = () => {
    const newUser = { ...user };
    newUser.done = !newUser.done
    api.patch(`/tasks/${user.id}`, newUser)
      .then(setChecked((checked) => checked = !checked))
  };

  const handleEditTask = () => {
    handleClickOpen()
  }

  const labelId = `checkbox-list-label-${user.id}`;
  const priorityClass = user.priority ? "colored" : "";
  return (
    <>
      <ListItem key={user.id} role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
            onClick={handleCheckboxClick}
          />

        </ListItemIcon>
        <ListItemText className={priorityClass} id={labelId} primary={user.name} secondary={createDate(user.date)} />
        <ListItemSecondaryAction>
          <Button variant="contained" edge="end" data-id={user.id} style={{ backgroundColor: "#1976d2", color: "#FFF" }} onClick={() => handleEditTask(user.id)}>
            Edit
        </Button>
          <Button variant="contained" edge="end" style={{ backgroundColor: "#d32f2f", color: "#FFF" }} onClick={() => handleDeleteTask(user.id)}>
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
      { openForm && <DialogForm handleClose={handleClose} openForm={openForm} defaultValues={defaultValuesForDialogForm} patchData={user} />}
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchRequested: () => dispatch(fetchRequested())
});

export default connect(
  false,
  mapDispatchToProps
)(TasksListElement);