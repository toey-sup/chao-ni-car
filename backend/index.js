const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const keys = require('./config/keys')

require('./models/member');
require('./models/Car');
require('./models/User');
require('./services/passport');

const Member = mongoose.model('members');

//Set up default mongoose connection
// var mongoDB = 'mongodb://localhost:27017/data';
 var mongoDB = 'mongodb://db:27017/data';
mongoose.connect(mongoDB, {useNewUrlParser: true});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected!!')
});

const mem = new Member({
    name: 'punch',
    surname: 'vit',
    data: new Date()
})

mem.save().then(() => console.log('OK')).catch((error) => console.log(error))


memlist = []
Member.find(function (err, mem) {
  if (err) return console.error(err);
  memlist = mem
})


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

///////////////////////////////////////

require('./routes/authRoutes')(app);
require('./routes/carRoutes')(app);

app.get('/', (req, res) => {
  res.send({ hi: memlist });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);