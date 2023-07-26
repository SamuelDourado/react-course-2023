import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import style from "./Table.module.css";

function Table(props) {
  console.log(props.results);
  return props.results.length > 0 ? (
    <table className={style.result}>
      <TableHeader />
      <TableBody
        results={props.results}
        initialInvestment={props.initialInvestment}
      />
    </table>
  ) : (
    <p style={{textAlign: "center"}}>No investment caculated yet.</p>
  );
}

export default Table;
