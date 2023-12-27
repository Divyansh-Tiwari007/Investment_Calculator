import { makeStyles, shorthands } from "@fluentui/react-components";
import { useState } from "react";
import UserInput from "./UserInput";
import TableFUI from "./TableFUI";
import Drawery from "./Drawery";

const useStyles = makeStyles({
  userInput: {
    ...shorthands.padding("1rem"),
    width: "30rem",
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
  },
  drawery: {
    display: "flex",
    justifyContent: "center",
  },
});

export default function Input() {}
  

  

  

//   const classes = useStyles();

//   return (
//     <>
//       <div className={classes.userInput}>
//         <div className={classes.userInputGroup}>
//           <UserInput
//             Label="Initial Investment"
//             Key="initialInvestment"
//             onChange={handleChange}
//             userInput={userInput}
//           />
//           <UserInput
//             Label="Annual Investment"
//             Key="annualInvestment"
//             onChange={handleChange}
//             userInput={userInput}
//           />
//         </div>
//         <div className={classes.userInputGroup}>
//           <UserInput
//             Label="Expected Return"
//             Key="expectedReturn"
//             onChange={handleChange}
//             userInput={userInput}
//           />
//           <UserInput
//             Label="Duration"
//             Key="duration"
//             onChange={handleChange}
//             userInput={userInput}
//             Result={validResult}
//           />
//         </div>x
//       </div>
//       <div className={classes.drawery}>
//         <Drawery />
//       </div>
//       {validResult ? (
//         <TableFUI userInput={userInput} />
//       ) : (
//         <p id="header">Duration must be greater than 0</p>
//       )}
//       {/* <Table` userInput={userInput} /> */}
//     </>
//   );
// }
