import React from "react";
import { Route, Redirect } from 'react-router-dom';



const PrivateRoute = (props) => {
    const {component: Component, ...rest} = props;

    const token = localStorage.getItem('token');

    return (
        <Route {...rest} render={props => (
            (token !== "undefined") && (token !== null) && (token !== undefined) ?
                <Component {...props} />
                : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;