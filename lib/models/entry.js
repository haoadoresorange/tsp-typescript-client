"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntryModelSchema = exports.EntrySchema = void 0;
const serialization_1 = require("../protocol/serialization");
exports.EntrySchema = {
    id: serialization_1.assertNumber,
    parentId: serialization_1.assertNumber,
};
const EntryModelSchema = (schema) => ({ entries: [schema] });
exports.EntryModelSchema = EntryModelSchema;
//# sourceMappingURL=entry.js.map