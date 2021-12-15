"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableModelSchema = exports.LineSchema = exports.CellSchema = exports.ColumnHeaderEntrySchema = void 0;
const serialization_1 = require("../protocol/serialization");
exports.ColumnHeaderEntrySchema = {
    id: serialization_1.assertNumber,
};
exports.CellSchema = {
    tags: serialization_1.assertNumber,
};
exports.LineSchema = {
    cells: [exports.CellSchema],
    index: serialization_1.assertNumber,
    tags: serialization_1.assertNumber,
};
exports.TableModelSchema = {
    columnIds: [serialization_1.assertNumber],
    lines: [exports.LineSchema],
    lowIndex: serialization_1.assertNumber,
    size: serialization_1.assertNumber,
};
//# sourceMappingURL=table.js.map