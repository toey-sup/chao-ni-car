const app = require("../app");
const request = require("supertest");
const agent = request.agent(app);

let owner_data = {
  name: "Punch",
  surname: "Vit",
  username: "testUser",
  password: "123456",
  email: "nutacp_ryho@hotmail.com",
  idCardNum: "123123",
  DLicenseNumber: "123123123",
  tel: "0810000000",
  isProvider: true
};
let owner_id;
let car_id;
beforeEach(async () => {
  const res = await agent.post("/auth/login").send(owner_data);
  console.log(res.body._id);
  owner_id = res.body._id;
  console.log(owner_id);
});

describe("Car", function() {
  test("addCar", async() => {
    let data = {
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
    const res = await request(app)
      .post("/api/cars")
      .send(data)
      .set("Accept", "application/json").expect(200)
    car_id = res.body._id
    return res
  });
  test("getCar", () => {
    return request(app)
      .get("/api/cars/" + car_id)
      .set("Accept", "application/json")
      .expect(200);
  })
});
