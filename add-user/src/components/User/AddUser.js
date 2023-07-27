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
    props.onAddUser(userInput);
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
    <Card>
      <form onSubmit={addUserHandler}>
        <div className={style.input}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" name="username" value={userInput.username} onChange={event => {changeInput('username', event.target.value)}} />
        </div>

        <div className={style.input}>
          <label htmlFor="age">Age(Years)</label>
          <input id="age" type="number" name="age" value={userInput.age} onChange={event => {changeInput('age', event.target.value)}} />
        </div>
        <Button />
      </form>
    </Card>
  );
}

export default AddUser;
