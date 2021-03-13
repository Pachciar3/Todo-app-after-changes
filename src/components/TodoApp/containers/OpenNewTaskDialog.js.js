import React, { useState } from "react";

import SmallForm from '../components/SmallForm';

function OpenNewTaskDialog() {
  const [openForm, setOpenForm] = useState(false);
  const [textValue, setTextValue] = useState("");

  const handleToggleForm = (e) => {
    e.preventDefault();
    if (openForm) {
      setOpenForm(false);
    } else {
      setOpenForm(true);
    }
  };

  const handleCloseForm = () => {
    setOpenForm(false);
    setTextValue("");
  };

  const handleTextFieldChange = (e) => {
    setTextValue(e.target.value)
  }

  return (
    <SmallForm openForm={openForm} handleCloseForm={handleCloseForm} handleToggleForm={handleToggleForm} textValue={textValue} handleTextFieldChange={handleTextFieldChange} />
  )
}

export default OpenNewTaskDialog;