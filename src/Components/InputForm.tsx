import { useForm } from "react-hook-form";
import {
  makeStyles,
  shorthands,
  Field,
  Input,
  tokens,
} from "@fluentui/react-components";
import { useContext } from "react";
import { UserInput } from "./Context";

const useStyles = makeStyles({
  userInputLabel: {
    fontFamily: "'Roboto Condensed', sans-serif",
    fontSize: "0.8rem",
    fontWeight: "bolder",
    textTransform: "uppercase",
    color: "black",
    ...shorthands.margin("5px"),
  },

  userInputInput: {
    width: "100%",
    ...shorthands.padding("0.5rem"),
    ...shorthands.borderRadius("0.25rem"),
    // backgroundColor: "transparent",
    color: "white",
    fontSize: "1rem",
    ...shorthands.border("21px solid red"),
    marginLeft: "5px",
  },

  mainButton: {
    backgroundColor: tokens.colorPaletteLightGreenBackground3,
    fontWeight: "Bolder",
    fontSize: "1rem",
    width: "50%",
    height: "6vh",
    color: "black",
    marginTop: "3vh",
    fontFamily: "'Roboto Condensed', sans-serif",
    ...shorthands.borderRadius("0.25rem"),
    textAlign: "center",
    marginLeft: "25%",
  },

  formField: {
    // gridRowGap: "10px",
    // marginLeft: "5px",
  },

  error: {
    color: tokens.colorPaletteRedForeground3,
    marginLeft: "10px",
  },
});

interface IFormProps {
  onClicked: VoidFunction;
}

function InputForm({ onClicked }: IFormProps) {
  const mainInput = useContext(UserInput);

  function onClickedLocal() {
    mainInput.initialInvestment = parseInt(getValues("input1"));
    mainInput.annualInvestment = parseInt(getValues("input2"));
    mainInput.expectedReturn = parseInt(getValues("input3"));
    mainInput.duration = parseInt(getValues("input4"));
  }
  const {
    register,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const classes = useStyles();
  return (
    <div>
      <Field
        required
        label={
          <span className={classes.userInputLabel}>Initial Investment</span>
        }
      >
        <Input
          className={classes.userInputInput}
          id="input1"
          {...register("input1", {
            required: {
              value: true,
              message: "Field is requied",
            },
            min: {
              value: 1,
              message: "Value should be greater than 0",
            },
            pattern: {
              value: /^[0-9]*$/,
              message: "Invalid Input",
            },
          })}
          defaultValue={mainInput.initialInvestment.toString()}
        />
        <p className={classes.error}>{errors.input1?.message as string}</p>
      </Field>

      <Field
        required
        label={
          <span className={classes.userInputLabel}>Annual Investment</span>
        }
      >
        <Input
          className={classes.userInputInput}
          id="input2"
          {...register("input2", {
            required: {
              value: true,
              message: "Field is requied",
            },
            min: {
              value: 1,
              message: "Cannot be negative",
            },
            pattern: {
              value: /^[0-9]*$/,
              message: "Invalid Input",
            },
          })}
          defaultValue={mainInput.annualInvestment.toString()}
        />
        <p className={classes.error}>{errors.input2?.message as string}</p>
      </Field>
      <Field
        required
        label={<span className={classes.userInputLabel}>Expected Returns</span>}
      >
        <Input
          className={classes.userInputInput}
          id="input3"
          {...register("input3", {
            required: {
              value: true,
              message: "Field is requied",
            },
            min: {
              value: 1,
              message: "Cannot be negative",
            },
            pattern: {
              value: /^[0-9]*$/,
              message: "Invalid Input",
            },
          })}
          defaultValue={mainInput.expectedReturn.toString()}
        />
        <p className={classes.error}>{errors.input3?.message as string}</p>
      </Field>
      <Field
        required
        label={<span className={classes.userInputLabel}>Number of Years</span>}
      >
        <Input
          className={classes.userInputInput}
          id="input4"
          {...register("input4", {
            required: {
              value: true,
              message: "Field is requied",
            },
            min: {
              value: 1,
              message: "Cannot be negative",
            },
            pattern: {
              value: /^[0-9]*$/,
              message: "Invalid Input",
            },
          })}
          defaultValue={mainInput.duration.toString()}
        />
        <p className={classes.error}>{errors.input4?.message as string}</p>
      </Field>
      <button
        className={classes.mainButton}
        onClick={() => {
          const toggleSwitch = onClicked();
          const sendData = onClickedLocal();
        }}
        disabled={Object.keys(errors).length !== 0}
      >
        Submit
      </button>
    </div>
  );
}

export default InputForm;
