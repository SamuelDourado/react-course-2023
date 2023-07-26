import style from './Form.module.css';

function Form() {
  return (
    <form className={style.form}>
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
        <button type="reset" className={style.buttonAlt}>
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
