import {
  Button,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { useState } from "react";
import Drawery from "./Drawery";
import TableFUI from "./Table";

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
    marginTop: "30px",
    marginBottom: "30px",
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

function Body() {
  const [isOpen, setIsOpen] = useState(false);
  const [init, setInit] = useState(false);

  function handleDrawerClick() {
    setIsOpen(() => !isOpen);
    setInit(true);
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
            <Drawery status={isOpen} onClicked={handleDrawerClick} />
          ) : (
            <Drawery status={isOpen} onClicked={handleDrawerClick} />
          )
        ) : init ? (
          <TableFUI />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Body;
