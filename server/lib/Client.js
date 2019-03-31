"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Client {
    constructor(socket, server) {
        this.socket = socket;
        this._server = server;
        this.id = this.socket.id;
        this.init();
    }
    init() {
        console.log(`${this.id} connected`);
        this.socket.on('disconnect', () => { this.disconnect(); });
    }
    disconnect() {
        console.log(`${this.id} disconnected`);
        this._server.handleDisconnect(this);
    }
}
exports.default = Client;
//# sourceMappingURL=Client.js.map