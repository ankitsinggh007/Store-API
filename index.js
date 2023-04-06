const express=require('express');
require('dotenv').config();
const connect=require('./src/config/databseConfig.js');

const products=require('./products.json');
const {InsertItem,DeleteItem}=require('./src/seeders/item.js');
const Router = require('./src/routes/index.js');

// InsertItem(products);
// DeleteItem();




const app=express();


app.use(express.json());

app.use('/api',Router);
app.get('/',(req,res)=>{
    res.send('<h1>Welcome to my website</h1><a href="/api/v1/products">here is your product list</a>');
})












const startServer = async ()=>{

    try {
         await connect(process.env.mongo_URI);
        app.listen(process.env.PORT,()=>{console.log('server started')});
    } catch (error) {
        throw error;
    }
}
startServer();