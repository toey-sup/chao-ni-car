import React from "react";
import { Jumbotron,Button } from 'react-bootstrap';
const CarJumbotron = (props) => {
  return (
    <Jumbotron>
     <h1 class="display-3">Hello, world!</h1>
     <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
     <hr class="my-4"></hr>
     <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <Button class="btn btn-primary" type="submit">Button</Button>
     <p class="lead"> </p>
    </Jumbotron>
  );
};

export default CarJumbotron;
