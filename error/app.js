const handelar = require('./handelar');
const express = require('express');
const app = express();
app.use(express.json())



app.get('api/users',handelar.getUser());
app.get('api/users/id',handelar.getUserById())
app.post('api/users',handelar.postNewUser())
app.delete('api/users/id',handelar.deleteUser())
app.patch('api/users/:id',handelar.patchUser())

let port = 3000
app.listen(port, ()=> {
    console.log(`server is running on port ${port}`)
})