const app = require("../index");
const request = require("supertest");


describe("Car", function() {
  let data = {
    
  };
  it("getAllCars", function(done) {
    request(app)
      .get("/api/cars")
      .set("Accept", "application/json")
      .expect(200, done);
  })
  
})
