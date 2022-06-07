import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'

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

    }

    const isFormValid = () => {

    }

    return (
        <>
            <h3 className='auth__tittle'>Register</h3>
            <form onSubmit={handleSubmit}>

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
