const app = require('./app');
const http =  require('http');
const socket = require('socket.io');
require('dotenv').config();

app.set('PORT', process.env.PORT || 3001);

const server = http.createServer(app);
const io = socket(server,{
    cors:{
        origin: "*",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    },
})

    let messages = [];

io.on('connect',socket=>{
    socket.on('receiveMessage', data =>{
        messages.push(data);
        console.log(messages)

        socket.broadcast.emit('receiveMessages', data)
    })
}) 

server.listen(app.get('PORT'),()=>{
    console.log(`Servidor rodando na porta: ${server.address().port}`)
})

module.exports = io;