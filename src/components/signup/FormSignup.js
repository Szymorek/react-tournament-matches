import React from 'react'
import useForm from './useForm'
import validateInfo from './validateInfo'
import { Link } from 'react-router-dom'

const FormSignup = ({ submitForm }) => {
const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validateInfo)

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Start creating tournaments and playing matches today!
                    Create your account by filling out the information below.
                </h1>
                <div className='form-inputs'>
                    <label htmlFor='username' className='form-label'>Username</label>
                    <input
                        id='username'
                        type='text'
                        name='username'
                        className='form-input'
                        placeholder="Enter your username"
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='firstName' className='form-label'>Name</label>
                    <input
                        id='firstName'
                        type='text'
                        name='firstName'
                        className='form-input'
                        placeholder="Enter your name"
                        value={values.firstName}
                        onChange={handleChange}
                    />
                    {errors.firstName && <p>{errors.firstName}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='surname' className='form-label'>Surname</label>
                    <input
                        id='surname'
                        type='text'
                        name='surname'
                        className='form-input'
                        placeholder="Enter your surname"
                        value={values.surname}
                        onChange={handleChange}
                    />
                    {errors.surname && <p>{errors.surname}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='email' className='form-label'>Email</label>
                    <input
                        id='email'
                        type='email'
                        name='email'
                        className='form-input'
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='password' className='form-label'>Password</label>
                    <input
                        id='password'
                        type='password'
                        name='password'
                        className='form-input'
                        placeholder="Password..."
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='password2' className='form-label'>Confirm Password</label>
                    <input
                        id='password2'
                        type='password'
                        name='password2'
                        className='form-input'
                        placeholder="Password..."
                        value={values.password2}
                        onChange={handleChange}
                    />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className="form-input-btn"
                 qtype='submit'>
                     Sign up
                 </button>
                 <span className="form-input-login">
                     Already have an account? Login <Link to="/login">here</Link>!
                 </span>
            </form>
        </div>
    )
}

export default FormSignup
