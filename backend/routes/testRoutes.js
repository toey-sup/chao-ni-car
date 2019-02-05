const mongoose = require('mongoose');
const Car = mongoose.model('cars')
const requireLogin = require('../middlewares/requireLogin')

module.exports = (app) => {
    app.delete('/test/cars/:id', async (req, res) => {
        console.log('HIII')
        console.log(req.params)
        Car.findByIdAndRemove(req.params.id, (err, blog) => {
            if (err) return res.status(500).send(err);
            const response = {
                message: "Successfully deleted",
                id: Car.id
            }
            return res.status(200).send(response);
        })
    })
    app.get('/test/show_car', async (req, res) => {
        const cars = await Car.find()
        res.send(cars)
    })
    app.post('/api/photo', function (req, res) {
        var newItem = new Item();
        newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
        newItem.img.contentType = 'image/png';
        newItem.save();
    });
}