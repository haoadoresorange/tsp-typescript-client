"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
/**
 * Describes the parameter used in a request. A query contains all the parameters that need to be pass for a specific output.
 * Parameters can be found in the output descriptor. It also contains a list of filters to be applied on a specific output.
 * The output response will contain only elements that pass these filters.
 */
class Query {
    /**
     * Constructor
     * @param parameters Object use to send parameters to the server
     */
    constructor(parameters) {
        this.parameters = parameters;
    }
}
exports.Query = Query;
//# sourceMappingURL=query.js.map