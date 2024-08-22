const express=require('express');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const routes=require('../many-to-many/routes/userRoutes');

const app=express();
app.use(bodyparser.json());
mongoose.connect('mongodb://localhost:27017/mydatabase',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('connected to database');
}).catch(err=>{
    console.log('error on connecting database');
});
app.use('/go',routes);
app.listen(3000,()=>{
    console.log('server is running on port number 3000');
});