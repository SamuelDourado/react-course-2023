import DUMMY_MEALS from "./dummy-meals";
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import Meal from "./Meal";

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => {
        return <Meal key={meal.id}>{meal.name}</Meal>;
    });

    return <section className={classes.mealsList}>
        <Card >
            <ul>
                {mealsList}
            </ul>
        </Card>
    </section>;
};

export default AvailableMeals;