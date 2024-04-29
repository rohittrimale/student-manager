import React from "react";

const UserContext = React.createContext({
  users: [],
  addUser: (user) => {},
  deleteUser: (id) => {},
  formShown: () => {},
  editUser: (id, newData) => {},

  isFormVisible: false,
});

export default UserContext;
