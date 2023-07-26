import {useState} from 'react';
import style from './Form.module.css';

function Form() {
  const [currentSavings, setCurrentSavings] = useState(0);
  const [yearlySavings, setYearlySavings] = useState(0);
  const [expectedInterest, setExpectedInterest] = useState(0);
  const [investmentDuration, setInvestmentDuration] = useState(0);

  const changeCurrentSavingsHandler = (event) => {
    setCurrentSavings(event.target.value);
  };

  const changeYearlySavingsHandler = event => {
    setYearlySavings(event.target.value);
  };

  const changeExpectedInterestHandler = event => {
    setExpectedInterest(event.target.value);
  };

  const changeInvestmentDurationHandler = event => {
    setInvestmentDuration(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Form submited!");
  };

  const onReset = () => {
    console.log("Form Reseted!");
  };

  return (
    <form onSubmit={onSubmitHandler} className={style.form}>
      <div className={style['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings" />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution" />
        </p>
      </div>
      <div className={style['input-group']}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return" />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" />
        </p>
      </div>
      <p className={style.actions}>
        <button type="reset" onClick={onReset} className={style.buttonAlt}>
          Reset
        </button>
        <button type="submit" className={style.button}>
          Calculate
        </button>
      </p>
    </form>
  );
}

export default Form;
