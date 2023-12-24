import React from "react";
export default function UserInput(props: any) {
  return (
    <>
      <p>
        <label>{props.Label}</label>
        <input
          type="number"
          required
          value={props.userInput[props.Key]}
          onChange={(event) => props.onChange(props.Key, event.target.value)}
        />
      </p>
    </>
  );
}
