const http = require("http");
require("dotenv").config();
const bodyparser = require('body-parser');
const cors = require("cors");
const { Server } = require("socket.io");
const app = require("./src/app");

const port = process.env.PORT || 5000;

app.use(cors());
const server = http.createServer(app);

server.listen(port, () => {
    console.log("listening on : 5000");
});

const io = new Server(server, {
    cors: {
        origin: "*"
    }
});
require("./src/webSocket/socket")(io);