import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./styles/GlobalStyles";
import Firebase, { FirebaseContext } from "./components/Firebase";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
