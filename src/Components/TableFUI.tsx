import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  makeStyles,
  shorthands,
} from "@fluentui/react-components";
import { calculateInvestmentResults, formatter } from "../utils/Investment";
import { useContext } from "react";
import { UserInput } from "./Context";

const useStyles = makeStyles({
  result: {
    maxWidth: "50rem",
    backgroundColor: "#616161",
    ...shorthands.margin("2rem", "auto"),
    ...shorthands.padding("1rem"),
    ...shorthands.borderRadius("15px"),
    borderSpacing: "1rem",
    justifyContent: "center",
    textAlign: "center",
  },

  resultThead: {
    fontSize: "1rem",
    color: "#84c140",
    fontWeight: "bolder",
  },

  resultTbody: {
    fontFamily: "'Roboto Condensed', sans-serif",
    fontSize: "1rem",
    color: "white",
  },

  ThTd: {
    ...shorthands.padding("5px"),
  },
});

const columns = [
  { columnKey: "year", label: "Year" },
  { columnKey: "investmentValue", label: "Investment Value" },
  { columnKey: "interestYear", label: "Interest(Year)" },
  { columnKey: "totalInterest", label: "Total Interest" },
  { columnKey: "investedCapital", label: "Invested Capital" },
];

const TableFUI = () => {
  const {initialInvestment,annualInvestment,expectedReturn,duration}=useContext(UserInput);
  const classes = useStyles();
  const result = calculateInvestmentResults({initialInvestment,annualInvestment,expectedReturn,duration});
   
    if (initialInvestment !== 0 && annualInvestment !== 0 && duration !== 0 && expectedReturn !== 0)
    {
      return(
      <div className={classes.result}>
      <Table>
        <TableHeader>
          <TableRow className={classes.resultThead}>
            {columns.map((column) => (
              <TableCell key={column.columnKey}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {result.map((yearData) => (
            <TableRow className={classes.resultTbody}>
              <TableCell className={classes.ThTd}>{yearData.year}</TableCell>
              <TableCell>{formatter.format(yearData.valueEndOfYear)}</TableCell>
              <TableCell>{formatter.format(yearData.interest)}</TableCell>
              <TableCell>{formatter.format(yearData.totalInterest)}</TableCell>
              <TableCell>
                {formatter.format(yearData.totalAmountInvested)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
      );
    }
    else
    {
      return(
        <>
        </>
      );
    }
    
  
};

export default TableFUI;
