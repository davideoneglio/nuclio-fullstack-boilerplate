import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from "./Components/LandingPage/LandingPage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
      <Router>
        <div className="App">
            <Route render={props => <LandingPage {...props}/>}/>

        </div>
      </Router>
  );
}

export default App;
