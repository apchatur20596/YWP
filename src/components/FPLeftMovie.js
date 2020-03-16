import React, { Component } from 'react';
import InfoBox from './InfoBox';
import SignIn from './SignInBut';

class FPLeftMovie extends Component {
    render(){
        return(
            <div className="fpleftmovie">
                <InfoBox />
                <SignIn />

            </div>
        )
    }
}

export default FPLeftMovie;