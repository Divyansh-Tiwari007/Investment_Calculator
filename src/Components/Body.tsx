import { makeStyles, shorthands, tokens } from "@fluentui/react-components";
import { Flex } from "@mantine/core";
import Input from "./Input";

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
    minHeight: "60vh",
    display: "flex",
    justifyContent: "center",
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
