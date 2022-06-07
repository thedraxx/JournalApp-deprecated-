import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';

export const RegisterScreen = () => {

    const [formValues, handleInputChange, reset] = useForm({
        name: 'Hernando',
        email: 'nando@gmail.com',
        password: '12346',
        password2: '12346',
    })
    const { name, email, password, password2 } = formValues

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            console.log('form is valid')
        }

    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            console.log('name is requiered')
            return false
        } else if (!validator.isEmail(email)) {
            console.log('email is not valid')
            return false
        } else if (password !== password2 || password.length < 5) {
            console.log('password should be at least 6 characterslong')
            return false
        }
        return true;
    }

    return (
        <>
            <h3 className='auth__tittle'>Register</h3>
            <form onSubmit={handleSubmit}>
                <div className='auth__alert-error'>
                    Hola mundo
                </div>

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
