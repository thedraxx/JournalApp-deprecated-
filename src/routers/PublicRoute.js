import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'

export const PublicRoute = ({ isLoggedIn, children }) => {
    // isLoggedIn = true (logeado)  o  isLoggedIn = false (no logeado)
    //Children es el componente que se va a renderizar, el hijo de public route
    return isLoggedIn ? <Navigate to="/" /> : children;
}
