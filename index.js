const server = require('./api/server.js');
const port = process.env.Port || 5000;

server.listen(port, () => {
    console.log("Server is running on port ${port}")
});