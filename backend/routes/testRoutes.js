const mongoose = require('mongoose');
const Cars = mongoose.model('cars')

module.exports = (app) => {
    app.post('/test/create_car', async (req, res) => {
        const car = new Car({
            brand: "Toyota",
            type: "Vios",
            regYear: "2010",
            LNumber: "กข5555",

        })
        
        car.save().then(() => console.log('test OK')).catch((error) => console.log(error))
    })
    app.get('/test/show_car', async (req, res) => {
        const cars = await Cars.find()
        res.send(cars)
    })
}