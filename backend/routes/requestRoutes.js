const mongoose = require("mongoose");
const Car = mongoose.model("cars");
const Request = mongoose.model("requests");
const User = mongoose.model("users");
const requireLogin = require("../middlewares/requireLogin");
module.exports = app => {
  app.get("/api/request", async (req, res) => {
    // ดึง request ทั้งหมดที่จองไว้
    const requests = await Request.find({}); //_renter: req.user["_id"]
    res.send(requests);
  });

  app.post("/api/request",  
    async (req, res) => {
    // ใช้จองรถ โดยต้องส่งข้อมูลมาจอง เช่น carId, fromLoc, toLoc, dateFrom, dateTo
    const { carId, dateFrom, dateTo, amount } = req.body;
    console.log(carId, dateFrom, dateTo, amount);
    try {
        const car = await Car.findOneAndUpdate(
            { _id: carId, isRented: false },
            {
              $set: {
                isRented: true
              }
            },
          );
        if (!car) {
            throw {
                name: "CarError",
                message: "Car not found or Car is rented"
            }
        }

        //console.log("car", car);


        const request = await new Request({
            _renter: req.user,
            _owner: car._owner,
            _car: carId,
            //fromLoc,
            //toLoc,
            dateFrom,
            dateTo,
            amount
          }).save();
        console.log("newRequest", request)
          res.send(request);
        
    } catch (err) {
        if (err.name === "CarError") {
            res.status(400).send(err)
        } else {
            res.status(400).send(err)
        }
    }
  });

  app.put(
    "/api/request/:requestId",
    requireLogin,
    async (req, res) => {
      // ใช้สำหรับ ยืนยัน คืนรถแล้ว
      
      try {
        const request = await Request.findOneAndUpdate(
            { _id: req.params.requestId },
            {
              $set: {
                isCompleted: true
              }
            },
            (err, result) => {
              if (err) {
                throw {
                    name: "UpdateRequestError"
                }
              }
            }
          );
        if (!request) {
            throw {
                name: "UpdateRequestError"
            }
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
              }
            }
          }
        );
        if (!car) {
            throw {
                name: "UpdateCarError"
            }
        }

        console.log(car);
        console.log(request._owner)
        console.log(request.total)
        const owner = await User.findOneAndUpdate(
          { _id: request._owner },
          {
            $inc: {
              credits: request.total
            }
          },
          (err, result) => {
            if (err) {
              throw {
                  name: "UpdateCreditError"
              }
            }
          }
        );
        if (!owner) {
            throw {
                name: "UpdateCreditError"
            }
        }
        owner.save()
        console.log(owner);
        res.status(200).send("Check Request Complete!!!");
      } catch (err) {
        if (err.name === "UpdateRequestError") {
            res.status(400).send("UpdateRequestError")
        } else if (err.name === "UpdateCarError") {
            res.status(400).send("UpdateRequestError")
        } else if (err.name === "UpdateCreditError") {
            res.status(400).send("UpdateCreditError")
        } else {
            res.status(400).send("Internal Server Error")
        }
      }
    }
  );

  app.delete(
    "/api/request/:requestId",
    requireLogin,
    async (req, res) => {
      // ใช้ยกเลิกการจอง
      Request.findByIdAndRemove(req.params.requestId, async (err, request) => {
        if (err) return res.status(500).send(err);
        console.log("request", request);
        const response = {
          message: "Successfully deleted",
          id: request.id
        };
        const car = await Car.update(
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
          }
        );
        console.log("car", car);
        return res.status(200).send(response);
      });
    }
  );
};
