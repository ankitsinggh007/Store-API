const Item = require("../models/item")

class ItemRepo {

    async InsertOne(data){
        try {
        const item =  await Item.create(data);
        return item; 
        } catch (error) {
            return error;
        }
    }
    async getAll(data){
      try {
        const limit=5;
        const pages=data.pages||1;
        const skip=(pages-1)*limit;
        console.log("skip :",skip,"pages",pages)
        const items=await Item.find(data.reqObj).sort(data.sort).select(data.fields).skip(skip).limit(limit);
        return items;
      } catch (error) {
        return error;
      }  
    }





}
module.exports=ItemRepo;