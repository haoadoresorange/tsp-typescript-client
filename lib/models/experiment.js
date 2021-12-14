"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperimentSchema = void 0;
const serialization_1 = require("../protocol/serialization");
const trace_1 = require("./trace");
exports.ExperimentSchema = {
    end: serialization_1.bigint,
    nbEvents: serialization_1.assertNumber,
    start: serialization_1.bigint,
    traces: [trace_1.TraceSchema],
};
//# sourceMappingURL=experiment.js.map