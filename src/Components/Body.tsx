import { makeStyles, tokens } from "@fluentui/react-components";
import { Flex } from "@mantine/core";
import Input from "./Input";
import Table from "./Table";
import React from "react";

const useStyles = makeStyles({
  outerBody: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#d6d6d6",
  },
  body: {
    // backgroundColor: "ColorTokens.colorNeutralBackground3Pressed",
    backgroundColor: tokens.colorNeutralBackground3Pressed,
    width: "90%",
    height: "auto",
    minHeight: "60vh",
    // overflowY: "scroll",
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
  },
});

function Body() {
  const classes = useStyles();
  return (
    <div className={classes.outerBody}>
      <div className={classes.body}>
        <Flex display="flex" direction="column">
          <Input />
        </Flex>
      </div>
    </div>
  );
}

export default Body;
