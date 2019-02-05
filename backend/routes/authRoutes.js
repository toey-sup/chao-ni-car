const passport = require('passport')
const mongoose = require('mongoose');
const User = mongoose.model('users')
const requireLogin = require('../middlewares/requireLogin')

module.exports = (app) => {
    app.get('/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    )

    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/')
        }
    )

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    })

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    })

    app.post('/api/authentication', requireLogin, async (req, res) => {
        const { tel,
            idCardNum,
            address,
            DLicenseNumber,
            isAuthenticated } = req.body
        const user = await User.findByIdAndUpdate(req.user["_id"], {
            $set: {
                tel,
                idCardNum,
                address,
                DLicenseNumber,
                isAuthenticated
            }
        }, (err, result) => {
            if (err) {
                console.log(err);
            }
        })
        console.log(user)
        res.send(user);

    })
}