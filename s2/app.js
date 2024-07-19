const express = require('express');
const serverless = require('serverless-http');
const app = express();
app.use(express.json())

const handelar = require('./handelar.js');


app.get('/', (req, res)=>{
    res.send('good!')
})


let port = 4000
app.listen(port, ()=> {
    console.log(`server is running on port ${port}`)
})
app.use("/api", handelar);


module.exports.handelar = serverless(app)