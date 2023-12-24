import React from "react";
import { makeStyles, shorthands } from "@fluentui/react-components";

const useStyles = makeStyles({
  userInputLabel: {
    display: "block",
    marginBottom: "0.25rem",
    fontFamily: "'Roboto Condensed', sans-serif",
    fontSize: "0.8rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#84c140",
  },

  userInputInput: {
    width: "100%",
    ...shorthands.padding("0.5rem"),
    ...shorthands.border("1px solid #76c0ae"),
    ...shorthands.borderRadius("0.25rem"),
    backgroundColor: "transparent",
    color: "white",
    fontSize: "1rem",
  },
});

export default function UserInput(props: any) {
  const classes = useStyles();
  return (
    <>
      <p>
        <label className={classes.userInputLabel}>{props.Label}</label>
        <input
          className={classes.userInputInput}
          type="number"
          required
          value={props.userInput[props.Key]}
          onChange={(event) => props.onChange(props.Key, event.target.value)}
        />
      </p>
    </>
  );
}
