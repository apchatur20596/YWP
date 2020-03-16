import React, { Component } from 'react';
import Header from '../components/Header';

class SignUpPage extends Component {
    render() {
        return(
            <div>
                <Header />
                <div align="center" className="signupbox">
                    <h1 align="left"> Sign Up </h1>
                    <hr className="whitehr" /><br />
                    <p className="noaccount">Don't have an account yet? Get Started</p>
                    <hr className="hror" /><p id="ortext">OR</p> <hr className="hror" />
                    <br /><br /><br />
                    <form>
                        <input id="emailup" type="email" name="email" placeholder="   Email Address" />
                        <input type="password" name="password" id="passup" placeholder="   Password" />
                        <button type="submit" id="subup"> Sign Up</button>
                        <p id="forgotpass">Forgot Password?</p>
                    </form>

                </div>
            </div>
        )
    }
}

export default SignUpPage;