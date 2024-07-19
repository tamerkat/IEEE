const users = [
    { id: 1, name: "Ammar Yasser", email: "ammar@me.io" },
    { id: 2, name: "Omar Yasser", email: "omar@me.io" },
    { id: 3, name: "Mai Yasser", email: "mai@me.io" },
];


exports.getall = (req, res)=> {
    res.status(200).json({
        status: "success",
        data: users,
    });
};


exports.getUserById = (req, res)=> {
    const id = req.params.id;
    const user = users.find((user)=> user.id === id);
    
    if (!user) {
        return res.status(404).json({
            status: 'fail',
            message: 'not valied'
        })
    }

    res.status(200).json({
        status: 'success',
        data: user
    })
}


exports.postNewUser = (req, res)=> {
    const newuser = req.body;
    users.push(newuser);

    res.status(200).json({
        status: 'success',
        data: users
    })
}


exports.deleteUser = (req, res)=> {
    const id = req.params.id;
    const user = users.find((user)=> user.id === id);
    if (!user) {
        return res.status(404).json({
            status: 'fail',
            message: 'not valied'
        })
    }
    users.splice(user, 1);
    res.status(200).json({
        status: 'success',
        data: users
    })
}


exports.patchUser = (req, res) =>{
    const id = req.params.id;
    const updates = req.body;

    const user = users.find((user)=> user.id === id);
    if (!user) {
        return res.status(404).json({
            status: 'fail',
            message: 'not valied'
        })
    }
    user.name = updates.name;
    user.email = updates.email;

    res.status(200).json({
        status: 'success',
        data: user
    })
}