import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";

function App() {
  console.log("hi")
  return (
    <>
      <div className="App">
        <Header />
        <div className="fade_rule"> </div>
        <Body />
      </div>
    </>
  );
}

export default App;

