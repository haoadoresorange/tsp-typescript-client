"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnotationSchema = exports.Type = void 0;
const serialization_1 = require("../protocol/serialization");
var Type;
(function (Type) {
    Type["TREE"] = "TREE";
    Type["CHART"] = "CHART";
})(Type = exports.Type || (exports.Type = {}));
exports.AnnotationSchema = {
    annotations: {
        [Symbol.for(`any`)]: [{
                duration: serialization_1.bigint,
                entryId: serialization_1.assertNumber,
                time: serialization_1.bigint,
            }]
    }
};
//# sourceMappingURL=annotation.js.map