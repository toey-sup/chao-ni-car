const app = require("../index");
const request = require("supertest");


describe("Customer", function() {
  let data = {
    name: "Punch",
      surname: "Vit",
      username: "punch",
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
      .expect(200, { success: true, data: "OK" }, done);
  })
})
