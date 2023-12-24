//creating a function to take input of Initial investment, annual investment, expected return and duration
import UserInput from "./UserInput";
import { useState } from "react";
import Table from "./Table";
import React from "react";
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

  return (
    <>
      <div id="user-input">
        <div className="input-group">
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
        <div className="input-group">
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
