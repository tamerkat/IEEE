const express = require("express")
const router = express.Router(); 


const users = [
  { id: 1, name: "Ammar Yasser", email: "ammar@me.io" },
  { id: 2, name: "Omar Yasser", email: "omar@me.io" },
  { id: 3, name: "Mai Yasser", email: "mai@me.io" },
];
  
router.get("/getall", async (req, res)=>{
  res.status(200).json({
    status: "success",
    data: users,
  })
})

router.get("/getone", async (req, res)=>{
  try {
    const id = req.query.id;
    const user = users.find((user)=> user.id === +id)
    if (!user){
      return res.status(404).json({
        massage: 'not fount id user'
      })
    }
    res.status(200).json({
      massage: "success",
      data: user
    })
  } catch (error) {
    res.status(404).json({
      massage: 'fail, not valied'
    })
  }
})

router.post("/postdata", async (req, res)=>{
  const newdata = req.body;
  users.push(newdata)
  if (!newdata){
    res.status.json({
      massage: "invaild data"
    })
  }
  res.status(200).json({
    massage: "success",
    data: users
  })
})

router.delete("/deleteuser", async (req, res)=>{
  try {
    const id = req.query.id;
    const user = users.find((user)=> user.id === +id)

    users.splice(id, 1)
    if(!user){
      return res.status(404).json({
        massage: "invaild data"
      })
    } 
  } catch (error) {
    return res.status(404).json({
      massage: "invaild data"
    })
  }
  res.status(200).json({
    massage: 'success',
    data: users
  })
})

router.patch("/patch", async (req, res)=>{
  try {
    const id = req.query.id;
    const update = req.body;
    const user = users.find((user)=> user.id === +id);
  
    if(!user || !update){
      res.status(404).json({massage: 'invaild data'})
    }

    user.title = update.title;
    user.author = update.author;
  
    res.status(200).json({
      massage: "success",
      data: user
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({massage:"intrenal server error"})
  }
})


module.exports = router ;