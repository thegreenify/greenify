const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema
const validator = require('validator');
const userSchema = new Schema({
    firstName:{
        type:String,
        required: true,
    },
    lastName:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    mobileNumber:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
    ,
    role:{
       type: mongoose.Schema.Types.ObjectId,
        ref: 'Role' 
    },
    meterNumbers: {
        type: [String],
        default: [],
      },
})

//as we create the model, model have its own methods find findOne, create,..5,6,7,8,9,10,11,12,13,14,15,16,17

//we can also create our just like finOne, they called static methods


//static register method
userSchema.statics.register = async function(firstName,lastName, email, password, mobileNumber){
//validation 
if(!email || !password || !firstName|| !lastName || !mobileNumber){
    throw Error ('All fields must be filled')
}

if(!validator.isEmail(email)){
throw Error ('Email is not valid')
}

if(!validator.isStrongPassword(password)){
    throw Error('Password not strong enough')
}
    const exists = await this.findOne({email})

    if(exists){
        throw Error('Email already in use')
    }


    
    user = await this.findOne({mobileNumber})
    if(user){
      throw Error('Mobile No. already in use')
  }

   //hashing + salting(adding string to hashed password)

   const salt = await bcrypt.genSalt(10)
   const hash = await bcrypt.hash(password,salt)

const user = await this.create({firstName,lastName, mobileNumber,email, password: hash})
return user
}

//static login method
userSchema.statics.login = async function(email, password) {
    if(!email || !password){
        throw Error ('All fields must be filled')
    }

    let user = await this.findOne({email}).populate('role')

    if(!user){
        throw Error('No user with this EmailID')
    }


    const match = await bcrypt.compare(password, user.password)


    if(!match){
        throw Error('Incorrect password')
    }

    return user
}

module.exports = mongoose.model('User', userSchema)