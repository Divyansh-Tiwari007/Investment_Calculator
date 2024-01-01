import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";
import { MantineProvider } from "@mantine/core";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <MantineProvider>
    <FluentProvider theme={teamsLightTheme}>
      <App />
    </FluentProvider>
  </MantineProvider>
);

reportWebVitals();
