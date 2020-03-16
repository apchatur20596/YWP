import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class SignIn extends Component {

    redirectSignIn = () => {
        console.log("Inside the function");
    }

    render(){
        return(
            <div>
                <Link to="/signin"><button type="button" className="signinbut" onClick={this.redirectSignIn}> Sign in</button></Link>
                <Link to="/signup"><button type="button" className="signupbut"> Sign up</button></Link>
            </div>
        )
    }
}

export default SignIn;