const mongoose = require('mongoose');
const Car = mongoose.model('cars')

module.exports = (app) => {
    app.get('/api/cars', async (req, res) => {
        console.log(req.query)
        const cars = await Car.find(req.query)
        res.send(cars)
    })
    app.delete('/api/cars/:id', async (req, res) => {
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
}