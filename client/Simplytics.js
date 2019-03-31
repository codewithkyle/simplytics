"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io = require("socket.io-client");
var Simplytics = (function () {
    function Simplytics(server, port, isDebug) {
        if (server === void 0) { server = null; }
        if (port === void 0) { port = 8181; }
        if (isDebug === void 0) { isDebug = false; }
        Simplytics.SERVER = (server === null) ? window.location.hostname : server;
        Simplytics.PORT = port;
        this._socket = io.connect(Simplytics.SERVER + ":" + Simplytics.PORT);
        this.init();
    }
    Simplytics.prototype.init = function () {
    };
    return Simplytics;
}());
exports.default = Simplytics;
//# sourceMappingURL=Simplytics.js.map