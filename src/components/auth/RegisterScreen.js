import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { RemoveError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    //Con esto obtenemos el error que viene del state del reducer
    const { msgError } = useSelector(state => state.ui);

    const [formValues, handleInputChange, reset] = useForm({
        name: 'Hernando',
        email: 'nando2@gmail.com',
        password: '1234678',
        password2: '1234678',
    })
    const { name, email, password, password2 } = formValues


    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(name, email, password))
        }
    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError('name is requiered'))
            return false
        } else if (!validator.isEmail(email)) {
            dispatch(setError('email is not valid'))
            return false
        } else if (password !== password2 || password.length < 5) {
            dispatch(setError('password should be at least 6 characters long'))
            return false
        }
        dispatch(RemoveError())
        return true;
    }

    return (
        <>
            <h3 className='auth__tittle'>Register</h3>
            <form onSubmit={handleSubmit}>
                {
                    msgError && <div className='auth__alert-error'>{msgError}</div>
                }
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className='auth__input'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                />

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

                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    className='auth__input'
                    value={password2}
                    onChange={handleInputChange}
                />

                <button
                    type='submit'
                    className='btn btn-primary btn-block mb-5'
                >
                    Register
                </button>

                <Link
                    to="/auth/login"
                    className='link'
                >
                    Already Registered?
                </Link>
            </form>
        </>
    )
}
