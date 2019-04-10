const mongoose = require("mongoose")
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
let owner_data2 = {
  name: "AAAA",
  surname: "BBBBB",
  username: "testUser2",
  password: "123456",
  email: "eva@mail.com",
  idCardNum: "123123",
  DLicenseNumber: "123123123",
  tel: "0810000000",
  isProvider: true
};
let owner_id;
let deleteAfterRun = false;

beforeAll(async () => {
  // sign up
  const res = await agent
      .post("/auth/local")
      .send(owner_data)
      .set("Accept", "application/json")
      .expect(200, { message: "Sign Up Success" });
    console.log(res.body);
  owner_id = res.body._id
});

// describe("User", function() {
//   it("sign up", async () => {
//     const res = await agent
//       .post("/auth/local")
//       .send(owner_data2)
//       .set("Accept", "application/json")
//       .expect(200);
//     deleteAfterRun = true;
//     return res
//   });
//   it("loginSuccessful", async () => {
//     const res = await agent
//       .post("/auth/login")
//       .send(owner_data)
//       .set("Accept", "application/json")
//       .expect(200);
//     return res
//   });
//   it("loginFailure", async() => {
//     data = {
//       username: "??",
//       password: "??"
//     };
//     const res = await agent
//       .post("/auth/login")
//       .send(data)
//       .set("Accept", "application/json")
//       .expect(401);
//       return res
//   });
//   it("getUserProfile", async () => {
//     const res = await agent.get(`/api/current_user`).expect(200);
//     return res;
//   });
// });

// //run once after all tests
// afterAll(function (done) {
//     if (deleteAfterRun) {
//         console.log('Deleting test database');
//         mongoose.connection.db.dropDatabase(done);
//     } else {
//         console.log('Not deleting test database because it already existed before run');
//         done();
//     }
// });
