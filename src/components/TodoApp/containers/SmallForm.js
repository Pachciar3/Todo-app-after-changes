import React, { useState } from "react";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';

import DialogForm from "./DialogForm";


function SmallForm() {
  const [openForm, setOpenForm] = useState(false);
  const [textValue, setTextValue] = useState("");

  const handleClickOpen = () => {
    if (openForm) {
      setOpenForm(false);
    } else {
      setOpenForm(true);
    }
  };

  const handleClose = () => {
    setOpenForm(false);
  };

  const handleTextFieldChange = (e) => {
    setTextValue(e.target.value)
  }
  const defaultValuesForDialogForm = {
    name: textValue,
    date: new Date().toJSON().slice(0, 19),
    description: "",
    done: false,
    priority: true
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <FormGroup row>
          <TextField id="filled-basic" label="Type text" variant="filled" value={textValue} onChange={handleTextFieldChange} />
          <Button variant="contained" color="primary" onClick={handleClickOpen}>
            Add
        </Button>
        </FormGroup>
      </div>
      {openForm && <DialogForm handleClose={handleClose} openForm={openForm} defaultValues={defaultValuesForDialogForm} />}
    </>
  )
}

export default SmallForm;