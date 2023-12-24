import { calculateInvestmentResults } from "../utils/Investment";
import Tabulator from "./Tabulator";
import { makeStyles, shorthands } from "@fluentui/react-components";

const useStyles = makeStyles({
  result: {
    maxWidth: "50rem",
    backgroundColor: "#616161",
    ...shorthands.margin("2rem", "auto"),
    ...shorthands.padding("1rem"),
    /* table-layout: fixed", */
    display: "flex",
    borderSpacing: "1rem",
    justifyContent: "center",
    textAlign: "right",
  },

  resultThead: {
    fontSize: "1rem",
    color: "#84c140",
  },

  resultTbody: {
    fontFamily: "'Roboto Condensed', sans-serif",
    fontSize: "1rem",
    color: "#c2e9e0",
  },

  ThTd: {
    ...shorthands.padding("15px", "15px", "15px", "15px"),
  },
  center: {
    textAlign: "center",
  },
});

export default function Table({ userInput }: any) {
  const result = calculateInvestmentResults(userInput);
  const classes = useStyles();
  return (
    <div className={classes.result}>
      <table>
        <thead className={classes.resultThead}>
          <tr>
            <th className={classes.ThTd}>Year</th>
            <th className={classes.ThTd}>Investment Value</th>
            <th className={classes.ThTd}>Interest (Year)</th>
            <th className={classes.ThTd}>Total Interest</th>
            <th className={classes.ThTd}>Invested Capital</th>
          </tr>
        </thead>
        <tbody className={classes.resultTbody}>
          <Tabulator Result={result} />
        </tbody>
      </table>
    </div>
  );
}
