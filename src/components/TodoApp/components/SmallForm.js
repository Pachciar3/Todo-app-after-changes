import React from "react";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import DialogAddAndChangeForm from "../containers/DialogAddAndChangeForm";

const styles = {
  formGroup: { display: "flex", justifyContent: "center" }
}

function SmallForm({ openForm, handleCloseForm, handleToggleForm, textValue, handleTextFieldChange }) {

  const defaultValuesForDialogForm = {
    name: textValue,
    date: new Date().toJSON().slice(0, 19),
    description: "",
    done: false,
    priority: true
  }

  return (
    <>
      <div style={styles.formGroup}>
        <FormGroup row>
          <TextField id="filled-basic" label="Type text" variant="filled" value={textValue} onChange={handleTextFieldChange} />
          <Button variant="contained" color="primary" onClick={handleToggleForm}>
            Add
        </Button>
        </FormGroup>
      </div>
      {openForm && <DialogAddAndChangeForm handleClose={handleCloseForm} openForm={openForm} defaultValues={defaultValuesForDialogForm} />}
    </>
  )
}

export default SmallForm;