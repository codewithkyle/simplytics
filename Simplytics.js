"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io = require("socket.io-client");
var Simplytics = (function () {
    function Simplytics(isDebug) {
        if (isDebug === void 0) { isDebug = false; }
        this._socket = io(Simplytics.SERVER + ":" + Simplytics.PORT);
        this.init();
    }
    Simplytics.prototype.init = function () {
    };
    Simplytics.SERVER = '127.0.0.1';
    Simplytics.PORT = '8181';
    return Simplytics;
}());
exports.default = Simplytics;
//# sourceMappingURL=Simplytics.js.map