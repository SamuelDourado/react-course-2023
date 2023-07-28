import {useState} from 'react';
import Card from "../UI/Card";
import Button from "../UI/Button";
import style from "./AddUser.module.css";

function AddUser(props) {
  const [userInput, setUserInput] = useState({
    username: '',
    age: 0
  });

  const addUserHandler = (event) => {
    event.preventDefault();
    props.onAddUser({id: Math.random(), ...userInput});
  };

  const changeInput = (name, value) => {
    setUserInput(prevState => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  return (
    <Card className={style.input}>
      <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" name="username" value={userInput.username} onChange={event => {changeInput('username', event.target.value)}} />
          <label htmlFor="age">Age(Years)</label>
          <input id="age" type="number" name="age" value={userInput.age} onChange={event => {changeInput('age', event.target.value)}} />
          <Button type="submit"> Add User </Button>
      </form>
    </Card>
  );
}

export default AddUser;
