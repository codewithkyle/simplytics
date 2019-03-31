"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Client {
    constructor(socket, server) {
        this.socket = socket;
        this._server = server;
        this.init();
    }
    init() {
        this.socket.on('disconnect', () => { this._server.handleDisconnect(this); });
    }
}
exports.default = Client;
//# sourceMappingURL=Client.js.map