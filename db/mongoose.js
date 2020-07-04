const mongoose = require('mongoose');
require('dotenv').config()

const dbName = process.env.DB_NAME || 'Mckinley'

mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then((res)=>console.log('Database is Connected'))
.catch((e)=>console.log('Error Occured while connecting to the database',e))

module.exports = mongoose