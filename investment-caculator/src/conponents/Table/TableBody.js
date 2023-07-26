function TableBody(props) {
  const results = props.results.map((result) => (
    <tr>
      <td>{result.year}</td>
      <td>{result.savingsEndOfYear}</td>
      <td> {result.yearlyInterest} </td>
      <td>TOTAL INTEREST GAINED</td>
      <td>TOTAL INVESTED CAPITAL</td>
    </tr>
  ));
  return (
    <tbody>
      {results}
    </tbody>
  );
}

export default TableBody;
