import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Login.css'
const Login = () => {
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const user =  result.user
            console.log(user)
            form.reset();
            navigate(from, {replace: true})

        })
        .catch(error => console.error(error))
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSubmit}>

                <div className='form-control'>
                    <label htmlFor="email" required>Email</label>
                    <input type="email" name='email' />
                </div>
                <div className='form-control'>
                    <label htmlFor="password" required>Password</label>
                    <input type="password" name='password' />
                </div>

                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>New to this site <Link to='/signup'>Create a new Account</Link></p>
        </div>
    );
};

export default Login;