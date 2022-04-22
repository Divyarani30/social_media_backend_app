const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");


router.post("/signup", async (req, res) => {
    console.log("outside coming inside", req.body);
    try {
        console.log("coming inside", req.body);
        const { username, email, password } = req.body;
        console.log("coming inside", username, email, password);
        //encrypt new password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        console.log("hash", hashPassword)
        //create new user
        const newUser = new User({
            username, email, password: hashPassword
        });
        console.log("newUser", newUser)

        const user = await newUser.save();
        console.log("user", user)
        res.status(200).json({
            message: 'registered successfully',
            userLoginDetails: user
        });
    } catch (error) {
        res.status(500).json({
            message: 'facing issue while register, please try again'
        })
        console.log("facing issue while register", error)
    }

});

// router.post("/login", async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const isExistingUser = await User.findOne({ email });
//         !isExistingUser && res.status(404).json("user not found, please sign up");

//     } catch (error) {

//     }

// })

module.exports = router;
