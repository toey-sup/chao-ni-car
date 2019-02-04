const mongoose = require('mongoose');
const Car = mongoose.model('cars')
const requireLogin = require('../middlewares/requireLogin')
const requireAuthentication = require('../middlewares/requireAuthentication')
module.exports = (app) => {
    app.get('/api/cars', async (req, res) => { // ใช้สำหรับหน้าดูรถทั้งหมด
        console.log(req.query)
        const cars = await Car.find(req.query)
        res.send(cars)
    })
    app.post('/api/cars', requireAuthentication, async (req, res) => { // ใช้สำหรับสร้างรถคันใหม่ โดยเจ้าของรถต้องยืนยันตัวตนแล้ว
        const {brand, type, regYear, LNumber, gear, seat, equipment, status, 
            photo, availFrom, availTo, description, pricePerDay, deposit} = req.body
        const car = await new Car({
            brand, type, regYear, LNumber, gear, seat, equipment, status, 
            photo, availFrom, availTo, description, pricePerDay, deposit,
            _owner: req.user
        }).save()
        console.log(car)
        res.send(car);

    })
    app.get('/api/cars/:id', async (req, res) => { // ใช้สำหรับดูรถแต่ละคันได้ โดยใช้ key เป็น id
        const car = await Car.findById(req.params.id)
        res.send(car)
    })
    app.delete('/api/cars/:id', requireAuthentication, async (req, res) => { // ใช้สำหรับลบรถ
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