import { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import style from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const INITIAL_USER = {
  username: "",
  age: "0",
};

const INITIAL_ERROR_INVALID_INPUT = {
  title: 'Invalid input',
  message: 'Please enter a valid name or age (non-empty values)'
};

const INITIAL_ERROR_INVALID_AGE = {
  title: 'Invalid age',
  message: 'Please enter a valid age (>0)'
};

function AddUser(props) {
  const [error, setError] = useState();

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const validateUser = (user) => {
    if (user.username.trim().lenhth === 0) {
      setError(INITIAL_ERROR_INVALID_INPUT);
      return false;
    }

    if (user.age.trim().lenhth === 0) {
      setError(INITIAL_ERROR_INVALID_INPUT);
      return false;
    }

    if (+user.age < 1) {
      setError(INITIAL_ERROR_INVALID_AGE);
      return false;
    }
    return true;
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    const userInput = {
      username: enteredName,
      age: enteredAge,
    };

    if (!validateUser(userInput)) {
      return;
    }

    props.onAddUser({ id: Math.random(), ...userInput });
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      { error && <ErrorModal title={error.title} message={error.message}  onConfirm={errorHandler}/>}
      <Card className={style.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            name="username"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            name="age"
            ref={ageInputRef}
          />
          <Button type="submit"> Add User </Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
