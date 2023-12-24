import { formatter } from "../utils/Investment";
import { makeStyles, shorthands } from "@fluentui/react-components";

const useStyles = makeStyles({
  ThTd: {
    ...shorthands.padding("15px", "15px", "15px", "15px"),
  },
});
export default function Tabulator({ Result }: any) {
  const classes = useStyles();
  return (
    <>
      {Result.map((yearData: any) => {
        return (
          <tr key={yearData.year}>
            <td className={classes.ThTd}>{yearData.year}</td>
            <td className={classes.ThTd}>
              {formatter.format(yearData.valueEndOfYear)}
            </td>
            <td className={classes.ThTd}>
              {formatter.format(yearData.interest)}
            </td>
            <td className={classes.ThTd}>
              {formatter.format(yearData.totalInterest)}
            </td>
            <td className={classes.ThTd}>
              {formatter.format(yearData.totalAmountInvested)}
            </td>
          </tr>
        );
      })}
    </>
  );
}
