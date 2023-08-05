import classes from './Meal.module.css';
import MealForm from './MealForm';

const Meal = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={props.className}>
      <div className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
        </div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealForm id={props.key}/>
      </div>
    </li>
  );
};

export default Meal;