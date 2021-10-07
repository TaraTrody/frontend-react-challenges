import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Signup from "./components/SignUp";
import * as ROUTES from "./constants/routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path={ROUTES.SIGN_IN} component={Signup} exact />
      </div>
    </Router>
  );
}

export default App;
