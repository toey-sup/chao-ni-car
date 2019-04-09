const app = require("../index");
const request = require("supertest");


describe("User", function() {
  let data = {
    name: "Punch",
      surname: "Vit",
      username: "testUser",
      password: "123456",
      email: "nutacp_ryho@hotmail.com",
      idCardNum: "123123",
      DLicenseNumber: "123123123",
      tel: "0814904388",
      isProvider: true
  };
  it("sign up", function(done) {
    request(app)
      .post("/auth/local")
      .send(data)
      .set("Accept", "application/json")
      .expect(200, { message: 'Sign Up Success' }, done);
  })
  it("loginSuccessful", function(done) {
    request(app)
      .post("/auth/login")
      .send(data)
      .set("Accept", "application/json")
      .expect(200, done);
  })
  it("loginFailure", function(done) {
    data = {
      username: "??",
      password: "??"
    }
    request(app)
      .post("/auth/login")
      .send(data)
      .set("Accept", "application/json")
      .expect(401, done);
  })
})
