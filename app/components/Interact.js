import React from 'react';
import './Interact.css';

class Interact extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="container">
            <h1>LETS INTERACT STITCHES</h1>
              <p>Connect With Designers All Over Nigeria</p>
              <a className="proceed" href="#">Log in</a>
          </div>
        </div>

        <div className="nav">
          <div className="container">
            <ul>
              <li><a href="#register">Register</a></li>
              <li><a href="#trainings">Trainings</a></li>
              <li><a href="#designs">Designs</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
           </ul>
         </div>
       </div>
    </div>
        )
    }
}

export default Interact;
