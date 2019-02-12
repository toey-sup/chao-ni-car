const mongoose = require("mongoose");
const Car = mongoose.model("cars");
const requireAuthentication = require("../middlewares/requireAuthentication");

const multer = require("multer");
let storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "upload/");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  }
});
let uploader = multer({ storage: storage });

module.exports = app => {
  app.post("/api/upload", uploader.single("fileInput"), (req, res) => {
    res.send("Test");
  });
  app.get("/api/cars", async (req, res) => {
    // ใช้สำหรับหน้าดูรถทั้งหมด
    console.log("query", req.query);
    if (req.query.fromDate !== 'null' || req.query.toDate !== 'null') {
        const car = await Car.find({
             
                "availFrom": {
                  $lte: req.query.fromDate
                },
                "availTo": {
                    $gte: req.query.toDate
                  },
              
        })
        res.send(car)
    }
      else {
        const car = await Car.find({});
        res.send(car);
      }
      
    }
  );
  app.post("/api/cars", requireAuthentication, async (req, res) => {
    // ใช้สำหรับสร้างรถคันใหม่ โดยเจ้าของรถต้องยืนยันตัวตนแล้ว
    const {
      brand,
      type,
      regYear,
      LNumber,
      gear,
      seat,
      equipment,
      status,
      photo,
      availFrom,
      availTo,
      description,
      pricePerDay,
      deposit
    } = req.body;
    const car = await new Car({
      brand,
      type,
      regYear,
      LNumber,
      gear,
      seat,
      equipment,
      status,
      photo,
      availFrom,
      availTo,
      description,
      pricePerDay,
      deposit,
      _owner: req.user
    }).save();
    console.log(car);
    res.send(car);
  });
  app.get("/api/cars/:id", async (req, res) => {
    // ใช้สำหรับดูรถแต่ละคันได้ โดยใช้ key เป็น id
    const car = await Car.findById(req.params.id);
    res.send(car);
  });
  app.delete("/api/cars/:id", requireAuthentication, async (req, res) => {
    // ใช้สำหรับลบรถ
    Car.findByIdAndRemove(req.params.id, (err, blog) => {
      if (err) return res.status(500).send(err);
      const response = {
        message: "Successfully deleted",
        id: Car.id
      };
      return res.status(200).send(response);
    });
  });
};
