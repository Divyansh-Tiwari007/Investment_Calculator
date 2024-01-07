
import { useForm } from "react-hook-form";
import {  makeStyles, shorthands } from "@fluentui/react-components";
import { useState } from "react";


const useStyles = makeStyles({
  userInputLabel: {
    fontFamily: "'Roboto Condensed', sans-serif",
    fontSize: "0.8rem",
    fontWeight: "bolder",
    textTransform: "uppercase",
    color: "#84c140",
    ...shorthands.margin( "0px"),
  },

  userInputInput: {
    width: "100%",
    ...shorthands.padding("0.5rem"),
    ...shorthands.border("1px solid #76c0ae"),
    ...shorthands.borderRadius("0.25rem"),
    backgroundColor: "transparent",
    color: "white",
    fontSize: "1rem",
    ...shorthands.border("21px solid red"),
    marginLeft: "5px",
  },

  mainButton: {
    backgroundColor: "#84c140",
    fontWeight: "Bolder",
    fontSize: "1rem",
    color: "white",
    marginTop:"3vh",
    fontFamily: "'Roboto Condensed', sans-serif",
    ...shorthands.borderRadius("0.25rem"),
  },
});

interface IFormProps {
  onChanged: Function;
  userInput: Object;
  onClicked: VoidFunction;
}

function InputForm({ onClicked, onChanged, userInput }: IFormProps) {


  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange", // Enable onChange mode to validate inputs on change
  });

  const classes = useStyles();
  return (
    <div>
      <label htmlFor="input1" className={classes.userInputLabel}>
        Initial Investment
      </label>
      <input
        className={classes.userInputInput}
        id="input1"
        {...register("input1", { required: true, min: 1, pattern: /^[0-9]*$/ })}
        defaultValue={1000}
        onInput={(event: React.ChangeEvent<HTMLInputElement>) => onChanged("initialInvestment", event.target.value)}
        // onInput={(event: React.ChangeEvent<HTMLInputElement>) => setUserInput.initialInvestment(Number(event.target.value))}
      />
      {errors.input1?.type === "required" && (
        <span>This field is required </span>
      )}
      {errors.input1?.type === "pattern" && (
        <span>This field should only contain numbers</span>
      )}
      {errors.input1?.type === "min" && <span>Invalid Input</span>}

      <label htmlFor="input2" className={classes.userInputLabel}>
        Annual Investment
      </label>
      <input
        className={classes.userInputInput}
        id="input2"
        {...register("input2", { required: true, min: 1, pattern: /^[0-9]*$/ })}
        defaultValue={100}
        onInput={(event: React.ChangeEvent<HTMLInputElement>) => onChanged("annualInvestment", event.target.value)}
        // onInput={(event: React.ChangeEvent<HTMLInputElement>) => seti2(Number(event.target.value))}
      
      />
      {errors.input2?.type === "required" && (
        <span>This field is required </span>
      )}
      {errors.input2?.type === "pattern" && (
        <span>This field should only contain numbers</span>
      )}
      {errors.input2?.type === "min" && <span>Invalid Input</span>}

      <label htmlFor="input3" className={classes.userInputLabel}>
        Expected Returns
      </label>
      <input
        className={classes.userInputInput}
        id="input3"
        {...register("input3", { required: true, min: 1, pattern: /^[0-9]*$/ })}
        defaultValue={10}
        onInputCapture={(event: React.ChangeEvent<HTMLInputElement>) => onChanged("expectedReturn", event.target.value)}
      />
      {errors.input3?.type === "required" && (
        <span>This field is required </span>
      )}
      {errors.input3?.type === "pattern" && (
        <span>This field should only contain numbers</span>
      )}
      {errors.input3?.type === "min" && <span>Invalid Input</span>}

      <label htmlFor="input4" className={classes.userInputLabel}>
        Number of Years
      </label>
      <input
        className={classes.userInputInput}
        id="input4"
        {...register("input4", { required: true, min: 1, pattern: /^[0-9]+$/ })}
        defaultValue={10}
        onInputCapture={(event: React.ChangeEvent<HTMLInputElement>) => onChanged("duration", event.target.value)}
      />
      {errors.input4?.type === "required" && (
        <span>This field is required </span>
      )}
      {errors.input4?.type === "pattern" && (
        <span>This field should only contain numbers</span>
      )}
      {errors.input4?.type === "min" && <span>Invalid Input</span>}

      <button
        className={classes.mainButton}
        onClick={onClicked
        }
        disabled={Object.keys(errors).length !== 0}
      >
        Submit
      </button>
    </div>
  );
}

export default InputForm;
