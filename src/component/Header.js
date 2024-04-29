import Button from "./Button";

const Header = (props) => {
  return (
    <>
      <h1>Student Manager</h1>
      <p>All Student : {props.userCount}</p>
      <button
        onClick={() => {
          props.onFormShow();
        }}
      >
        Add New Student
      </button>
    </>
  );
};

export default Header;
