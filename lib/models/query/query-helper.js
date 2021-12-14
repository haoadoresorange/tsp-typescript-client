"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryHelper = void 0;
const query_1 = require("./query");
/**
 * Helper class to create query object
 */
class QueryHelper {
    /**
     * Build a simple query
     * @param additionalProperties Use this optional parameter to add custom properties to your query
     */
    static query(additionalProperties) {
        return new query_1.Query(Object.assign({}, additionalProperties));
    }
    /**
     * Build a simple time query
     * @param requestedTimes Array of requested times
     * @param additionalProperties Use this optional parameter to add custom properties to your query
     */
    static timeQuery(requestedTimes, additionalProperties) {
        const timeObj = {
            [this.REQUESTED_TIMES_KEY]: requestedTimes
        };
        return new query_1.Query(Object.assign(Object.assign({}, timeObj), additionalProperties));
    }
    /**
     * Build a simple time query with selected items
     * @param requestedTimes Array of requested times
     * @param items Array of item IDs
     * @param additionalProperties Use this optional parameter to add custom properties to your query
     */
    static selectionTimeQuery(requestedTimes, items, additionalProperties) {
        const selectionTimeObj = {
            [this.REQUESTED_TIMES_KEY]: requestedTimes,
            [this.REQUESTED_ITEMS_KEY]: items
        };
        return new query_1.Query(Object.assign(Object.assign({}, selectionTimeObj), additionalProperties));
    }
    /**
     * Build a simple table query
     * @param columnsId Desired columns
     * @param index Starting index to query
     * @param count Number of lines
     * @param additionalProperties Use this optional parameter to add custom properties to your query
     */
    static tableQuery(columnsId, index, count, additionalProperties) {
        const tableObj = {
            [this.REQUESTED_TABLE_INDEX_KEY]: index,
            [this.REQUESTED_TABLE_COUNT_KEY]: count,
            [this.REQUESTED_TABLE_COLUMN_IDS_KEY]: columnsId
        };
        return new query_1.Query(Object.assign(Object.assign({}, tableObj), additionalProperties));
    }
    /**
     * Split the range into equal parts
     * @param start Start time
     * @param end End time
     * @param nb Number of elements
     */
    static splitRangeIntoEqualParts(start, end, nb) {
        if (nb <= 0) {
            return [];
        }
        if (nb === 1) {
            return [start];
        }
        if (start > end) {
            const tmp = end;
            end = start;
            start = tmp;
        }
        nb = Math.min(nb, Number(end - start + BigInt(1)));
        const result = new Array(nb);
        const stepSize = Math.max(1, Number(end - start) / (nb - 1));
        for (let i = 0; i < nb; i++) {
            result[i] = start + BigInt(Math.floor(i * stepSize));
        }
        result[result.length - 1] = end;
        return result;
    }
}
exports.QueryHelper = QueryHelper;
/**
 * Time requested key
 */
QueryHelper.REQUESTED_TIMES_KEY = 'requested_times';
/**
 * Selected items key
 */
QueryHelper.REQUESTED_ITEMS_KEY = 'requested_items';
/**
 * Selected items key
 */
QueryHelper.REQUESTED_ELEMENT_KEY = 'requested_element';
/**
 * Starting index key
 */
QueryHelper.REQUESTED_TABLE_INDEX_KEY = 'requested_table_index';
/**
 * Key for the number of element to return
 */
QueryHelper.REQUESTED_TABLE_COUNT_KEY = 'requested_table_count';
/**
 * Table column IDs key
 */
QueryHelper.REQUESTED_TABLE_COLUMN_IDS_KEY = 'requested_table_column_ids';
//# sourceMappingURL=query-helper.js.map