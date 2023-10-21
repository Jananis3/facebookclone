import React from 'react'
import { Link} from 'react-router-dom'
import './SignUp.css'

function SignUp(){
    return( 
      <div className="SignUp">
      <div className="facebook">
      <div className="facebooktext">  
      facebook Create Account
      </div>
        <div className="title">
        Connect with friends and the world 
        <br></br>around you on facebook.
        </div>
        </div>      
        <div className="SignUpContainer">        
        <div className="SignUpdetail">
        <h3>SignUp</h3>
        <input type="UserName"placeholder="Email address or Username"/>
        <br></br>
        <input type="FirstName"placeholder="firstname"/>
        <br></br>
        <input type="LastName"placeholder="lastname"/>
        <br></br>
        <input type="date" id="Birthday" placeholder="DOB"/>
        <br></br>
        <input type="Gender"placeholder="gender"/>
        <br></br>
        <input type="Password"placeholder="Password"/>
        <br></br>
        
        <input type="Password"placeholder="Confirm Password"/>
        <br></br>

        <button className="btn">
        <Link to="/">Create Account</Link>
          </button>
          
          
          </div>
          <br></br>
      <div className="">
        <a href="forget">Forgotten account? </a><a href="Signup"> Sign up for Facebook?</a> 
        <br></br>
    </div></div>
    </div>
        
        
        
          
          )
}

    export default SignUp;
