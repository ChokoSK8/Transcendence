"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DemoClass = /** @class */ (function () {
    function DemoClass(options) {
    }
    DemoClass.prototype.demo = function () {
    };
    DemoClass.static_demo = function () {
    };
    Object.defineProperty(DemoClass.prototype, "element", {
        get: function () {
            return (this._element);
        },
        // use tsc -t es5 to enable accessors
        set: function (value) {
            this._element = value;
        },
        enumerable: false,
        configurable: true
    });
    return DemoClass;
}());
var d = new DemoClass({ autoplay: true, x: 4 });
d.demo();
DemoClass.static_demo();
