import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import style from "./Table.module.css";

function Table() {
  return (
    <table className={style.result}>
      <TableHeader />
      <TableBody />
    </table>
  );
}

export default Table;
