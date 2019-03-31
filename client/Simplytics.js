"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io = require("socket.io-client");
var Simplytics = (function () {
    function Simplytics(isDebug, server, port) {
        if (isDebug === void 0) { isDebug = false; }
        if (server === void 0) { server = null; }
        if (port === void 0) { port = 8181; }
        Simplytics.SERVER = (server === null) ? window.location.hostname : server;
        Simplytics.PORT = port;
        this._socket = io.connect(Simplytics.SERVER + ":" + Simplytics.PORT);
        this._isDebug = isDebug;
        this.init();
    }
    Simplytics.prototype.init = function () {
        var _this = this;
        this._socket.on('connect', function () { _this.connect(); });
    };
    Simplytics.prototype.connect = function () {
        if (this._isDebug) {
            console.log("Simplytics connected with the server at " + Simplytics.SERVER + ":" + Simplytics.PORT);
        }
    };
    return Simplytics;
}());
exports.default = Simplytics;
//# sourceMappingURL=Simplytics.js.map