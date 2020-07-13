
import React from 'react';
import LandingPage from "./Components/LandingPage/LandingPage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Signup} from "./Components/SignupPage/signuppage";
import InitialBoard from "./Components/InitialBoard/initialBoardsContainer";

function App() {
  return (
      <Router>
        <div className="App">
            <Switch>
                <Route exact path="/" render={props => <LandingPage {...props}/>}/>
                <Route exact path="/signup" render={props => <Signup {...props}/>}/>
                <Route exact path='/boards/:userId/:boardId' component={InitialBoard} />
            </Switch>
        </div>
      </Router>
  );
}

export default App;