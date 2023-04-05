
const mongoose =require('mongoose');

const ItemSchema=mongoose.Schema({

    name:{
        type: String,
        required:[true,"Can't be empty"]

    },

    price:{
        type:Number,
        required:[true,"the has to be some price"]
    },


    featured:{type:Boolean,
        default:false,
    },
    
    rating:{
        type:Number,
        default:4.5,
    },

    createdAt:{
        type:Date,
        default:Date.now(),
        
    },

    company:{
        type:String,
        enum:{
            values:['caressa','ikea','marcos','liddy'],
            message:`this {VALUE} is not Supported`
        }

    }

});

const Item=mongoose.model("Item",ItemSchema);

module.exports=Item;