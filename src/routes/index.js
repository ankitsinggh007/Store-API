const express=require('express');
const router = require('./v1');

const Router=express.Router();

Router.use('/v1',router);

module.exports=Router;