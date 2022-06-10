import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLoginEmailPassowrd, startGoogleLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    // El dispatch es para despachar acciones
    const dispatch = useDispatch();

    //El useSelector nos permite leer el state del reducer
    const loading = useSelector(state => state.ui.loading);

    //El useForm nos permite trabajar con formularios
    const [formValues, handleInputChange, reset] = useForm({
        email: 'nando2@gmail.com',
        password: '1234678',
    });

    // Sacamos la info del formvalues
    const { email, password } = formValues;

    // Se ejectua cuando hacemos click en login
    const handleLogin = (e) => {
        e.preventDefault();
        // Despachamos la accion de iniciar sesion con email y password
        dispatch(startLoginEmailPassowrd(email, password));
    }

    // Se ejectua cuando hacemos click en login con google
    const handleGoogleLogin = () => {
        // Despachamos la accion de iniciar sesion con google
        dispatch(startGoogleLogin())
    }
    return (
        <>
            <h3 className='auth__tittle'>Login</h3>
            <form onSubmit={handleLogin} >
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className='auth__input'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className='auth__input'
                    value={password}
                    onChange={handleInputChange}
                />
                <button
                    type='submit'
                    className='btn btn-primary btn-block'
                    disabled={loading}
                >
                    Login
                </button>

                <div className='auth__social-networks'>
                    <p>Login with Social Networks</p>
                    <div
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link
                    to="/auth/register"
                    className='link'
                >
                    Create New Account
                </Link>

            </form>
        </>
    )
}
