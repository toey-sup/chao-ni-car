import React from 'react';
import { FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import './ProfileCard.css';
import pic from "../../images/Kitipat.jpg"
import { BrowserRounter as Router, Route, Link } from 'react-router-dom'
const ProfileCard = (props) => {

    return (

      <div class="wrapper">
         <div class="back">
            <div class="img-container">
             <img src={props.back_profile} alt="" class="banner-img"/>
             <img src={pic} alt="" class="profile-img"/>
      
      <div class="share">
        <ul>
        <a href="https://github.com/Kitipatteacha"><li class="git"><i aria-hidden="true"></i> 
            Git
          </li>
        </a>
        </ul>
      </div>
    </div>
    
    <div class="content">
      <div class="title">
        <p>{props.name}</p>
        <span>{props.role}</span>
      </div>
      
      <div class="Detail">Detail</div>
      
    </div>
    
         </div>
    </div>
    );
}
export default ProfileCard;