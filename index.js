const express=require('express');
require('dotenv').config();
const connect=require('./src/config/databseConfig.js');
const app=express();

const products=require('./products.json');
const {InsertItem,DeleteItem}=require('./src/seeders/item.js');

// InsertItem(products);
// DeleteItem();







const startServer = async ()=>{

    try {
         await connect(process.env.mongo_URI);
        app.listen(process.env.PORT,()=>{console.log('server started')});
    } catch (error) {
        throw error;
    }
}
startServer();