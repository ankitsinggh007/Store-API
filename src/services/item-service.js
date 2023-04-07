const ItemRepo = require("../repository/item-repo");

class itemService{

    constructor(){
        this.itemRepo=new ItemRepo();
    }
    async getAll(data){
        try {
            const {featured,name,company,sort,fields,pages}=data;
            const reqObj={};
            if(featured) reqObj.featured=featured;
            
            if(company)  reqObj.company=company;
            
            if(name) reqObj.name={ $regex: name, $options: 'i' } ;
            const items=await this.itemRepo.getAll({reqObj,sort,fields,pages})
            return items;
          } catch (error) {
            return error;
          } 
    }

} 
module.exports =itemService;


