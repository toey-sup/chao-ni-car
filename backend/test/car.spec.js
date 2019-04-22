const mongoose = require("mongoose")
const app = require("../app");
const request = require("supertest");
const agent = request.agent(app);


let deleteAfterRun = false;
let owner_data = {
  name: "owner",
  surname: "owner",
  username: "ownerUser",
  password: "123456",
  email: "owner@mail.com",
  idCardNum: "1234567890123",
  DLicenseNumber: "1231231230",
  tel: "0810000000",
  isProvider: true
};
let owner_id;
let car_id;
beforeAll(async () => {
  // sign up
  await agent
    .post("/auth/local")
    .send(owner_data)
    .set("Accept", "application/json")
    .expect(200, { message: "Sign Up Success" });
  const res = await agent
    .post("/auth/login")
    .send(owner_data)
    .set("Accept", "application/json")
    .expect(200);
  owner_id = res.body._id
});

let car_data = {
  brand: "Toyota",
  type: "Vios",
  regYear: "1998",
  LNumber: "Lกฮ999",
  gear: "auto",
  seat: "4",
  equipment: "GPS",
  photo: "",
  availFrom: "2019-04-20T00:00:00.000Z",
  availTo: "2019-04-26T00:00:00.000Z",
  location: "BTS Siam",
  description: "TEST CAR",
  pricePerDay: 300,
  deposit: 1000
};


describe("Car", function () {
  test("addCarWithBrandInvalid", async() => {
    let data = {
      ...car_data,
      brand: '',
      ownerTestId: owner_id
    };
    await request(app)
      .post("/api/cars")
      .send(data)
      .set("Accept", "application/json")
      .expect(404, { message: "Brand Invalid" })
  });
  test("addCarWithTypeInvalid", async() => {
    let data = {
      ...car_data,
      type: '',
      ownerTestId: owner_id
    };
    await request(app)
      .post("/api/cars")
      .send(data)
      .set("Accept", "application/json")
      .expect(404, { message: "Type Invalid" })
  });
  test("addCarWithRegYearInvalid", async() => {
    let data = {
      ...car_data,
      regYear: 1889,
      ownerTestId: owner_id
    };
    await request(app)
      .post("/api/cars")
      .send(data)
      .set("Accept", "application/json")
      .expect(404, { message: "RegYear Invalid" })
  });
  test("addCarWithLicenseNumberInvalid", async() => {
    let data = {
      ...car_data,
      LNumber: '',
      ownerTestId: owner_id
    };
    await request(app)
      .post("/api/cars")
      .send(data)
      .set("Accept", "application/json")
      .expect(404, { message: "LNumber Invalid" })
  });
  test("addCarWithGearInvalid", async() => {
    let data = {
      ...car_data,
      gear: '',
      ownerTestId: owner_id
    };
    await request(app)
      .post("/api/cars")
      .send(data)
      .set("Accept", "application/json")
      .expect(404, { message: "Gear Invalid" })
  });
  test("addCarWithDateInvalid", async() => {
    let data = {
      ...car_data,
      availFrom: '',
      availTo: '',
      ownerTestId: owner_id
    };
    await request(app)
      .post("/api/cars")
      .send(data)
      .set("Accept", "application/json")
      .expect(404, { message: "Date Invalid" })
  });
  test("addCarWithLocationInvalid", async() => {
    let data = {
      ...car_data,
      location: '',
      ownerTestId: owner_id
    };
    await request(app)
      .post("/api/cars")
      .send(data)
      .set("Accept", "application/json")
      .expect(404, { message: "Location Invalid" })
  });
  test("addCarWithPricePerDayInvalid", async() => {
    let data = {
      ...car_data,
      pricePerDay: 99,
      ownerTestId: owner_id
    };
    await request(app)
      .post("/api/cars")
      .send(data)
      .set("Accept", "application/json")
      .expect(404, { message: "PricePerDay Invalid" })
  });
  test("addCarWithDepositInvalid", async() => {
    let data = {
      ...car_data,
      deposit: 99,
      ownerTestId: owner_id
    };
    await request(app)
      .post("/api/cars")
      .send(data)
      .set("Accept", "application/json")
      .expect(404, { message: "Deposit Invalid" })
  });
  test("addCarWithSeatInvalid", async() => {
    let data = {
      ...car_data,
      seat: 21,
      ownerTestId: owner_id
    };
    await request(app)
      .post("/api/cars")
      .send(data)
      .set("Accept", "application/json")
      .expect(404, { message: "Seat Invalid" })
  });
  test("addCar", async () => {
    let data = {
      ...car_data,
      ownerTestId: owner_id
    };
    const res = await request(app)
      .post("/api/cars")
      .send(data)
      .set("Accept", "application/json").expect(200)
    car_id = res.body._id

  });
  test("getCar", async () => {
    await request(app)
      .get("/api/cars/" + car_id)
      .set("Accept", "application/json")
      .expect(200);
  })
  test("deleteCar", async () => {
    deleteAfterRun = true
    await request(app)
      .delete("/api/cars/" + car_id)
      .set("Accept", "application/json")
      .expect(200, {
        message: "Successfully deleted",
        id: car_id
      });
  })
});

afterAll(function (done) {
  if (deleteAfterRun) {
    console.log('Deleting test database');
    mongoose.connection.db.dropDatabase(done);
  } else {
    console.log('Not deleting test database because it already existed before run');
    done();
  }
});