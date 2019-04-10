const app = require("../app");
const request = require("supertest");
const agent = request.agent(app);

let owner_data = {
  name: "CarTest",
  surname: "Vit",
  username: "testOwner",
  password: "123456",
  email: "car.spec.js@hotmail.com",
  idCardNum: "123123",
  DLicenseNumber: "123123123",
  tel: "0810000000",
  isProvider: true
};
let renter_data = {
  name: "renter",
  surname: "renter",
  username: "testRenter",
  password: "123456",
  email: "renter@mail.com",
  idCardNum: "123123",
  DLicenseNumber: "123123123",
  tel: "0810000000",
  isProvider: true
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
beforeAll(async () => {
  // sign up
  await agent
    .post("/auth/local")
    .send(owner_data)
    .set("Accept", "application/json")
    .expect(200, { message: "Sign Up Success" });
  await agent
    .post("/auth/local")
    .send(renter_data)
    .set("Accept", "application/json")
    .expect(200, { message: "Sign Up Success" });

  const res = await agent
    .post("/auth/login")
    .send(owner_data)
    .set("Accept", "application/json")
    .expect(200);
  owner_id = res.body._id;
  const res2 = await agent
    .post("/auth/login")
    .send(renter_data)
    .set("Accept", "application/json")
    .expect(200);
  renter_id = res2.body._id;

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
      .set("Accept", "application/json").expect(200)
    car_id = res3.body._id

});

describe("Request", function() {
  test("addRequest", async () => {
    console.log(car_id, renter_id, owner_id)
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
    return res;
  });
  test("getRequest", () => {
    return request(app)
      .get("/api/request/" + request_id)
      .set("Accept", "application/json")
      .expect(200);
  });
  test("deleteRequest", () => {
    return request(app)
      .delete("/api/request/" + request_id)
      .set("Accept", "application/json")
      .expect(200, {
        message: "Successfully deleted",
        id: request_id
      });
  });
});
