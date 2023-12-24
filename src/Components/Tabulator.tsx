import { formatter } from "../util/investment";
export default function Tabulator({ Result }: any) {
  return (
    <>
      {Result.map((yearData: any) => {
        return (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.valueEndOfYear)}</td>
            <td>{formatter.format(yearData.interest)}</td>
            <td>{formatter.format(yearData.totalInterest)}</td>
            <td>{formatter.format(yearData.totalAmountInvested)}</td>
          </tr>
        );
      })}
    </>
  );
}
