import Card from "../UI/Card";
import Button from "../UI/Button";
import style from "./AddUser.module.css";

function AddUser() {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card>
      <form>
        <div className={style.input}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" name="username" />
        </div>

        <div className={style.input}>
          <label htmlFor="age">Age(Years)</label>
          <input id="age" type="number" name="age" />
        </div>
        <Button />
      </form>
    </Card>
  );
}

export default AddUser;
