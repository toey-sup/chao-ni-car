const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("users");
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  app.get(
    "/auth/google", // login with google
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );
  app.post("/auth/local", (req, res) => {
    const {
      name,
      surname,
      email,
      idCardNum,
      DLicenseNumber,
      tel,
      isProvider,
      isAuthenticated
    } = req.body;
    User.register(
      new User({
        username: req.body.username,
        name,
        surname,
        email,
        idCardNum,
        DLicenseNumber,
        tel,
        isProvider,
        isAuthenticated
      }),
      req.body.password,
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
  

  app.get(
    // callback after succesfully login
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/");
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

  app.post("/api/authentication", requireLogin, async (req, res) => {
    const { tel, idCardNum, DLicenseNumber, isAuthenticated } = req.body;
    console.log(tel, idCardNum, DLicenseNumber, isAuthenticated);
    const user = await User.findByIdAndUpdate(
      req.user["_id"],
      {
        $set: {
          tel,
          idCardNum,
          DLicenseNumber,
          isAuthenticated
        }
      },
      (err, result) => {
        if (err) {
          console.log(err);
        }
      }
    );
    console.log(user);
    res.send(user);
  });
};
