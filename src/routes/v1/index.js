const express=require('express');
const { getAllItems } = require('../../controllers/item-controllers');

const router=express.Router();


router.get('/products',getAllItems);



module.exports=router;