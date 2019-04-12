const app = require('./app')


// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));

//   const path = require('path');
//   app.get('*', (req, res) => {
//       const filePath = path.resolve(__dirname, 'client', 'build', 'index.html')
//       res.sendFile(filePath)
//   })
// }

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('App listening port 5000!');
})