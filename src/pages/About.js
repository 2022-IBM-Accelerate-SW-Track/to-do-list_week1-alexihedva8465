import React, { Component } from 'react';
import prof from './prof.jpg'; 

  
export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left"> 
            {/* IMAGE */}
            <img src={prof} className="profile_image centered" alt="profilepic"></img>
        </div>

        <div className="split right"> 
        
            <h1 className="name_title"> Alexis Hedvat </h1>
            <p className="brief_description"> I am computer 
              science major at Tufts Univeristy! I am also interested in 
              Human Factors Engineering and tech ethics. </p>
        </div>
      
      </div>
    )
  }
}