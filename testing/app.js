"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Simplytics_1 = require("../client/Simplytics");
var App = (function () {
    function App() {
        this._simplytics = new Simplytics_1.default();
    }
    return App;
}());
exports.default = App;
(function () {
    new App();
})();
//# sourceMappingURL=app.js.map