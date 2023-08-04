import DUMMY_MEALS from "./dummy-meals";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import Meal from "./Meal/Meal";

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <Meal
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <section className={classes.mealsList}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
