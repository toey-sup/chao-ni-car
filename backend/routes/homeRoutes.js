const mongoose = require('mongoose');
const Cars = mongoose.model('cars')

module.exports = (app) => {
    app.get('/api/cars', async (req, res) => {
        const cars = await Cars.find()
        res.send(cars)
    })
    app.post('/api/registerCar', async (req, res) => {
        
    })
}