const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config()

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:2,
        trim:true,
        lowercase:true
    },
    mail:{
        type:String,
        unique:true,
        minlength:10,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error('Email Format is not correct..')
        }
    },
    phoneNo:{
        type:String,
        required:true,
        unique:true,
        minlength:10,
        trim:true,
        validate(value){
            if(!validator.isMobilePhone(value,'any')) throw new Error('Phone Number is not correct..')
        }
    },
    password:{
        type:String,
        required:true,
        minlength:6,
        trim:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ],
});

userSchema.methods.generateJWTToken = async function(){
    const token = jwt.sign({id:this._id.toString()},process.env.JWT_SECRET)
    this.tokens.push({token})
    await this.save()
    return token
} 

userSchema.statics.checkCredentials = async (mail,password)=>{
    let user = await User.findOne({mail})
    if(!user) throw new Error('Email is not registered')

    if(!await bcrypt.compare(password,user.password)) throw new Error('Password is not correct')

    return user
}

userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,8);
    }
    next()
})

const User = mongoose.model('User',userSchema);

module.exports = User