const express = require ('express')
const userRouter = require('./src/routes/userRouter')

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('./public'))

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.set('view engine', 'ejs');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept,Authorization");
    next();
  });
  

app.use('/api/user',userRouter)

app.listen(3001, () => {
    console.log("server started at port http://localhost:3001")
  })

module.exports = app;