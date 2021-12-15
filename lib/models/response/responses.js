"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericResponseSchema = exports.ResponseStatus = void 0;
/**
 * Response status
 */
var ResponseStatus;
(function (ResponseStatus) {
    /**
     * Model is partial, data provider is still computing. If this status is
     * returned, it's viewer responsability to request again the data provider after
     * waiting some time. Request data provider until COMPLETED status is received
     */
    ResponseStatus["RUNNING"] = "RUNNING";
    /**
     * Model is complete, no need to request data provider again
     */
    ResponseStatus["COMPLETED"] = "COMPLETED";
    /**
     * Error happened. Please see logs or detailed message of status.
     */
    ResponseStatus["FAILED"] = "FAILED";
    /**
     * Task has been cancelled. Please see logs or detailed message of status.
     */
    ResponseStatus["CANCELLED"] = "CANCELLED";
})(ResponseStatus = exports.ResponseStatus || (exports.ResponseStatus = {}));
const GenericResponseSchema = (schema) => ({ model: schema });
exports.GenericResponseSchema = GenericResponseSchema;
//# sourceMappingURL=responses.js.map