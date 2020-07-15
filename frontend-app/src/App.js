import React from 'react';
import './App.css';
import LandingPage from "./Components/LandingPage/LandingPage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Signup from "./Components/SignupPage/signuppage";
import Navbar from "./Components/Navbar/Navbar"
import HomePage from "./Components/HomePage/HomePage";
import LoginForm from "./Components/LoginForm/LoginForm";
import PrivateRoute from "./Components/PrivateRoute/privateRoute";
import InitialBoard from "./Components/InitialBoard/initialBoardsContainer";

function App() {
  return (
      <Router>
        <div className="App">
            <Switch>
                <Route exact path="/navbar" render={Navbar}/>
                <Route exact path="/" render={props => <LandingPage {...props}/>}/>
                <Route exact path="/signup" render={props => <Signup {...props}/>}/>
                <PrivateRoute exact path="/home" component={props => <HomePage {...props}/>}/>
                <Route exact path="/boards" component={InitialBoard} />
                <Route exact path="/boards/:userId/:boardId" component={InitialBoard} />
                <Route exact path="/login"><LoginForm/></Route>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
