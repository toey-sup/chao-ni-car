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

// describe("Car", function() {
//   test("addCar", async() => {
//     let data = {
//       brand: "Toyota",
//       type: "Vios",
//       regYear: "1998",
//       LNumber: "Lกฮ999",
//       gear: "auto",
//       seat: "4",
//       equipment: "GPS",
//       photo: "",
//       availFrom: "2019-04-20T00:00:00.000Z",
//       availTo: "2019-04-26T00:00:00.000Z",
//       location: "BTS Siam",
//       description: "TEST CAR",
//       pricePerDay: "300",
//       deposit: "1000",
//       ownerTestId: owner_id
//     };
//     const res = await request(app)
//       .post("/api/cars")
//       .send(data)
//       .set("Accept", "application/json").expect(200)
//     car_id = res.body._id
//     return res
//   });
//   test("getCar", () => {
//     return request(app)
//       .get("/api/cars/" + car_id)
//       .set("Accept", "application/json")
//       .expect(200);
//   })
//   test("deleteCar", () => {
//     return request(app)
//       .delete("/api/cars/" + car_id)
//       .set("Accept", "application/json")
//       .expect(200, {
//         message: "Successfully deleted",
//         id: car_id
//       });
//   })
// });
