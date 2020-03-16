import React, { Component } from 'react';
import FPLeftMovie from './FPLeftMovie';

class FrontPage extends Component {

    render(){
        return(
            <div className="FP">
                <div className="FPLeft">
                    <FPLeftMovie />
                    <FPLeftMovie />
                </div>
                <div className="FPRight">

                </div>
            </div>
        )
    }
}

export default FrontPage;