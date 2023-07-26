const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
 

function TableBody(props) {
  const initialInvestment = props.initialInvestment;
  const results = props.results.map((result) => (
    <tr key={result.year}>
      <td>{result.year}</td>
      <td>{formatter.format(result.savingsEndOfYear)}</td>
      <td>{formatter.format(result.yearlyInterest)}</td>
      <td>{formatter.format(result.savingsEndOfYear - initialInvestment - (result.yearlyContribution * result.year))}</td>
      <td>{formatter.format(initialInvestment + result.yearlyContribution * result.year)}</td>
    </tr>
  ));
  return (
    <tbody>
      {results}
    </tbody>
  );
}

export default TableBody;
