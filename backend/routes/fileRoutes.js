const mongoose = require('mongoose')
const multer = require('multer')
const cloudinary = require('cloudinary')

module.exports = (app) => {

    cloudinary.config({
        cloud_name: 'dexwgvjta',
        api_key: '185715621768925',
        api_secret: 'lURyufIeR2o5pV8RF1itnUVQf9c',
    })

    const storage = multer.memoryStorage()
    const upload = multer({ storage })

    app.post('/api/files', upload.single('file'), (req, res) => {
        console.log("file", req.file)
        cloudinary.v2.uploader.upload_stream((error, result) => {
            if (error) {
                res.send(error)
            }
            console.log("result", result)
            res.status(200).json({ success: true, fileUrl: result.secure_url })
        }).end(req.file.buffer)
        
    })

    app.put('/api/files/:publicID', upload.single('file'), (req, res) => {
        console.log(req.file)
        cloudinary.v2.uploader.upload_stream(
            { public_id: req.params.publicID, invalidate: true },
             (error, result) => { //console.log(result, error) 
                res.status(200).json({ success: true, fileUrl: result.secure_url })
        }).end(req.file.buffer);

    })

    app.post('/api/changeProfilePicture', async (req, res) => {
        console.log('/api/changeProfilePicture')
        console.log(req.body)
        // you can do whatever you want with this data
        // change profile pic, save to DB, or send it to another API 
        try {
            console.log(req.body.url)
            res.end();
        }
        catch (err) {
            console.log("ERR" + err)
        }

    })

    app.delete('/api/files/:publicID', (req, res) => {
        //console.log(req.params.publicID)
        cloudinary.v2.uploader.destroy(req.params.publicID, (error, result) => {
            console.log("DELETE PICTURE")
            console.log(result, error)
            res.send(result);
        });
    })

    
}