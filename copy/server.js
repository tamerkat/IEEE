const express = require("express");
const morgan = require("morgan");

const bookController = require("./bookcontrollar");
const userController = require("./usercontrollar");

const app = express();

// built-in middleware
app.use(express.json());

app.use(morgan("dev"));

app.use((req, res, next) => {
  console.log("Middleware func.");
  next();
});

app.use((req, res, next) => {
  req.programmer = "Ammar";
  console.log("add coder to req");

  next();
});

const validateBook = (req, res, next) => {
  if (!req.body.title || !req.body.author || !req.body.price) {
    return res.status(400).json({
      status: "fail",
      message: "title, author and price are required!",
    });
  }

  next();
};

app.param("id", (req, res, next, val) => {
  console.log(`param id is: ${val}`);

  next();
});

// books routes
app
  .route("/api/books")
  .get(bookController.getAllBooks)
  .post(validateBook, bookController.addBook);

app
  .route("/api/books/:id")
  .get(bookController.getBook)
  .delete(bookController.deleteBook)
  .patch(validateBook, bookController.updateBook);

// users routes
app
  .route("/api/")
  .get(userController.getAllUsers)
  .post(userController.addUser);

app
  .route("/api/:id")
  .get(userController.getUser)
  .delete(userController.deleteUser)
  .patch(userController.updateUser);

const port = 4000;
app.listen(port, () => {
  console.log("Server running on port 4444");
});