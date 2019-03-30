import React from "react";
import "./Booking.css";
const Booking = props => {
  return (
        <div className="item">
          <div className="buttons">
            <span className="delete-btn" />
            <span className="like-btn" />
          </div>

          <div className="image">
            <img/>
          </div>

          <div className="description">
            <span>Toyota</span>
            <span>auto</span>
            <span>White</span>
          </div>

          <div className="total-price">549 Baht</div>
        </div>
        
  );
};
export default Booking;
