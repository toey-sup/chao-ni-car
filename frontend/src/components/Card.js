import React from 'react';
import { 
    Card,
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
    Button 
} from "react-bootstrap";

const CardComponent = (prop) => {
  return (
<div class="card" style={{width: 200}}>
    <div class="card-body">
        <h class="card-title">Card title</h>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
  );
};

export default CardComponent;


