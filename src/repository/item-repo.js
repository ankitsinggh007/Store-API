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
    async getAll(){
      try {
        const items=await Item.find();
        return items;
      } catch (error) {
        return error;
      }  
    }





}
module.exports=ItemRepo;