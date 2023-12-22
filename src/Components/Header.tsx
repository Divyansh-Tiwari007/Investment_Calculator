import { Image, makeStyles, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
  img: {
    width: "7rem",
    height: "7rem",
  },
  txt: {
    color: "#84c140",
    marginRight: "15px",
  },
  dtxt: {
    display: "flex",
    fontSize: "2.5rem",
  },
  headerdiv: {
    display: "flex",
    height: "33vh",
    flexDirection: "column",
    backgroundColor: tokens.colorNeutralForeground3,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
});

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.headerdiv}>
      <Image className={classes.img} src="headericon.png" alt="nan" />
      <h1 className={classes.dtxt}>
        <section className={classes.txt}>Investment </section> Calculator
      </h1>
    </div>
  );
}

export default Header;
