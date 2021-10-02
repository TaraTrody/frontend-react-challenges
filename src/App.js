import React from "react";
import { Route } from "react-router-dom";

import Gallery from "./home";
import Signup from "./sign-up_form";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Gallery} exact />
      <Route path="/signup" component={Signup} exact />
    </div>
  );
}

export default App;
