import React, { useContext, useState } from "react";
import UserContext from "../store/user-context";
import Form from "../Form";

const ShowData = (props) => {
  const userctx = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);

  const editUserHandler = (user) => {
    setIsEditing(true);
    setUserToEdit(user);
  };

  const closeEditHandler = () => {
    setIsEditing(false);
    setUserToEdit(null);
    userctx.formShown();
  };
  const deleteUserHandler = (id) => {
    userctx.deleteUser(id);
  };

  return (
    <div>
      {isEditing && (
        <Form editMode onClose={closeEditHandler} userToEdit={userToEdit} />
      )}
      <h2 style={{ margin: "20" }}>All Student</h2>
      <ul>
        {userctx.users.map((user, index) => {
          return (
            <li key={index}>
              {user.name} {user.mobile} {user.address}{" "}
              <button onClick={() => deleteUserHandler(user.id)}>Delete</button>{" "}
              <button onClick={() => editUserHandler(user)}>Edit</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShowData;
