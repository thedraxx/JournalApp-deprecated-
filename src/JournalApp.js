import React from 'react'
import './styles/styles.scss'
import {
    BrowserRouter,

} from "react-router-dom";
import { AppRouter } from './routers/AppRouter';

export const JournalApp = () => {
    return (
        <div>
            <AppRouter />
        </div>
    )
}
