const {Client} = require('pg');
const connection = new Client({
    user : 'postgres',
    password : 'khulJaSimSim',
    host : 'localhost',
    port : '5432',
    database : 'linkerDb'
})

module.exports = connection
