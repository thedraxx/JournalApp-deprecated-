import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'

// Rutas Publicas
export const AuthRouter = () => {
    return (
        <div className='auth__main'>
            <div className='auth__box-container'>
                <Routes>
                    <Route path="login" element={<LoginScreen />} />
                    <Route path="register" element={<RegisterScreen />} />
                    <Route
                        path="*"
                        element={<Navigate to="register" replace />}
                    />
                </Routes>
            </div>

        </div>
    )
}
