const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');
const mongoose = require("mongoose");
const Request = mongoose.model("requests");

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 50000,
      currency: 'thb',
      description: '5 baht for 5 credits',
      source: req.body.id
    });
    try {
      const request = await Request.update(
        { _id: req.body.requestId },
        {
          $set: {
            isPaid: true
          }
        }
      );
    } catch(err) {
      console.log(err)
      res.status(422).send(err)
    }

    console.log(charge)
    res.send(user);
  });
};
