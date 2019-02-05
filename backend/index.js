const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const keys = require('./config/keys')

require('./models/Car');
require('./models/User');
require('./models/Request');
require('./services/passport');


//Set up default mongoose connection
var mongoDB = keys.mongoURI;
console.log(mongoDB)
// var mongoDB = 'mongodb://db:27017/data';
mongoose.connect(mongoDB, {useNewUrlParser: true});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected!!')
});

//////////////////////////////////////

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)
app.use(passport.initialize());
app.use(passport.session());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });

///////////////////////////////////////

require('./routes/authRoutes')(app);
require('./routes/carRoutes')(app);
require('./routes/requestRoutes')(app);

app.get('/', (req, res) => {
  res.send({ hi: [] });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);