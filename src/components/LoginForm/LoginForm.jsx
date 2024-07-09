import "./LoginForm.css"
import React from 'react'

function LoginForm() {
  return (
    <div className="login-form-container">
      <form className="form-container">
        <div className="welcome-container">
          <h5>Welcome</h5>
        </div>
        <div className="username-container class-input">
          <label htmlFor="id-username">Username:</label>
          <input type="text" name="" id="id-username" />
        </div>
        <div className="password-container class-input">
          <label htmlFor="id-password">Password:</label>
          <input type="password" name="" id="id-password" />
        </div>
        <div className="login-button-container">
          <button>Login</button>
        </div>
        <div className="create-new-account-container">
          <h4><a href="#">Create a new account</a></h4>
        </div>
      </form>
      <div className="big-sizes-image-container">
        <img src="./images/login.svg" alt="" />
      </div>
    </div>
  )
}

export default LoginForm