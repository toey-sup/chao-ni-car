const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("users");
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  app.post("/auth/local", (req, res) => {
    const {
      name,
      surname,
      username,
      password,
      email,
      idCardNum,
      DLicenseNumber,
      tel,
      isProvider
    } = req.body;
    User.register(
      new User({
        username,
        name,
        surname,
        email,
        idCardNum,
        DLicenseNumber,
        tel,
        isProvider
      }),
      password,
      (err, user) => {
        if (err) {
          console.log(err);
          return res.redirect("/");
        }
        passport.authenticate("local")(req, res, function() {
          res.redirect("/");
        });
      }
    );
  });
  app.get("/auth/successjson", function(req, res) {
    res.status(200).json({ message: "Login Success" });
  });

  app.get("/auth/failurejson", function(req, res) {
    res.status(401).json({ message: "Login Error" });
  });
  app.post(
    "/auth/login",
    passport.authenticate("local", {
    }),
    (req, res) => {
      if (req.user) { res.send(req.user); }
      else { res.send(401); }
    }
  );
  


  app.get("/api/logout", (req, res) => {
    // logout
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    // get current user
    res.send(req.user);
  });
};
