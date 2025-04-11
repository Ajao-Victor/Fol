import React from "react";
import { Navigate } from "react-router-dom";
const Protection = ({children}) => {
    const authentication = localStorage.getItem('authToken');
    return authentication ? children : <Navigate to="/Signin"/>
};
export default Protection;