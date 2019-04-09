const mongoose = require("mongoose");
const Car = mongoose.model("cars");
const Request = mongoose.model("requests");
const User = mongoose.model("users");
const requireLogin = require("../middlewares/requireLogin");
module.exports = app => {
  app.get("/api/request", async (req, res) => {
    // ดึง request ทั้งหมดที่จองไว้
    console.log(req.user);
    let query = {
      _renter: req.user["_id"]
    };
    if (req.user.isProvider) {
      query = {
        _owner: req.user["_id"]
      };
    }
    try {
      const requests = await Request.find(query)
        .populate("_owner")
        .populate("_car")
        .populate("_renter"); //_renter: req.user["_id"]
      res.send(requests);
    } catch (err) {
      res.status(400).send(err);
    }
  });

  app.post("/api/request", async (req, res) => {
    // ใช้จองรถ โดยต้องส่งข้อมูลมาจอง เช่น carId, fromLoc, toLoc, dateFrom, dateTo
    const { carId, dateFrom, dateTo, amount, renter } = req.body;
    console.log(carId, dateFrom, dateTo, amount);
    try {
      const car = await Car.findOneAndUpdate(
        { _id: carId, isRented: false },
        {
          $set: {
            isRented: true
          }
        },
        { new: true }
      );
      if (!car) {
        throw {
          name: "CarError",
          message: "Car not found or Car is rented"
        };
      }
      console.log("car", car);
      console.log("_renter", renter);
      console.log("_owner", car._owner);
      const request = await new Request({
        _renter: renter,
        _owner: car._owner,
        _car: carId,
        //fromLoc,
        //toLoc,
        dateFrom,
        dateTo,
        amount
      }).save();
      console.log("newRequest", request);
      res.send(request);
    } catch (err) {
      if (err.name === "CarError") {
        res.status(400).send(err);
      } else {
        res.status(400).send(err);
      }
    }
  });

  app.put(
    "/api/request/pickup/:requestId",
    //requireLogin,
    async (req, res) => {
      // ใช้สำหรับอัพเดทสถานะ

      try {
        const request = await Request.findOneAndUpdate(
          { _id: req.params.requestId },
          {
            $set: {
              status: "PickedUp"
            }
          },
          (err, result) => {
            if (err) {
              throw {
                name: "UpdateRequestError"
              };
            }
          }
        );
        if (!request) {
          throw {
            name: "UpdateRequestError"
          };
        }
        console.log(request);
        res.status(200).send("Update Request Complete!!!");
      } catch (err) {
        if (err.name === "UpdateRequestError") {
          res.status(400).send("UpdateRequestError");
        } else {
          res.status(400).send("Internal Server Error");
        }
      }
    }
  );

  app.put(
    "/api/request/complete/:requestId",
    //requireLogin,
    async (req, res) => {
      // ใช้สำหรับ ยืนยัน คืนรถแล้ว

      try {
        const request = await Request.findOneAndUpdate(
          { _id: req.params.requestId },
          {
            $set: {
              isCompleted: true,
              status: "Completed"
            }
          },
          (err, result) => {
            if (err) {
              throw {
                name: "UpdateRequestError"
              };
            }
          }
        );
        if (!request) {
          throw {
            name: "UpdateRequestError"
          };
        }
        console.log(request);

        const car = await Car.findOneAndUpdate(
          { _id: request._car },
          {
            $set: {
              isRented: false
            }
          },
          (err, result) => {
            if (err) {
              throw {
                name: "UpdateCarError"
              };
            }
          }
        );
        if (!car) {
          throw {
            name: "UpdateCarError"
          };
        }

        console.log(car);
        console.log(request._owner);
        console.log(request.amount);
        const owner = await User.findOneAndUpdate(
          { _id: request._owner },
          {
            $inc: {
              credits: request.amount
            }
          },
          { new: true }
        );
        if (!owner) {
          throw {
            name: "UpdateCreditError"
          };
        }
        owner.save();
        console.log(owner);
        res.status(200).send("Check Request Complete!!!");
      } catch (err) {
        if (err.name === "UpdateRequestError") {
          res.status(400).send("UpdateRequestError");
        } else if (err.name === "UpdateCarError") {
          res.status(400).send("UpdateRequestError");
        } else if (err.name === "UpdateCreditError") {
          res.status(400).send("Owner Not Found!!!");
        } else {
          res.status(400).send("Internal Server Error");
        }
      }
    }
  );

  app.delete(
    "/api/request/:requestId",
    //requireLogin,
    async (req, res) => {
      // ใช้ยกเลิกการจอง
      try {
        const request = await Request.findOneAndRemove({
          _id: req.params.requestId
        });
        console.log("request", request);
        const response = {
          message: "Successfully deleted",
          id: request.id
        };
        const car = await Car.findOneAndUpdate(
          { _id: request["_car"] },
          {
            $set: {
              isRented: false
            }
          },
          (err, result) => {
            if (err) {
              console.log(err);
            }
          },
          { new: true }
        );
        if (!car) {
          throw {
            name: "CarNotFound"
          };
        }
        console.log("car", car);
        const renter = await User.findOneAndUpdate(
          { _id: request._renter },
          {
            $inc: {
              credits: request.amount * 0.7
            }
          },
          { new: true }
        );
        if (!renter) {
          throw {
            name: "UpdateCreditError"
          };
        }
        console.log("renter", renter);
        res.status(200).send(response);
      } catch (err) {
        if (err.name == "UpdateCreditError") {
          return res.send(400).send("Renter Not Found!");
        }
        if (err.name == "CarNotFound") {
          return res.send(400).send("Car Not Found!");
        }
        res.status(400).send(err);
      }
    }
  );
};
