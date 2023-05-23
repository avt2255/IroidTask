const mongoose = require('mongoose')
mongoose.connect('xxxxxxxxxxxxxxxxxxxxx----Database Url----xxxxxxxxxxxxxxxxxxxxx')
const schema = mongoose.Schema
const userSchema = new schema({
    loginId: { type: schema.Types.ObjectId, ref: "login_tb" },   
    fullName: { type: String },
    email:{ type: String},
    password:{ type: String},
})
const userRegister=mongoose.model('userRegister',userSchema)
module.exports=userRegister