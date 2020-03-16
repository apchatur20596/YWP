import React, { Component } from 'react';
import Header from '../components/Header';

class SignInClass extends Component {
    render() {
        return(
            <div>
                <Header />
                <div align="center" className="signupbox">
                    <h1 align="left"> Sign In </h1>
                    <form>
                        <input id="emailup" type="text" name="First Name" placeholder="   First Name" />
                        <input id="emailup" type="text" name="Last Name" placeholder="   Last Name" />
                        <input id="emailup" type="text" name="Last Name" placeholder="   Address, City, State, Country." />
                        <input id="emailup" type="email" name="email" placeholder="   Email Address" />
                        <input id="emailup" type="email" name="password" placeholder="   Password" />
                        <input type="password" name="password" id="passup" placeholder="  Confirm Password" />
                        <input type="tel" id="emailup" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="   Phone Number" />
                        
                        <h2 align="left">Date of Birth</h2>
                        <input type="date" id="birthday" name="birthday" /><br />  
                        
                        <h2 align="left">Gender</h2>
                        <div className="genderin">
                            <input type="radio" id="male" name="gender" value="male" />
                            <label className="gender">Male</label>
                            <input type="radio" id="female" name="gender" value="female" />
                            <label className="gender">Female</label>
                            <input type="radio" id="other" name="gender" value="other" />
                            <label className="gender">Other</label>
                        </div><br />    

                        <h2 align="left">Ethnicity</h2>
                        <select id="emailup">
                            <option value="volvo" disabled selected>Select ...</option>
                            <option value="saab">Hispanic or Latino</option>
                            <option value="mercedes">White (Not Hispanic or Latino)</option>
                            <option value="audi">Black or African American (Not Hispanic or Latino)</option>
                            <option value="audi">Asian (Not Hispanic or Latino)</option>
                            <option value="audi">American Indian (Not Hispanic or Latino)</option>
                            <option value="audi">Two or more </option>
                            <option value="audi">Decline to self-identify </option>
                        </select>

                        <button type="submit" id="subup"> Sign In</button>
                    </form>
                </div>            
            </div>
        )
    }
}

export default SignInClass;