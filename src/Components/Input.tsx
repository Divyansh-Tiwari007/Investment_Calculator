//creating a function to take input of Initial investment, annual investment, expected return and duration
import UserInput from "./UserInput";
import { useState } from "react";
import Table from "./Table";
import { makeStyles, shorthands } from "@fluentui/react-components";

const useStyles = makeStyles({
  userInput: {
    ...shorthands.padding("1rem"),
    // maxWidth: "30rem",
    width: "30rem",
    ...shorthands.margin("2rem", "auto"),
    ...shorthands.borderRadius("14px"),
    backgroundColor: "#616161",
    backgroud: "linearGradient(180deg, #307e6c, #2b996d)",
  },

  userInputGroup: {
    display: "flex",
    justifyContent: "space-evenly",
    ...shorthands.gap("1.5rem"),
  },
});

export default function Input() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 100,
    expectedReturn: 10,
    duration: 10,
  });

  function handleChange(inputId: any, newValue: any) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputId]: +newValue,
      };
    });
  }

  const validResult = userInput.duration >= 1;

  const classes = useStyles();

  return (
    <>
      <div className={classes.userInput}>
        <div className={classes.userInputGroup}>
          <UserInput
            Label="Initial Investment"
            Key="initialInvestment"
            onChange={handleChange}
            userInput={userInput}
          />
          <UserInput
            Label="Annual Investment"
            Key="annualInvestment"
            onChange={handleChange}
            userInput={userInput}
          />
        </div>
        <div className={classes.userInputGroup}>
          <UserInput
            Label="Expected Return"
            Key="expectedReturn"
            onChange={handleChange}
            userInput={userInput}
          />
          <UserInput
            Label="Duration"
            Key="duration"
            onChange={handleChange}
            userInput={userInput}
          />
        </div>
      </div>
      {validResult ? (
        <Table userInput={userInput} />
      ) : (
        <p id="header">Duration must be greater than 0</p>
      )}
    </>
  );
}
