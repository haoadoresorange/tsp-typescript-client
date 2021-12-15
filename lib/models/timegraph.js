"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeGraphArrowSchema = exports.TimeGraphModelSchema = exports.TimeGraphRowSchema = exports.TimeGraphEntrySchema = void 0;
const serialization_1 = require("../protocol/serialization");
exports.TimeGraphEntrySchema = {
    end: serialization_1.bigint,
    id: serialization_1.assertNumber,
    parentId: serialization_1.assertNumber,
    start: serialization_1.bigint,
};
const TimeGraphStateSchema = {
    end: serialization_1.bigint,
    start: serialization_1.bigint,
    tags: serialization_1.assertNumber,
};
exports.TimeGraphRowSchema = {
    entryId: serialization_1.assertNumber,
    states: [TimeGraphStateSchema],
};
exports.TimeGraphModelSchema = {
    rows: [exports.TimeGraphRowSchema],
};
exports.TimeGraphArrowSchema = {
    end: serialization_1.bigint,
    sourceId: serialization_1.assertNumber,
    start: serialization_1.bigint,
    targetId: serialization_1.assertNumber,
};
//# sourceMappingURL=timegraph.js.map