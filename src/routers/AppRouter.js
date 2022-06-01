import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {
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
