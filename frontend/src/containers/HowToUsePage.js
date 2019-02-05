
import React, {Component} from 'react'
import CarJumbotron1 from '../components/Jumbotron/Jumbotron1'
import CarCards from '../components/CarCard/CarCards';
//import Navbar from './components/Navbar/Navbar';

class HowToUsePage extends Component {
    render() {
        return (
            <div>     
                
            <div style={{ textAlign: 'center', paddingBottom: 15 }}>
            <h1 class="display-3">How to use CAO-NI-CAR system?</h1>
            </div>

            <hr class="my-4"></hr>
            <p class="lead">1. You need to register system</p>
            <div style={{ textAlign: 'center', paddingBottom: 15 }}>
            <img src="https://i.imgur.com/q4Q2mfc.png" width="700" height="700" />
            </div>

            <hr></hr>
            <p class="lead">2. Fill your rental time</p>
            <div style={{ textAlign: 'center', paddingBottom: 15 }}>
            <img src="https://i.imgur.com/8Vj3ngQ.jpg" width="1000" height="700" />
            </div>

            <hr></hr>
            <p class="lead">3. Choose your service detail</p>
            <div style={{ textAlign: 'center', paddingBottom: 15 }}>
            <img src="https://i.imgur.com/uee9AMb.png" width="500" height="500" />
            </div>

            <hr></hr>
            <p class="lead">4. Make confirmation with car owner</p>
            <div style={{ textAlign: 'center', paddingBottom: 15 }}>
            <img src="https://i.imgur.com/xsSeasz.png" width="500" height="500" />
            </div>
            <hr ></hr>
            
            </div>
                
        )
    }
}

export default HowToUsePage