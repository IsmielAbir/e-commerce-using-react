import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './SignUp.css'
const SignUp = () => {

    const [error, setError] = useState(null)
    const {createUser} = useContext(AuthContext)

    const handleSubmit = (event) =>{
            event.preventDefault()
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
            const confirm = form.confirm.value;

            if(password.length < 6 ){
                setError("password Should be 6 characters long")
                return;
            }

            if(password !== confirm){
                setError("Password did not match")
                return;

            }

            createUser(email, password)
            .then(result =>{
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => console.error(error));
    }

    return (
        <div className='form-container'>
        <h2 className='form-title'>Sign Up</h2>
        <form onSubmit={handleSubmit}>
        

            <div className='form-control'>
                <label htmlFor="email" required>Email</label>
                <input type="email" name='email' />
            </div>
            <div className='form-control'>
                <label htmlFor="password" required>Password</label>
                <input type="password" name='password' />
            </div>
            <div className='form-control'>
                <label htmlFor="confirm" required>Confirm Password</label>
                <input type="password" name='confirm' />
            </div>

            <input className='btn-submit' type="submit" value="Sign Up" />
        </form>
        <p>Already have an account <Link to='/login'>Login</Link></p>
        <p className='text-error'>{error}</p>
    </div>
    );
};

export default SignUp;