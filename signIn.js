"use strict"

const express = require('express');
const router = express.Router();
 //To access the Http Request Body
const bodyParser = require('body-parser');
const {Client} = require('pg');
const connection = new Client({
    user : 'postgres',
    password : 'khulJaSimSim',
    host : 'localhost',
    port : '5432',
    database : 'linkerDb'
})
//To add 'body' property to request object
router.use(bodyParser.urlencoded({extended : true}));

router.post('/',(req,res) => {
    let name = req.body['user']
    let password = req.body['password']
    connection.connect((err,client) => {
        if(err){
            console.log(err)
            return
        }
        console.log(password + "aaa " + name)
        client.query('select password from users where name = $1',[name], (err,result) => {
            if(err){
                console.log(err)
                return
            }
           if(result.rows.length > 0){
                if(password == result.rows[0].password){
                    connection.end()
                    res.send("True")
                }
                else{
                    connection.end()
                    res.send("False")
                }
            }
            else{
                connection.end()
                res.send("False")
            }

        })
    })
})

module.exports = router