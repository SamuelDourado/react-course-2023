import { useContext } from 'react';
import classes from './Meal.module.css';
import MealForm from './MealForm';
import CartContext from '../../../store/cart.context';

const Meal = (props) => {
  const cartCtx = useContext(CartContext);
  const price =  '$'+`${props.price.toFixed(2)}`;
  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

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
        <MealForm onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
};

export default Meal;
