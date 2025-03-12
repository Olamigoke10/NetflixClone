import React from 'react'
import './login.css'
import logo from '../../assets/logo.png'

const Login = () => {
  return (
    <div className='login'>
      <img src={logo} alt="" className='login-logo' />
      <div className="login-form">
        <h1>Sign In</h1>
        <form>
          <input type="text" placeholder='Your name' />    
          <input type="email" placeholder='Email' />    
          <input type="password" placeholder='Password' />  
          <button>Sign In</button>
          <div className='form-help'>
            <div className='remeber'>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Remeber Me</label>
            </div>
            <p>Need Help?</p>
          </div>  
        </form>
      </div>
    </div>
  )
}

export default Login
