import React, { useEffect } from "react";
import Button from "./Button";
import Modal from "./Modal/Modal";
import Input from "./Input";
import { useRef, useState } from "react";
import UserContext from "./store/user-context";
import { useContext } from "react";

const Form = (props) => {
  console.log(props);
  const { editMode, onClose, userToEdit } = props;

  const nameInputRef = useRef();
  const mobileInputRef = useRef();
  const addressInputRef = useRef();
  const userCtx = useContext(UserContext);
  console.log(userCtx);

  useEffect(() => {
    if (editMode && userToEdit) {
      nameInputRef.current.value = userToEdit.name;
      mobileInputRef.current.value = userToEdit.mobile;
      addressInputRef.current.value = userToEdit.address;
    }
  }, [editMode, userToEdit]);
  const closeHandler = () => {
    if (editMode) {
      onClose();
    }

    userCtx.formShown();
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredMobile = mobileInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;

    const userDetails = {
      name: enteredName,
      mobile: enteredMobile,
      address: enteredAddress,
    };
    if (editMode && userToEdit) {
      userCtx.editUser(userToEdit.id, userDetails);
    } else {
      userCtx.addUser(userDetails);
    }
    console.log(userDetails);
    closeHandler();
  };

  return (
    <Modal onClose={userCtx.formShown}>
      <form onSubmit={submitHandler}>
        <Input
          label="Name:"
          input={{ type: "text", id: "name" }}
          ref={nameInputRef}
        />
        <Input
          label="Mobile :"
          input={{ type: "number", id: "mobile" }}
          ref={mobileInputRef}
        />
        <Input
          label="Address :"
          input={{ type: "text", id: "address" }}
          ref={addressInputRef}
        />
        <Button type="submit">Add</Button>
        <button onClick={closeHandler}>Close</button> <br />
      </form>
    </Modal>
  );
};

export default Form;
