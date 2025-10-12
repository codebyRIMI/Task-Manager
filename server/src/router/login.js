const express = require('express');
const router = express.Router()
const bcrypt = require("bcrypt");
const { sign } = require('jsonwebtoken');
const Loginmodel  = require ('../models/login');
const { validateToken } = require ('../middleWares/AuthMiddleWares')


router.post("/", async (req, res) => {
    const { username, email,password } = req.body;
    console.log("Received data:", req.body);
    bcrypt.hash(password, 10).then((hash) => {
        Loginmodel.create({
            username: username,
            email: email,
            password: hash,
        });
        res.json("SUCCESS");
    });
});

router.post("/login", async (req, res) => {

    const { email, password, username } = req.body;
    const user = await Loginmodel.findOne({ email: email });
    if (!user) return res.json({ error: "User Doesn't Exist"});
    bcrypt.compare(password, user.password).then(async (match) => {
        if (!match) return res.json({ error: "Wrong email And Password Combination"});
        const accessToken = sign({email: user.email, id: user._id, username: user.username},
            "importantSecret",{expiresIn: "1d",}
        );
        res.json({ token: accessToken, email: user.email, id: user._id,username: user.username });
    });
});

router.get("/auth", validateToken, (req, res) => {
    res.json(req.user);
  });

router.get("/login/:id", async (req,res) => {
    const { id } = req.params;
    try{
        const user = await Loginmodel.findById(id).select("-password");;
        if(!user) {
            return res.json ({error: "user does not exist"})
        }
        res.json(user);
    } catch{
        res.json({error: "there is an error"});
    }
});


router.get("/users", async (req, res) => {
    try {
        const users = await Loginmodel.find().select('email');  // Use find() to get all users from the database
        res.json(users);
    } catch (error) {
        res.json({ error: "There was an error fetching users" });
    }
});





module.exports = router;