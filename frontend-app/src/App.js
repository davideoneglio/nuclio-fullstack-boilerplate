import React from 'react';
import './App.css';
import LandingPage from "./Components/LandingPage/LandingPage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Signup} from "./Components/SignupPage/signuppage";
import HomePage from "./Components/HomePage/HomePage";
import initialBoard from "./Components/InitialBoard/initialBoard";

function App() {
  return (
      <Router>
        <div className="App">
            <Switch>
                <Route exact path="/" render={props => <LandingPage {...props}/>}/>
                <Route exact path="/signup" render={props => <Signup {...props}/>}/>
                <Route exact path="/home" render={props => <HomePage {...props}/>}/>
                <Route exact path="/boards" component={initialBoard} />
            </Switch>
        </div>
      </Router>
  );
}

export default App;