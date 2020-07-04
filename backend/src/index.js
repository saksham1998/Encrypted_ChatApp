const express = require('express');
const cors = require('cors');
require('../db/mongoose');

const userRouter = require('./routers/user');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/users',userRouter);

app.listen(port,console.log(`Server is running at port ${port}!!!`))