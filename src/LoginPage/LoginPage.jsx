import React from 'react'
import { Link } from 'react-router-dom'
//import Navigation from '../Navbar/Navbar'
//import { usestate } from 'react'
//import { useNavigate } from "react-router-dom"
import './LoginPage.css'

function LoginPage(){
    return( 
        <div className="Login">
        <div className="facebook">
        <div className="facebooktext">  

        facebook
          <div className="title">
          Connect with friends and the world 
          <br></br>around you on facebook.
          </div>
          </div></div>
              
          <div className="loginContainer">        
          <div className="logindetail">
          <h3>Login in to Facebook</h3>
          <input type="email"placeholder="Email address or Phone Number"/>
          <br></br>
          <input type="Password"placeholder="Password"/>
          <br></br>

          <button className="btn">
          <Link to="/Home">LogIn</Link>
            </button>
            
            </div>
            <br></br>
        <div className="forget">
          <a href="forget">Forgotten account? </a><a>Sign up for Facebook?</a> 
          <br></br>
        </div>
        <div className="create">
      
        

        <button className="btns">
          <Link to="/SignUp">Create New Account</Link>

        </button>
      </div>
      <p></p>
      <br></br>

      </div>
      
      </div>
    )
}
export default LoginPage;
