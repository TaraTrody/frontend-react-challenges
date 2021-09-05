import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Gallery from "./home"
import Signup from "./sign-up_form"

function App() {
  return (
    <Router>
      <div className="App"> 
        <Gallery/>
        <Switch>
          <Route path="/signup">
            <Signup/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
