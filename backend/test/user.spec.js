const mongoose = require("mongoose")
const app = require("../app");
const request = require("supertest");
const agent = request.agent(app);
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
let owner_data2 = {
  name: "owner2",
  surname: "owner2",
  username: "owner2",
  password: "123456",
  email: "owner2@mail.com",
  idCardNum: "1234567890123",
  DLicenseNumber: "1231231230",
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

describe("User", function() {
  it("passwordInvalid", async() => {
    data = {
      ...owner_data2,
      password: 'df'
    };
    const res = await agent
      .post("/auth/local")
      .send(data)
      .set("Accept", "application/json")
      .expect(404, { message: "Password Invalid" });
      return res
  });
  it("nameInvalid", async() => {
    data = {
      ...owner_data2,
      name: 'df'
    };
    const res = await agent
      .post("/auth/local")
      .send(data)
      .set("Accept", "application/json")
      .expect(404, { message: "Name Invalid" });
      return res
  });
  it("surnameInvalid", async() => {
    data = {
      ...owner_data2,
      surname: 'df'
    };
    const res = await agent
      .post("/auth/local")
      .send(data)
      .set("Accept", "application/json")
      .expect(404, { message: "Surname Invalid" });
      return res
  });
  it("usernameInvalid", async() => {
    data = {
      ...owner_data2,
      username: 'df'
    };
    const res = await agent
      .post("/auth/local")
      .send(data)
      .set("Accept", "application/json")
      .expect(404, { message: "Username Invalid" });
      return res
  });
  it("emailInvalid", async() => {
    data = {
      ...owner_data2,
      email: 'dfdf-mail.com'
    };
    const res = await agent
      .post("/auth/local")
      .send(data)
      .set("Accept", "application/json")
      .expect(404, { message: "Email Invalid" });
      return res
  });
  it("idCardNumInvalid", async() => {
    data = {
      ...owner_data2,
      idCardNum: '3215451'
    };
    const res = await agent
      .post("/auth/local")
      .send(data)
      .set("Accept", "application/json")
      .expect(404, { message: "IdCardNum Invalid" });
      return res
  });
  it("telephoneInvalid", async() => {
    data = {
      ...owner_data2,
      tel: '095614989119'
    };
    const res = await agent
      .post("/auth/local")
      .send(data)
      .set("Accept", "application/json")
      .expect(404, { message: "Telephone Invalid" });
      return res
  });

  it("sign up", async () => {
    const res = await agent
      .post("/auth/local")
      .send(owner_data2)
      .set("Accept", "application/json")
      .expect(200);
    deleteAfterRun = true;
    return res
  });
  it("loginSuccessful", async () => {
    const res = await agent
      .post("/auth/login")
      .send(owner_data)
      .set("Accept", "application/json")
      .expect(200);
    return res
  });
  it("loginFailure", async() => {
    data = {
      username: "??",
      password: "??"
    };
    const res = await agent
      .post("/auth/login")
      .send(data)
      .set("Accept", "application/json")
      .expect(401);
      return res
  });
  it("getUserProfile", async () => {
    const res = await agent.get(`/api/current_user`).expect(200);
    return res;
  });
});

//run once after all tests
afterAll(function (done) {
    if (deleteAfterRun) {
        console.log('Deleting test database');
        mongoose.connection.db.dropDatabase(done);
    } else {
        console.log('Not deleting test database because it already existed before run');
        done();
    }
});
