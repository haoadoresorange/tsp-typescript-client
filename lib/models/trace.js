"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraceSchema = void 0;
const serialization_1 = require("../protocol/serialization");
exports.TraceSchema = {
    end: serialization_1.bigint,
    nbEvents: serialization_1.assertNumber,
    start: serialization_1.bigint,
};
//# sourceMappingURL=trace.js.map