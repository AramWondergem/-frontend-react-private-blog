import React from 'react';
import {Navigate, Route} from "react-router-dom";



function PrivateRoute({element, isAuthenticated,children}) {

    if(!isAuthenticated){
        return <Navigate to="/login"/>
    } else {
        return children
    }
}

export default PrivateRoute;