import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import { UserInput } from "./Components/Context";

function App() {
  // const [userInput, setUserInput]: any = useState({
  //   initialInvestment: 1000,
  //   annualInvestment: 100,
  //   expectedReturn: 10,
  //   duration: 10,
  // });

  return (
    <UserInput.Provider
      value={{
        initialInvestment: 0,
        annualInvestment: 0,
        expectedReturn: 0,
        duration: 0,
      }}
    >
      <div className="App">
        <Header />
        <div className="fade_rule"> </div>
        <Body />
      </div>
    </UserInput.Provider>
  );
}

export default App;
