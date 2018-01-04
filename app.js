const websocket = require('ws').Server
const ws = new websocket({port : 5000})
ws.on('connection', (event) => {
    console.log('Connected' + event.Connecteddomain)
    event.on('message' , (msg) => {
        console.log(msg)
        event.send(msg)

    })

 ws.on('close', (event)=> {
     console.log("Disconnected")
 })
})