"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const io = require("socket.io");
const http_1 = require("http");
const Client_1 = require("./lib/Client");
class SimplyticsServer {
    constructor() {
        this._app = express();
        this._server = http_1.createServer(this._app);
        this._io = io(this._server);
        this._clients = [];
        this.init();
    }
    init() {
        this._server.listen(8181, () => {
            console.log('Server listening on 127.0.0.1:8181');
        });
        this._io.sockets.on('connection', (socket) => {
            const newSocket = new Client_1.default(socket, this);
            this._clients.push(newSocket);
        });
        this._app.get('/', (req, res) => {
            res.sendFile(`${__dirname}/dashboard.html`);
        });
    }
    handleDisconnect(client) {
        for (let i = 0; i < this._clients.length; i++) {
            if (this._clients[i].socket.id === client.socket.id) {
                this._clients.splice(i, 1);
            }
        }
    }
}
exports.default = SimplyticsServer;
new SimplyticsServer();
//# sourceMappingURL=SimplyticsServer.js.map