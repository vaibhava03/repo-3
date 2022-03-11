

//routes
const path=require('path');
const express=require('express');

const routeDir=require('../util/path');
const router=express.Router();
const productsController=require('../controllers/contacts.js');

router.get('/contactus', productsController.getContacts);

router.post('/contactus',productsController.postContacts);
router.get('/success',productsController.getSuccess);
module.exports=router;

//controllers

const path=require('path');
const Product=require('../models/product');
exports.getContacts=(req, res, next) =>{
       
    res.sendFile(path.join(__dirname,'../', 'views', 'contact', 'contactUS.html'));
        };
        
exports.postContacts=(req, res, next) =>{
    console.log(req.body);
    res.redirect('/success');
    };

exports.getSuccess=(req, res, next) =>
{
    res.sendFile(path.join(__dirname, '../', 'views', 'contact', 'success.html'));

};
