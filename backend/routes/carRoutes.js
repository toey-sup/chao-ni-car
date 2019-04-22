const mongoose = require("mongoose");
const Car = mongoose.model("cars");
const requireLogin = require("../middlewares/requireLogin");


function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key))
      return false;
  }
  return true;
}

module.exports = app => {
  app.get("/api/cars", async (req, res) => {
    // ใช้สำหรับหน้าดูรถทั้งหมด
    console.log("query", req.query);
    if (req.query.fromDate !== 'null' && req.query.toDate !== 'null' && !isEmpty(req.query)) {
      console.log('date query')
      const car = await Car.find({
        "availFrom": {
          $lte: req.query.fromDate
        },
        "availTo": {
          $gte: req.query.toDate
        },
        isDeleted: false
      })
      res.send(car)
    }
    else {
      console.log('normal query')
      const car = await Car.find({ isDeleted: false });
      res.send(car);
    }

  }
  );
  app.post("/api/cars", async (req, res) => {
    // ใช้สำหรับสร้างรถคันใหม่ โดยเจ้าของรถต้องยืนยันตัวตนแล้ว
    const {
      brand,
      type,
      regYear,
      LNumber,
      gear,
      seat,
      equipment,
      photo,
      availFrom,
      availTo,
      location,
      description,
      pricePerDay,
      deposit
    } = req.body;
    // console.log("OWNERTEST", req.body.ownerTestId)

    // check validation
    if (brand.length === 0) {
      return res.status(404).json({ message: "Brand Invalid" })
    } else if (type.length === 0) {
      return res.status(404).json({ message: "Type Invalid" })
    } else if (regYear < 1900 || regYear > new Date().getFullYear()) {
      return res.status(404).json({ message: "RegYear Invalid" })
    } else if (LNumber.length === 0) {
      return res.status(404).json({ message: "LNumber Invalid" })
    } else if (availFrom.length === 0) {
      return res.status(404).json({ message: "Date Invalid" })
    } else if (location.length === 0) {
      return res.status(404).json({ message: "Location Invalid" })
    } else if (pricePerDay < 100) {
      return res.status(404).json({ message: "PricePerDay Invalid" })
    } else if (deposit < 100) {
      return res.status(404).json({ message: "Deposit Invalid" })
    } else if (seat < 0 || seat > 20) {
      return res.status(404).json({ message: "Seat Invalid" })
    } else if (gear !== "auto" && gear !== "manual") {
      return res.status(404).json({ message: "Gear Invalid" })
    }



    const car = await new Car({
      brand,
      type,
      regYear,
      LNumber,
      gear,
      seat,
      equipment,
      photo,
      availFrom,
      availTo,
      location,
      description,
      pricePerDay,
      deposit,
      _owner: req.user || req.body.ownerTestId
    }).save();
    console.log(car);
    res.status(200).send(car);
  });
  app.get("/api/cars/:id", async (req, res) => {
    // ใช้สำหรับดูรถแต่ละคันได้ โดยใช้ key เป็น id
    const car = await Car.findOne({ _id: req.params.id, isDeleted: false }).populate('_owner');
    console.log(car);
    res.send(car);
  });
  app.get("/api/ownercars", async (req, res) => {
    // ใช้สำหรับจัดการรถของเจ้าของรถ
    const car = await Car.find({ _owner: req.user["_id"], isDeleted: false });
    res.send(car);
  })
  app.delete("/api/cars/:id", async (req, res) => {
    // ใช้สำหรับลบรถ
    try {
      const car = await Car.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
          isDeleted: true
        }
      })
      const response = {
        message: "Successfully deleted",
        id: car.id
      };
      res.status(200).send(response);
    } catch (err) {
      res.status(400).send(err)
    }


    // Car.findByIdAndRemove(req.params.id, (err, car) => {
    //   if (err) return res.status(500).send(err);
    //   const response = {
    //     message: "Successfully deleted",
    //     id: car.id
    //   };
    //   return res.status(200).send(response);
    // });
  });
};
