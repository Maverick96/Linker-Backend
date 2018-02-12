const websocket = require('ws').Server
const ws = new websocket({port : 5000})
const express = require('express')
const bp = require('body-parser')
const app = express()
const signin = require(__dirname + '/signIn.js')
app.use(bp.urlencoded({extended : true}))
app.listen('7800',function(){
    console.log("Listening at 7800")
})

app.get('/',function(req,res){
    console.log("Get request received")
    res.sendFile(__dirname+'/index.html')
})

app.get('/index.js',function(req,res){
    console.log("Get request received")
    res.sendFile(__dirname+'/index.js')
    
})

app.use('/signin',signin)

// ws.on('connection', (event) => {
//     console.log('Connected' + event.Connecteddomain)
//     event.on('message' , (msg) => {
//         console.log(msg)
//         event.send(msg)

//     })

//  ws.on('close', (event)=> {
//      console.log("Disconnected")
//  })
// })