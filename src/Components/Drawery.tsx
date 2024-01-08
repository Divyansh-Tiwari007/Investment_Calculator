import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons";
import InputForm3 from "./InputForm";

const useStyles = makeStyles({
  root: {
    width: "30%",
    ...shorthands.border("2px", "solid", "#ccc"),
    ...shorthands.overflow("hidden"),
    // backgroundColor: "red",
    color: "black",
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
    // backgroundColor: "#84c140",

    fontWeight: "Bolder",
    fontSize: "1rem",
    color: "white",
  },

  drawer: {
    backgroundColor: tokens.colorPaletteGreenBackground3,
    color: "black",
    width: "50%",
  },

  userInput: {
    ...shorthands.padding("1rem"),
    width: "90%",
    ...shorthands.margin("2rem", "auto"),
    ...shorthands.borderRadius("14px"),
    backgroundColor: tokens.colorPaletteGreenBackground2,
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
  status: boolean;
  onClicked: VoidFunction;
}

export default function Drawery({ status, onClicked }: IDrawerProps) {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Drawer
        className={styles.drawer}
        type="overlay"
        separator
        open={status}
        position={"end"}
      >
        <DrawerHeader>
          <DrawerHeaderTitle
            style={{ color: "black" }}
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
              <InputForm3 onClicked={onClicked} />
            </div>
          </div>
        </DrawerBody>
      </Drawer>
    </div>
  );
}
