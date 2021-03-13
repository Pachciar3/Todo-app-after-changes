import React, { useState } from "react";

import Button from '@material-ui/core/Button';
import DialogAddAndChangeForm from "../containers/DialogAddAndChangeForm"

function TaskEdit({ task }) {
  const [openForm, setOpenForm] = useState(false);

  const handleClose = () => {
    setOpenForm(false);
  };

  const handleEditTask = () => {
    setOpenForm(true);
  }
  const defaultValuesForDialogForm = task
  return (
    <>
      <Button variant="contained" edge="end" data-id={task.id} style={{ backgroundColor: "#1976d2", color: "#FFF" }} onClick={() => handleEditTask(task.id)}>
        Edit
        </Button>
      { openForm && <DialogAddAndChangeForm handleClose={handleClose} openForm={openForm} defaultValues={defaultValuesForDialogForm} patchData={task} />}
    </>
  );
}

export default TaskEdit;