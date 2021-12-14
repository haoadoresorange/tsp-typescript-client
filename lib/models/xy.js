"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XYModelSchema = exports.XYSeriesSchema = void 0;
const serialization_1 = require("../protocol/serialization");
exports.XYSeriesSchema = {
    seriesId: serialization_1.assertNumber,
    xValues: [serialization_1.number],
    yValues: [serialization_1.assertNumber],
    tags: [serialization_1.assertNumber],
};
exports.XYModelSchema = {
    series: [exports.XYSeriesSchema],
};
//# sourceMappingURL=xy.js.map