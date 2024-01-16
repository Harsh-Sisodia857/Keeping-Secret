const User = require('../models/User');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const JWT_SECRET = "HarshWantsToBeWebDeveloper";


module.exports.login =async function (req, res) {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    let user =await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ Error: "User does not exists" });
    }
    console.log(user.password)
    console.log(password)
    const passwordCompare = await bcrypt.compare(password, user.password);
    console.log(passwordCompare);
    if (!passwordCompare) {
        success = false;
        return res.status(400).json({success, error: "Please login with correct credentials" });
    }
    const data = {
        user: {
            id: user.id
        }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    res.json({ success : true, authtoken })
}

//createUser
module.exports.signup =async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    let user = await User.findOne({ email: req.body.email })
    if (user) {
        return res.status(400).json({ error: "User with this email exists",success : false });
    }
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password : req.body.password,
    });

    const data = {
        user: {
            id: user.id
        }
    }
    const authToken = jwt.sign(data, JWT_SECRET);
    res.json({
        success : true,
        authToken
    })
}