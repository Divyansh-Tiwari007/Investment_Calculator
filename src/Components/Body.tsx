import {
  makeStyles,
  shorthands,
  Button,
  tokens,
  DrawerProps,
} from "@fluentui/react-components";
import { Flex } from "@mantine/core";
import Drawery from "./Drawery";
import { useState } from "react";
import TableFUI from "./TableFUI";

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
    flexDirection: "column",
  },

  root: {
    width: "20%",
    ...shorthands.border("2px", "solid", "#ccc"),
    ...shorthands.overflow("hidden"),
    backgroundColor: "#616161",
    display: "flex",
    alignItems: "center",
    ...shorthands.margin("auto"),
    marginTop: "25px",
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
  const [init, setInit] = useState(false);
  const [userInput, setUserInput]: any = useState({
    initialInvestment: 1000,
    annualInvestment: 100,
    expectedReturn: 10,
    duration: 10,
  });

  console.log(isOpen);
  console.log(init);

  function handleDrawerClick() {
    setIsOpen(() => !isOpen);
    setInit(true);
  }

  function handleChange(inputId: string, newValue: number) {
    setUserInput((prevUserInput: number[]) => {
      return {
        ...prevUserInput,
        [inputId]: +newValue,
      };
    });
  }

  const classes = useStyles();

  return (
    <div className={classes.outerBody}>
      <div className={classes.body}>
        <div className={classes.root}>
          <div className={classes.content}>
            <Button className={classes.mainButton} onClick={handleDrawerClick}>
              {"Click to Calculate"}
            </Button>
          </div>
        </div>
        {isOpen ? (
          init ? (
            <Drawery
              userInput={userInput}
              status={isOpen}
              onChanged={handleChange}
              onClicked={handleDrawerClick}
            />
          ) : (
            // extra code here
            <Drawery
              status={isOpen}
              userInput={userInput}
              onChanged={handleChange}
              onClicked={handleDrawerClick}
            />
          )
        ) : init ? (
          <TableFUI userInput={userInput} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Body;
