const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const register = require('../routers/register.js');
const login = require('../routers/login.js');
const clients = require('../routers/clients.js');
const employee = require('../routers/employee')
const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());



server.use('/api/login', login);
server.use('/api/register', register);
server.use('/api/client', clients);
server.use('/api/employee', employee);

server.get('/', (req, res) => {
    res.send('server is up');
    console.log(req.body)
});


module.exports = server;