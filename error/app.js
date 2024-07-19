const handelar = require('./handelar');
const express = require('express');
const app = express();
app.use(express.json())


app.get('/api', handelar.getall);
app.get('/api/:id', handelar.getUserById)
app.post('/api', handelar.postNewUser)
app.delete('/api/:id', handelar.deleteUser)
app.patch('/api/:id', handelar.patchUser)


let port = 4000
app.listen(port, ()=> {
    console.log(`server is running on port ${port}`)
})