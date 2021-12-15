"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertNumber = exports.number = exports.bigint = void 0;
exports.bigint = `bigint`;
exports.number = `number`;
/**
 * Throw if `input` is not a `number`.
 */
const assertNumber = (num) => {
    if (typeof num === exports.bigint) {
        throw new TypeError(`Expected ${num} to be ${exports.number}, found ${exports.bigint}!`);
    }
    return exports.number;
};
exports.assertNumber = assertNumber;
//# sourceMappingURL=serialization.js.map