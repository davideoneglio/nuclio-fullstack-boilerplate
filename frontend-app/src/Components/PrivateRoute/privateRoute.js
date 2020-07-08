import React from "react";
import { Route, Redirect } from 'react-router-dom';



const PrivateRoute = (props) => {
    const {component: Component, ...rest} = props;

    const isLogged = () => {
        const token = localStorage.getItem('token');
        return token !== undefined && token !== null;
    }

    return (
        <Route {...rest} render={props => (
            isLogged() ?
                <Component {...props} />
                : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;