const users = [
    { id: 1, name: "Ammar Yasser", email: "ammar@me.io" },
    { id: 2, name: "Omar Yasser", email: "omar@me.io" },
    { id: 3, name: "Mai Yasser", email: "mai@me.io" },
  ];
  
  exports.getAllUsers = (req, res) => {
    res.status(200).json({
      status: "success",
      data: users,
    });
  };
  
  exports.getUser = (req, res) => {
    const id = req.params.id;
  
    const user = users.find((user) => user.id === +id);
  
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "Book not found",
      });
    }
  
    res.status(200).json({
      status: "success",
      data: user,
    });
  };
  
  exports.addUser = (req, res) => {
    // {id, title, author}
    const user = req.body;
  
    users.push(user);
  
    res.status(201).json({
      status: "success",
      data: users,
    });
  };
  
  exports.deleteUser = (req, res) => {
    const id = req.params.id;
  
    const user = users.find((user) => user.id === +id);
  
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "Book not found",
      });
    }
  
    const index = users.indexOf(user);
    users.splice(index, 1);
  
    console.log(users);
  
    res.status(200).json({
      status: "success",
      message: "Book deleted successfully",
    });
  };
  
  exports.updateUser = (req, res) => {
    const id = req.params.id;
    const updates = req.body;
  
    const user = users.find((user) => user.id === +id);
  
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "Book not found",
      });
    }
  
    user.name = updates.name;
    user.email = updates.email;
  
    res.status(200).json({
      status: "success",
      data: users,
    });
  };