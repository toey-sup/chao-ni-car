import React from "react";
import Car from "./Car";
import "./Carlist.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
class Carlist extends React.Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    console.log(id);
    axios
      .delete("/api/cars/" + id)

      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="carlist">
        {this.props.cars.map(car => {
          return (
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "center"
              }}
            >
              <Car
                id={car._id}
                LNumber={car.LNumber}
                isRented={car.isRented}
                pricePerDay={car.pricePerDay}
                regYear={car.regYear}
                brand={car.brand}
                type={car.type}
                description={car.description}
                picture={car.photo}
                handleDelete={this.handleDelete}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
export default withRouter(Carlist);
