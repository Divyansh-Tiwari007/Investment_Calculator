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
import InputForm3 from "./InputForm3";

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
  status: boolean;
  userInput: Object;
  onChanged: Function;
  onClicked: VoidFunction;
}
type DrawerType = Required<DrawerProps>["type"];

export default function Drawery({
  status,
  userInput,
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
              <InputForm3 onChanged={onChanged} userInput={userInput} onClicked={onClicked} />
            </div>
          </div>
        </DrawerBody>
      </Drawer>
    </div>
  );
}
