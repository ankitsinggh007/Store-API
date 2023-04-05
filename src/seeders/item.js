const Item = require("../models/item")

const products=require('../../products.json');

console.log(products.length);


const InsertItem=async(data)=>{
    try {
        await Item.create(data);
    } catch (error) {
            throw error;
    }

}
const DeleteItem=async()=>{
    try {
        await Item.deleteMany({});
    } catch (error) {
            throw error;
    }

}
module.exports={
    InsertItem,
    DeleteItem,
}
