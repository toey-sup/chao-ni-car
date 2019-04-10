import React from 'react';
import './ProfileCard.css';
const ProfileCard = (props) => {

    return (

      <div className="wrapper">
         <div className="card-container">
            <div className="img-container">
             <img src={props.back_profile} alt="" className="banner-img"/>
             <img src={props.img_profile} alt="" className="profile-img"/>
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