const express = require('express');
const Router = express.Router();
const db = require('./db');

Router.get('/ping',(req, res, next)=>{

    return new Promise((resolve, reject)=>{
        db.query('SELECT * FROM Teste',(error, result)=>{
            if(error){reject(error); return;}
            console.log(result);
            res.json(result);
            resolve(result);
        })
    })
})

module.exports = Router;