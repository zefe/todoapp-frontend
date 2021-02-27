import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { startLogin } from '../actions/auth';
import { useForm } from "../hooks/useForm";

export const LoginView = () => {

    const dispatch = useDispatch();
    const { error } = useSelector(state => state.auth);
    
    console.log(error)

    const initialForm = {
        email: 'juan@test.com',
        password: '123456',
    }

    const [ formValues, handleInputChange ] = useForm( initialForm );

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLogin(email, password));
    }

    return (
        <div className="login">
            <h1>Sign in</h1>
            <form onSubmit={ handleLogin } className="form">
                <div className="form-group"> 
                    <small style={{color:'red'}}>{error}</small>
                </div>

                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="juanita@example.com"
                        value={ email }
                        onChange={ handleInputChange }
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        value={ password }
                        onChange={ handleInputChange }
                        required
                    />
                </div>
                <div className="form-button">
                    <button className="btn btn-primary">Sign in</button>
                </div>
                <div className="form-link">
                    <span>Don't have an Account?</span> <a href="#" >Sign Up</a>
                </div>
            </form>
        </div>
    )
}
