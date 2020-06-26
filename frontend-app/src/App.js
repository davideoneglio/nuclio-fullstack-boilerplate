import React from 'react';
import './App.css';
import LandingPage from "./Components/LandingPage/LandingPage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Signup} from "./Components/SignupPage/signuppage";

function App() {
  return (
      <Router>
        <div className="App">
            <Route render={props => <LandingPage {...props}/>}/>
            <Signup />

        </div>
      </Router>
  );
}

export default App;
