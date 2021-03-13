import React from "react";

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
  formContainer: {
    padding: 20
  },
  buttonContainer: { display: "flex", justifyContent: "flex-end" }
}));

function DialogStructure({ handleClose, openForm, handleSubmit, formValues, handleChange }) {
  const classes = useStyles();

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
      <div className={classes.formContainer}>
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
          <div className={classes.buttonContainer}>
            <Button type="submit" variant="contained" color="primary">Send</Button>
          </div>
        </form>
      </div>
    </Dialog>
  )
}

export default DialogStructure;