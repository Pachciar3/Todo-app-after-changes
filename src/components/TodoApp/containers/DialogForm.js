import React, { useState } from "react";

import { connect } from "react-redux";

import { fetchRequested } from "../redux";

import Dialog from '@material-ui/core/Dialog';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';

import api from "../../../api"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

function DialogForm({ handleClose, openForm, defaultValues, fetchRequested, patchData = false }) {
  const [formValues, setFormValues] = useState(defaultValues)
  const [error, setError] = useState(false);
  const classes = useStyles();


  const handleChange = (e) => {
    console.log(e)
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues.name && formValues.date && formValues.description) {
      handleClose();
      setError(false);
      if (patchData) {
        api.patch(`/tasks/${patchData.id}`, formValues).then(fetchRequested())
      } else {
        api.post("/tasks", formValues).then(fetchRequested())
      }
    } else {
      setError("Please fill the form");
    }
  }
  return (
    <Dialog fullScreen open={openForm} onClose={handleClose} TransitionComponent={Transition}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Form
        </Typography>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div style={{ padding: 20 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            autoFocus
            margin="dense"
            id="dialog-form-name"
            label="Name"
            name="name"
            type="text"
            fullWidth
            value={formValues.name}
            onChange={handleChange}
          />

          <TextField
            id="dialog-dorm-date"
            name="date"
            label="Date"
            type="datetime-local"
            value={formValues.date}
            className={classes.textField}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            id="dialog-form-description"
            name="description"
            label="Description"
            multiline
            rows={4}
            fullWidth
            onChange={handleChange}
            value={formValues.description}
          />

          <FormControlLabel
            id="dialog-form-priority"
            name="priority"
            control={<Switch name="priority" checked={formValues.priority} onChange={handleChange} />}
            label="Important Task"
          />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button type="submit" variant="contained" color="primary">Send</Button>
          </div>
          {error}
        </form>
      </div>
    </Dialog>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchRequested: () => dispatch(fetchRequested())
});

export default connect(
  false,
  mapDispatchToProps
)(DialogForm);