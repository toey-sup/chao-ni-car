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

describe("User", function () {
  it("passwordInvalid", async () => {
    data = {
      ...owner_data2,
      password: 'df'
    };
    await agent
      .post("/auth/local")
      .send(data)
      .set("Accept", "application/json")
      .expect(404, { message: "Password Invalid" });

  });
  it("nameInvalid", async () => {
    data = {
      ...owner_data2,
      name: 'df'
    };
    await agent
      .post("/auth/local")
      .send(data)
      .set("Accept", "application/json")
      .expect(404, { message: "Name Invalid" });
  });
  it("surnameInvalid", async () => {
    data = {
      ...owner_data2,
      surname: 'df'
    };
    await agent
      .post("/auth/local")
      .send(data)
      .set("Accept", "application/json")
      .expect(404, { message: "Surname Invalid" });
  });
  it("usernameInvalid", async () => {
    data = {
      ...owner_data2,
      username: 'df'
    };
    await agent
      .post("/auth/local")
      .send(data)
      .set("Accept", "application/json")
      .expect(404, { message: "Username Invalid" });
  });
  it("emailInvalid", async () => {
    data = {
      ...owner_data2,
      email: 'dfdf-mail.com'
    };
    await agent
      .post("/auth/local")
      .send(data)
      .set("Accept", "application/json")
      .expect(404, { message: "Email Invalid" });
  });
  it("idCardNumInvalid", async () => {
    data = {
      ...owner_data2,
      idCardNum: '3215451'
    };
    await agent
      .post("/auth/local")
      .send(data)
      .set("Accept", "application/json")
      .expect(404, { message: "IdCardNum Invalid" });
  });
  it("telephoneInvalid", async () => {
    data = {
      ...owner_data2,
      tel: '095614989119'
    };
    await agent
      .post("/auth/local")
      .send(data)
      .set("Accept", "application/json")
      .expect(404, { message: "Telephone Invalid" });

  });

  it("sign up", async () => {
    await agent
      .post("/auth/local")
      .send(owner_data2)
      .set("Accept", "application/json")
      .expect(200);
    deleteAfterRun = true;

  });
  it("loginSuccessful", async () => {
    await agent
      .post("/auth/login")
      .send(owner_data)
      .set("Accept", "application/json")
      .expect(200);

  });
  it("loginFailure", async () => {
    data = {
      username: "??",
      password: "??"
    };
    await agent
      .post("/auth/login")
      .send(data)
      .set("Accept", "application/json")
      .expect(401);

  });
  it("getUserProfile", async () => {
    await agent.get(`/api/current_user`).expect(200);
    ;
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
