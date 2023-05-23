const mongoose = require('mongoose')
mongoose.connect('xxxxxxxxxxxxxxxxxxxxx----Database Url----xxxxxxxxxxxxxxxxxxxxx')
const schema = mongoose.Schema
const loginSchema = new schema({
    email: { type: String },
    password: { type: String }
})
const login_tb = mongoose.model('login_tb', loginSchema)
module.exports = login_tb