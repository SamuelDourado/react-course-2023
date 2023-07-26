import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import style from "./Table.module.css";

function Table(props) {
  return (
    <table className={style.result}>
      <TableHeader />
      <TableBody results={props.results}/>
    </table>
  );
}

export default Table;
