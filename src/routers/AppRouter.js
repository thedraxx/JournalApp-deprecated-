import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/firebase-config';
import { login } from '../actions/auth';

export const AppRouter = () => {
    const dispatch = useDispatch();

    useEffect(() => {

        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName))
            }
        });

    }, [dispatch])

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<JournalScreen />} />
                    <Route path="/auth/*" element={<AuthRouter />} />
                    <Route path="/*" element={<AuthRouter />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
