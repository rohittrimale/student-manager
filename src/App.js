import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Form from "./component/Form";
import UserProvider from "./component/store/UserProvider";
import { useContext } from "react";
import UserContext from "./component/store/user-context";
import ShowData from "./component/ShowData/ShowData";

function App() {
  const userCtx = useContext(UserContext);
  return (
    <div className="App">
      {userCtx.isFormVisible && <Form />}
      <Header userCount={userCtx.users.length} onFormShow={userCtx.formShown} />
      <ShowData usersData={userCtx.users} />
    </div>
  );
}

export default App;
