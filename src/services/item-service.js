const ItemRepo = require("../repository/item-repo");

class itemService{

    constructor(){
        this.itemRepo=new ItemRepo();
    }
    async getAll(data){
        try {
            const items=await this.itemRepo.getAll(data);
            return items;
          } catch (error) {
            return error;
          } 
    }

} 
module.exports =itemService;


