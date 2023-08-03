import DUMMY_MEALS from "./dummy-meals";
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => {
        return <li key={meal.id}>{meal.name}</li>;
    });

    return <section className={classes.mealsList}>
        <ul>
            {mealsList}
        </ul>
    </section>;
};

export default AvailableMeals;