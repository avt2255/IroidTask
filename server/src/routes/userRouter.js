const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const userRegister = require('../models/userRegister');
const login_tb = require('../models/login_tb');
const authCheck = require('../../middleware/authCheck')
const userRouter = express.Router();

userRouter.post('/register', async (req, res) => {
    const {
        fullName, email, password
    } = req.body
    try {
        const hashed = await bcrypt.hash(password, 10)

        if (!hashed) {
            return res.status(404).json({ message: "password hashing error" })
        } else {

            const oldUser = await login_tb.findOne({ email })
            if (oldUser) {
                return res.status(404).json({ message: "user already exists" })
            } else {
                const login = await login_tb.create({ email, password: hashed })
                if (!login) {
                    return res.status(404).json({ message: "something went wrong" })
                } else {
                    const register = await userRegister.create({
                        loginId: login._id,
                        fullName, email, password
                    })
                    if (!register) {
                        return res.status(404).json({
                            message: "something went wrong"
                        })
                    } else {
                        return res.status(200).json({
                            message: "student register data added successfully",
                            success: true,
                            error: false
                        })
                    }

                }
            }
        }

    } catch (error) {
        console.log(error);
        return res.status(404).json({
            ERROR: error
        })
    }

})


userRouter.post('/login', async (req, res) => {

    const {  email, password } = req.body

    const loginDetails = await login_tb.findOne({ email })

    if (!loginDetails) {
        res.status(400).json({
            message: "Email doesn't exists"
        })
    } else {
        const hashed = await bcrypt.compare(password, loginDetails.password)
        if (hashed == true) {
            const token = jwt.sign({ loginId: loginDetails._id }, 'secret_007', { expiresIn: "1h" })

            return res.status(200).json({
                message: "Login successful",
                success: true,
                error: false,
                token: token,
            })
        } else {
            res.status(404).json({
                message: "password error",
                success: false,
                error: true
            })
        }
    }
})



userRouter.get('/details', authCheck, async (req, res) => {
    const userDetails = await userRegister.findOne({ loginId: req.userData.loginId })
    try {
        if (!userDetails) {
            res.status(404).json({ message: "data is not occured" })
        } else {
            res.status(200).json({
                userDetails: {
                    fullName: userDetails.fullName,
                    email: userDetails.email,  
                }
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(404).json({ ERROR: error })
    }

})


userRouter.post('/logout', async(req, res) => {
    res.json({ message: 'User logged out successfully' });
});
  

module.exports = userRouter