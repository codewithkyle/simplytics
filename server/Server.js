"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const io = require("socket.io");
const http_1 = require("http");
class SimplyticsServer {
    constructor() {
        this._app = express();
        this._server = http_1.createServer(this._app);
        this._io = io(this._server);
        this.init();
    }
    init() {
        this._server.listen(8181, () => {
            console.log('Server listening on 127.0.0.1:8181');
        });
        this._io.on('connection', (socket) => {
            console.log('a user connected');
        });
        this._app.get('/', (req, res) => {
            res.sendFile(`${__dirname}/dashboard.html`);
        });
    }
}
exports.default = SimplyticsServer;
(() => {
    new SimplyticsServer();
})();
//# sourceMappingURL=Server.js.map