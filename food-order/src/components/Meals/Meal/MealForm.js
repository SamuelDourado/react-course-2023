import Input from "../../UI/Input";
import classes from "./MealForm.module.css";

const MealForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: `amount_${props.id}`,
          type: "number",
          mim: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealForm;