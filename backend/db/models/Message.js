const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    message:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    },
    timestamp:{
        type:Date,
        default:Date.now()
    },
    ownerId:{
        type:mongoose.Schema.Types.ObjectId
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId
    },
    receiverName:{
        type:String,
    }
})

const Message = mongoose.model('message',messageSchema)

module.exports = Message