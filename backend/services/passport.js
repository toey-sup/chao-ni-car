const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const LocalStrategy = require('passport-local')
const passportLocalMongoose = require('passport-local-mongoose')
const keys = require('../config/keys')
const mongoose = require('mongoose')

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
    //console.log(user)
    done(null, user.id);
})

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then((user) => {
            done(null, user);
        })
})

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },
        async (accessToken, refreshToken, profile, done) => {
            //console.log(profile)
            const existingUser = await User.findOne({ googleId: profile.id })
            if (existingUser) {
                return done(null, existingUser)
            }
            const user = await new User({
                name: profile.displayName,
                email: profile.emails[0].value,
                googleId: profile.id,
                photo: profile.photos[0].value,
                isAuthenticated: false
            }).save();
            done(null, user);
        }
    )
)

passport.use(new LocalStrategy(User.authenticate()))

/*passport.use(new FacebookStrategy({
    clientID: keys.FACEBOOK_APP_ID,
    clientSecret: keys.FACEBOOK_APP_SECRET,
    callbackURL: "/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'photos', 'email'],
    proxy: true
},
    async (accessToken, refreshToken, profile, cb) => {
        const exitingUser = await User.findOne({facebookId: profile.id})
        if (exitingUser) {
            return cb(null, exitingUser)
        }
        const user = new User({
            name: profile.displayName,
            email: profile._json.email,
            facebookId: profile.id,
            photo: profile.photos[0].value
        }).save();
        cb(null, user);
    }
));
*/