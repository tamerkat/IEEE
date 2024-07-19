const users = [
    { id: 1, name: "Ammar Yasser", email: "ammar@me.io" },
    { id: 2, name: "Omar Yasser", email: "omar@me.io" },
    { id: 3, name: "Mai Yasser", email: "mai@me.io" },
];

exports.getall = (req, res) => {
    res.status(200).json({
        status: "success",
        data: users
    });
};

exports.getone = (req, res) => {
    try {
        const id = req.params.id;
        const user = users.find((user) => user.id === +id);
        if (!user) {
            return res.status(404).json({
                status: "fail",
                message: "Invalid ID get"
            });
        }
        res.status(200).json({
            status: "success",
            data: user
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.posts = (req, res) => {
    try {
        const newData = req.body;
        if (!newData || !newData.name || !newData.email) {
            return res.status(400).json({
                status: "fail",
                message: "Invalid Data post"
            });
        }
        newData.id = users.length + 1;
        users.push(newData);
        res.status(201).json({
            status: "success",
            data: newData
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.delete = (req, res) => {
    try {
        const id = req.query.id;
        const index = users.findIndex((user) => user.id === +id);
        users.splice(index, 1);
        res.status(200).json({
            status: "success",
            data: users
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.patch = (req, res) => {
    try {
        const id = req.params.id;
        const update = req.body;
        const user = users.find((user) => user.id === +id);
        if (!user) {
            return res.status(404).json({
                status: "fail",
                message: "Invalid ID patch"
            });
        }
        if (update.name) user.name = update.name;
        if (update.email) user.email = update.email;
        res.status(200).json({
            status: "success",
            data: users
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};
