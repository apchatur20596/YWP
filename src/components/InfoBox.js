import React, { Component } from 'react';

class InfoBox extends Component {
    render(){
        return(
            <div className="boxouter">
                <div className="innerbox">
                    <h1>Show Name</h1>
                    <h2>Description</h2>
                    <button type="submit" class="watchbut"> Watch</button>
                </div>

            </div>
        )
    }
}

export default InfoBox;