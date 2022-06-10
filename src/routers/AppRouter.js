import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/firebase-config';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
    const dispatch = useDispatch();

    //Con estos useState checkeamos si estamos logeados o no
    const [cheking, setCheking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {

        //Checamos si estamos logeados
        firebase.auth().onAuthStateChanged((user) => {
            // Si tenemos el uid significa que estamos logeados
            if (user?.uid) {
                // despachamos el action de login con el uid y el displayname
                dispatch(login(user.uid, user.displayName));
                //Seteamos el loggen en true para saber si estamos logeados
                setIsLoggedIn(true);
            } else {
                //Caso contrario seteamos el loggen en false
                setIsLoggedIn(false);
            }
            setCheking(false);
        });

    }, [dispatch, setCheking, setIsLoggedIn])


    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* Ruta Publica */}
                    <Route path="/*" element=
                        {
                            <PublicRoute isLoggedIn={isLoggedIn}>
                                <AuthRouter />
                            </PublicRoute>
                        } />

                    {/* Ruta Privada */}
                    <Route path="/" element=
                        {
                            <PrivateRoute isLoggedIn={isLoggedIn}>
                                <JournalScreen />
                            </PrivateRoute>
                        } />

                </Routes>
            </BrowserRouter>
        </>
    )
}
