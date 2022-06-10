import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';


export const PrivateRoute = ({ children, isLoggedIn }) => {
    // isLoggedIn = true (logeado)  o  isLoggedIn = false (no logeado)
    //Children es el componente que se va a renderizar, el hijo de private route
    return isLoggedIn ? children : <Navigate to="/login" />;
}
