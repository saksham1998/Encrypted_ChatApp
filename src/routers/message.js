const express = require('express');
const router = express.Router();

const Message = require('../../db/models/Message');
const User = require('../../db/models/User');
const auth = require('../middlewares/auth')
const crypto = require('crypto-js');
require('dotenv').config()

router.post('/message',auth,async (req,res)=>{
    try{
        const ownerId = req.me._id;
        const {message,recieverNo} = req.body
        const encyptedMessage = crypto.AES.encrypt(message, process.env.ENCRYPTION_KEY).toString();
        const reciever = await User.findOne({phoneNo:recieverNo})  
        const message = new Message({message:encyptedMessage,ownerId,receiverId:reciever._id,receiverName:reciever.name})
        await message.save()
        res.status(200).send({message:'Message Created Successfully',data:message})
    }catch(e){
        res.status(404).send({message:e.message,data:null})
    }
})

router.delete('/message',auth,async (req,res)=>{
    try{
        const message = await Message.deleteOne({_id:req.body.messageId})  
        res.status(200).send({message:'Message Deleted Successfully',data:message})
    }catch(e){
        res.status(404).send({message:e.message,data:null})
    }
})

module.exports = router