import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  DrawerProps,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons";
import { useState } from "react";
import UserInput from "./UserInput";
import { Overlay } from "@mantine/core";
// import { Center, Flex } from "@mantine/core";

const useStyles = makeStyles({
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

  field: {
    display: "grid",
    gridRowGap: tokens.spacingVerticalS,
  },

  mainButton: {
    backgroundColor: "#84c140",
    fontWeight: "Bolder",
    fontSize: "1rem",
    color: "white",
  },

  drawer: {
    backgroundColor: "#616161",
    width: "50%",
  },

  userInput: {
    ...shorthands.padding("1rem"),
    width: "90%",
    ...shorthands.margin("2rem", "auto"),
    ...shorthands.borderRadius("14px"),
    backgroundColor: "#616161",
    backgroud: "linearGradient(180deg, #307e6c, #2b996d)",
  },

  userInputGroup: {
    display: "flex",
    justifyContent: "space-evenly",
    minHeight: "80px",
    ...shorthands.gap("1.5rem"),
    ...shorthands.margin("2%"),
    flexDirection: "column",
  },
});

interface IDrawerProps {
  userInput: number;
  status: boolean;
  onChanged: Function;
  onClicked: VoidFunction;
}
type DrawerType = Required<DrawerProps>["type"];

export default function Drawery({
  userInput,
  // type,
  status,
  onChanged,
  onClicked,
}: IDrawerProps) {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Drawer
        className={styles.drawer}
        type="overlay"
        separator
        open={status}
        position={"end"}
        onOpenChange={(_, { open }) => onClicked}
      >
        <DrawerHeader>
          <DrawerHeaderTitle
            style={{ color: "#84c140" }}
            action={
              <Button
                appearance="subtle"
                aria-label="Close"
                icon={<Dismiss24Regular />}
                onClick={onClicked}
              />
            }
          >
            Fill the Details:
          </DrawerHeaderTitle>
        </DrawerHeader>

        <DrawerBody>
          <div className={styles.userInput}>
            <div className={styles.userInputGroup}>
              <UserInput
                Label="Initial Investment"
                Key="initialInvestment"
                onChange={onChanged}
                userInput={userInput}
              />
              <UserInput
                Label="Annual Investment"
                Key="annualInvestment"
                onChange={onChanged}
                userInput={userInput}
              />
              <UserInput
                Label="Expected Return"
                Key="expectedReturn"
                onChange={onChanged}
                userInput={userInput}
              />
              <UserInput
                Label="Duration"
                Key="duration"
                onChange={onChanged}
                userInput={userInput}
              />
            </div>
          </div>
          {/* write a button to submit the input taken from user */}
          {/* <Flex display="flex" style={{ justifyContent: "center" }}> */}
          <Button className={styles.mainButton} onClick={onClicked}>
            Submit
          </Button>
          {/* </Flex> */}
          {/* {validResult ? (
              <TableFUI userInput={userInput} />
            ) : (
              <p id="header">Duration must be greater than 0</p>
            )} */}
        </DrawerBody>
      </Drawer>
    </div>
  );
}
