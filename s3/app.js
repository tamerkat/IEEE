const express = require('express');
const morgan = require('morgan');
const app = express();


// Exports file
const control = require("./control");


// Middleware
app.use(express.json());
app.use(morgan('dev'));

const validated = (req, res, next)=> {
    if (!req.body.name && !req.body.email) {
        return res.status(400).json({
            status: "fail",
            message: "not Validated",
        });
    }
    next();
}


// Block of code
app
  .route("/api/")
  .get(control.getall)
  .post(validated, control.posts);

app
  .route("/api/:id/")
  .get(control.getone)
  .delete(control.delete)
  .patch(validated, control.patch);


// Listen
const port = 4000;
app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});
