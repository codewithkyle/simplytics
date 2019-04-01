"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io = require("socket.io-client");
var uuid = require("uuid/v4");
var Simplytics = (function () {
    function Simplytics(isDebug, server, port) {
        if (isDebug === void 0) { isDebug = false; }
        if (server === void 0) { server = null; }
        if (port === void 0) { port = 8181; }
        Simplytics.SERVER = (server === null) ? window.location.hostname : server;
        Simplytics.PORT = port;
        this._socket = io.connect(Simplytics.SERVER + ":" + Simplytics.PORT);
        this._isDebug = isDebug;
        this._uuid = window.localStorage.getItem(window.location.host + "_simplytics");
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
        if (this._uuid === null) {
            this._uuid = uuid();
            window.localStorage.setItem(window.location.host + "_simplytics", "" + this._uuid);
            if (this._isDebug) {
                console.log("Generated a new UUID " + this._uuid);
            }
        }
        else if (this._isDebug) {
            console.log("Using existing UUID " + this._uuid);
        }
        this._socket.emit('identify', this._uuid);
    };
    return Simplytics;
}());
exports.default = Simplytics;
//# sourceMappingURL=Simplytics.js.map