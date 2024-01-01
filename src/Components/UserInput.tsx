import { makeStyles, shorthands } from "@fluentui/react-components";
import { Field, Input } from "@fluentui/react-components";
import React from "react";



const useStyles = makeStyles({
  userInputLabel: {
    fontFamily: "'Roboto Condensed', sans-serif",
    fontSize: "0.8rem",
    fontWeight: "bolder",
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
    ...shorthands.border("21px solid red"),
  },
});

export default function UserInput(props: any) {
  const classes = useStyles();
  return (
      <Field
        label={<span className={classes.userInputLabel}>{props.Label}</span>}
        required
      >
        <Input
          className={classes.userInputInput}
          input={{ style: { color: "white" } }}
          style={{ border: "2px solid #84c140" }}
          type="number"
          required
          value={props.userInput[props.Key]}
          onChange={(event) => props.onChange(props.Key, event.target.value)}
        />
      </Field>
  );
}
