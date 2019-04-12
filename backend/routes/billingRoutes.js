const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");
const mongoose = require("mongoose");
const Request = mongoose.model("requests");
const fetch = require("node-fetch");

const base_url = "http://localhost:5000";
const fetchPOST = async (url, body) => {
  //console.log("BODY", JSON.stringify(body));
  const rawResponse = await fetch(base_url + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  return rawResponse.json();
};

module.exports = app => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    //console.log(req.body)
    const charge = await stripe.charges.create({
      amount: req.body.amount,
      currency: "THB",
      description: "cao-ni-car payment",
      source: req.body.token.id
    });
    const { carId, dateFrom, dateTo, amount } = req.body;
    const requestInput = {
      carId, dateFrom, dateTo, amount,
      renter: req.user["_id"]
    }
    console.log("amount", amount)
    try {
      const createdRequest = await fetchPOST("/api/request", requestInput);
      if (createdRequest.name === 'CarError') {
        throw {
          message: createdRequest.message
        }
      }
      console.log("createRequest", createdRequest);
      if (createdRequest) {
        const request = await Request.findOneAndUpdate(
          { _id: createdRequest._id },
          {
            $set: {
              isPaid: true
            }
          },
          { new: true }
        );
        console.log("request", request);
        res.send(request);
      } else {
        throw {
          message: "Cannot Create Request"
        };
      }
    } catch (err) {
      console.log(err);
      res.status(422).send(err);
    }
  });
};
