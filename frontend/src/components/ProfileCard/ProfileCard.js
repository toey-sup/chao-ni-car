import React from 'react';
import { FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import './ProfileCard.css';
import pic from "../../images/Kitipat.jpg"
import { BrowserRounter as Router, Route, Link } from 'react-router-dom'
const ProfileCard = (props) => {

    return (

      <div className="wrapper">
         <div className="card-container">
            <div className="img-container">
             <img src={props.back_profile} alt="" className="banner-img"/>
             <img src={pic} alt="" className="profile-img"/>
      
      <div className="share">
        <ul>
        <a href="https://github.com/Kitipatteacha"><li className="git"><i aria-hidden="true"></i> 
            Git
          </li>
        </a>
        </ul>
      </div>
    </div>
    
    <div className="content">
      <div className="title">
        <p>{props.name}</p>
        <span>{props.role}</span>
      </div>
      
      <div className="Detail">Detail</div>
      
    </div>
    </div>
         </div>
    );
}
export default ProfileCard;