import React, { useState } from "react";
import UserContext from "./user-context";

const UserProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [formIsShown, setFormIsShown] = useState(false);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const deleteUserHandler = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const formIsShownHandler = () => {
    setFormIsShown(!formIsShown);
    console.log(formIsShown);
  };

  const editUserHandler = (id, newData) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => {
        if (user.id === id) {
          return { ...user, ...newData };
        }
        return user;
      })
    );
  };

  const usersDetails = {
    users: users,
    addUser: addUserHandler,
    deleteUser: deleteUserHandler,
    formShown: formIsShownHandler,
    isFormVisible: formIsShown,
    editUser: editUserHandler,
  };
  return (
    <UserContext.Provider value={usersDetails}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
