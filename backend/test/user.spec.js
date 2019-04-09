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
beforeEach(async () => {
  const res = await agent.post("/auth/login").send(owner_data);
  owner_id = res.body._id
});

describe("User", function() {
  // it("sign up", function(done) {
  //   request(app)
  //     .post("/auth/local")
  //     .send(data)
  //     .set("Accept", "application/json")
  //     .expect(200, { message: 'Sign Up Success' }, done);
  // })
  // it("loginSuccessful", (done) => {
  //   request(app)
  //     .post("/auth/login")
  //     .send(data)
  //     .set("Accept", "application/json")
  //     .expect(200, done);
  // })
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
  it("getUserProfile", async () => {
    const res = await agent
      .get(`/api/current_user`)
      .expect(200);
    return res
  });
  // it("getCurrentUser", function(done) {
  //   console.log(session);
  //   agent
  //     .get("/api/current_user")
  //     .send(data)
  //     .set("Cookie", session)
  //     .set("Accept", "application/json")
  //     .expect(200, done);
  // });
});
