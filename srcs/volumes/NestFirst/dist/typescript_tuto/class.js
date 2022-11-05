"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DemoClass {
    constructor(options) {
    }
    demo() {
    }
    static static_demo() {
    }
    set element(value) {
        this._element = value;
    }
    get element() {
        return (this._element);
    }
}
let d = new DemoClass({ autoplay: true, x: 4 });
d.demo();
DemoClass.static_demo();
//# sourceMappingURL=class.js.map