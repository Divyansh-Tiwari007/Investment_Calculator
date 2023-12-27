import {
  makeStyles,
  shorthands,
  Button,
  tokens,
  DrawerProps,
} from "@fluentui/react-components";
import { Flex } from "@mantine/core";
// import Input from "./Input";
import Drawery from "./Drawery";
import { useState } from "react";

const useStyles = makeStyles({
  outerBody: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    ...shorthands.borderRadius("20px"),
    backgroundImage: "url(Invest_Calci_back.jpg)",
    backgroundColor: "#84c140",
    width: "90%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
  },

  root: {
    width: "30%",
    ...shorthands.border("2px", "solid", "#ccc"),
    ...shorthands.overflow("hidden"),
    backgroundColor: "#616161",
    display: "flex",
    alignItems: "center",
  },

  content: {
    ...shorthands.flex(1),
    ...shorthands.padding("16px"),

    display: "grid",
    justifyContent: "flex-center",
    alignItems: "flex-center",
    gridRowGap: tokens.spacingVerticalXXL,
    gridAutoRows: "max-content",
  },
  mainButton: {
    backgroundColor: "#84c140",
    fontWeight: "Bolder",
    fontSize: "1rem",
    color: "white",
  },
});

type DrawerType = Required<DrawerProps>["type"];

function Body() {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<DrawerType>("overlay");
  const [userInput, setUserInput]: any = useState({
    initialInvestment: 1000,
    annualInvestment: 100,
    expectedReturn: 10,
    duration: 10,
  });

  function handleChange(inputId: string, newValue: number) {
    setUserInput((prevUserInput: number[]) => {
      return {
        ...prevUserInput,
        [inputId]: +newValue,
      };
    });
  }

  function handleDrawerClick() {
    setIsOpen(()=>!isOpen);
  }

  const validResult = userInput.duration >= 1;
  const classes = useStyles();

  return (
    <div className={classes.outerBody}>
      <div className={classes.body}>
        <div className={classes.root}>
          <div className={classes.content}>
            <Button className={classes.mainButton} onClick={handleDrawerClick}>
              {type === "inline" ? "Click to Calculate" : "Click to Calculate"}
            </Button>
          </div>
        </div>
        {isOpen ? (
          <Drawery
            userInput={userInput}
            status={isOpen}
            onChanged={handleChange}
            onClicked={handleDrawerClick}
          />
        ) : (
          <br />
        )}
      </div>
    </div>
  );
}

export default Body;
