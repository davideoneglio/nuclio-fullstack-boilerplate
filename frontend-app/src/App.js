import React from 'react';
import './App.css';
import LandingPage from "./Components/LandingPage/LandingPage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Signup} from "./Components/SignupPage/signuppage";
import LoginForm from "./Components/LoginForm";
import initialBoard from "./Components/InitialBoard/initialBoard";
import PrivateRoute from "./Components/PrivateRoute/privateRoute";

function App() {
  return (
      <Router>
        <div className="App">
            <Switch>
                <Route exact path="/" render={props => <LandingPage {...props}/>}/>
                <Route exact path="/signup" render={props => <Signup {...props}/>}/>
                <Route exact path="/boards" component={initialBoard} />
                <Route exact path="/login"><LoginForm/></Route>
                <PrivateRoute  path="/home" component={() => {console.log("HOOOOOOLA"); return null}}/>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
