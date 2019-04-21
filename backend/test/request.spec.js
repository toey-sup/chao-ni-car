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
let renter_data = {
  name: "renter",
  surname: "renter",
  username: "testRenter",
  password: "123456",
  email: "renter@mail.com",
  idCardNum: "1231231230123",
  DLicenseNumber: "1231231230",
  tel: "0810000000",
  isProvider: false
};
let request_data = {
  carId: "",
  dateFrom: "",
  dateTo: "",
  amount: 3000,
  renter: ""
};
let owner_id;
let renter_id;
let request_id;
beforeAll(async (done) => {
  // sign up
  const resSignup = await agent
    .post("/auth/local")
    .send(owner_data)
    .set("Accept", "application/json")
    .expect(200, { message: "Sign Up Success" });
  console.log(resSignup.body)
  const resSignup2 = await agent
    .post("/auth/local")
    .send(renter_data)
    .set("Accept", "application/json")
    .expect(200, { message: "Sign Up Success" });
  console.log(resSignup2.body)
  const res = await agent
    .post("/auth/login")
    .send(owner_data)
    .set("Accept", "application/json")
    .expect(200);
  owner_id = res.body._id;
  console.log(owner_id)
  const res2 = await agent
    .post("/auth/login")
    .send(renter_data)
    .set("Accept", "application/json")
    .expect(200);
  renter_id = res2.body._id;
  console.log(renter_id)
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
    pricePerDay: "300",
    deposit: "1000",
    ownerTestId: owner_id
  };
  const res3 = await request(app)
    .post("/api/cars")
    .send(car_data)
    .set("Accept", "application/json")
    .expect(200);
  car_id = res3.body._id;
  console.log(car_id)
  done()
});

describe("Request", function() {
  test("addRequest", async (done) => {
    console.log(car_id, renter_id, owner_id);
    request_data = {
      carId: car_id,
      dateFrom: "2019-04-20T00:00:00.000Z",
      dateTo: "2019-04-26T00:00:00.000Z",
      amount: 10000,
      renter: renter_id
    };
    const res = await request(app)
      .post("/api/request")
      .send(request_data)
      .set("Accept", "application/json")
      .expect(200);
    request_id = res.body._id;
    done();
  });
  test("getRequest", (done) => {
    request(app)
      .get("/api/request/" + request_id)
      .set("Accept", "application/json")
      .expect(200);
    done()
  });
  test("deleteRequest", (done) => {
    deleteAfterRun = true;
    request(app)
      .delete("/api/request/" + request_id)
      .set("Accept", "application/json")
      .expect(200, {
        message: "Successfully deleted",
        id: request_id
      });
    done();
  });
});

//run once after all tests
afterAll(function(done) {
  if (deleteAfterRun) {
    console.log('Deleting test database');
    mongoose.connection.db.dropDatabase(done);
} else {
    console.log('Not deleting test database because it already existed before run');
    done();
}
});
