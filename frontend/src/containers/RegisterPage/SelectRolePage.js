import React, { Component } from "react";
import "./SelectRolePage.css";

class SelectRolePage extends Component {
  render() {
    
    return (
      <div class="SelectRoleBackground">
        <div class="container wrapper">
        <row>
        <h1 className = "textcenter">SELECT ROLE</h1>
        </row>
          <div class="row">
            <div class="col-md-6 col-sm-8 col-xs-12 col-md-offset-3 col-sm-offset-2">
              <div class="card">
                <div class="image">
                  <img
                    src="https://www.budget.co.cr/wp-content/uploads/Blog-Learn-the-advantages-and-disadvantages3.jpg"
                    width="100%"
                  />
                </div>

                <div class="text">


                  <h3>CAR RENTER</h3>
                  <p>
                    Find the best rental prices on luxury, economy, and family rental cars 
                    with FREE commission, reserve online today!
                    Found a good deal, and was able to compare prices from many vendors
                  </p>
                  
                </div>
                <a href = "regiscarowner"> <div class="Select">SELECT</div></a>
              </div>
              
            </div>
            <div class="col-md-6 col-sm-8 col-xs-12 col-md-offset-3 col-sm-offset-2">
              <div class="card">
                <div class="image">
                  <img
                    src="https://images.wallpaperscraft.com/image/car_motorcycle_garage_114811_3840x2400.jpg"
                    width="100%"
                  />
                </div>

                <div class="text">


                  <h3>CAR OWNER</h3>
                  <p>
                    Let your car rent in our system to make money with FREE commission.
                    Easy to be rented with over 250,000 customer in your country. 
                    
                  </p>
                  
                </div>
                <a href = "/regisrenter"> <div class="Select">SELECT</div></a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectRolePage;
