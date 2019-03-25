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
                    Mussum ipsum cacilds, vidis litro abertis. Consetis
                    adipiscings elitis. Pra lá , depois divoltis porris,
                   
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
                    Mussum ipsum cacilds, vidis litro abertis. Consetis
                    adipiscings elitis. Pra lá , depois divoltis porris,
                    paradis. Paisis, filhis, espiritis santis. Mé faiz elementum
                    
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
