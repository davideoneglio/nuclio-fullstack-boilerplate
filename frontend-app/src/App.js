import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import LoginForm from "./Components/LoginForm";
import './App.css';

function App() {
  return (
    <div>
        <Router>
                <Switch>
                    <Route path="/login">
                        <LoginForm/>
                    </Route>
                </Switch>
        </Router>
    </div>
  );
}

export default App;
