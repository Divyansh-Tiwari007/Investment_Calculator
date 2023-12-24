import { calculateInvestmentResults } from "../util/investment";
import Tabulator from "./Tabulator";
import React from "react";

export default function Table({ userInput }: any) {
  // const result = calculateInvestmentResults(userInput);

  return (
    <div id="result">
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          <Tabulator Result={1} />
        </tbody>
      </table>
    </div>
  );
}
