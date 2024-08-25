import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';




import './index.css'

const LoginForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the token is already in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    console.log(token)

    if (token) {
      // Save the token in localStorage
      localStorage.setItem('jwtToken', token);


      window.location.href = '/google-login';
    }
  }, []);

  const handleGoogleLogin = () => {
    const redirectUrl = encodeURIComponent('https://frontend.com');
    window.location.href = `https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=${redirectUrl}`;
  };

  return (
    <div className='login-container'>
      <nav className='nav-container'>
        <FaEnvelope size ={24} color='white'/>
        <span>REACHINDEX</span>
        
      </nav>  
      <div className='login-card-container'> 
      <div className='login-card'>
        <h1 className='main-heading'>Create a new account</h1>
        <button className='google-sign' onClick={handleGoogleLogin}>
        <FaGoogle size={22} className='google-icon'/>
        <p>Sign up with google</p>
          </button>      
      <button className='account-button'>Create an Account</button>
      <p>Already have an account? <span>Sign In</span></p>
      </div>
      </div>
      
    </div>
  );
};

export default LoginForm;
