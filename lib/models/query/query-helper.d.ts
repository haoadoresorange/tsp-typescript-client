import { Query } from './query';
/**
 * Helper class to create query object
 */
export declare class QueryHelper {
    /**
     * Time requested key
     */
    static readonly REQUESTED_TIMES_KEY: string;
    /**
     * Selected items key
     */
    static readonly REQUESTED_ITEMS_KEY: string;
    /**
     * Selected items key
     */
    static readonly REQUESTED_ELEMENT_KEY: string;
    /**
     * Starting index key
     */
    static readonly REQUESTED_TABLE_INDEX_KEY: string;
    /**
     * Key for the number of element to return
     */
    static readonly REQUESTED_TABLE_COUNT_KEY: string;
    /**
     * Table column IDs key
     */
    static readonly REQUESTED_TABLE_COLUMN_IDS_KEY = "requested_table_column_ids";
    /**
     * Build a simple query
     * @param additionalProperties Use this optional parameter to add custom properties to your query
     */
    static query(additionalProperties?: {
        [key: string]: any;
    }): Query;
    /**
     * Build a simple time query
     * @param requestedTimes Array of requested times
     * @param additionalProperties Use this optional parameter to add custom properties to your query
     */
    static timeQuery(requestedTimes: bigint[], additionalProperties?: {
        [key: string]: any;
    }): Query;
    /**
     * Build a simple time query with selected items
     * @param requestedTimes Array of requested times
     * @param items Array of item IDs
     * @param additionalProperties Use this optional parameter to add custom properties to your query
     */
    static selectionTimeQuery(requestedTimes: bigint[], items: number[], additionalProperties?: {
        [key: string]: any;
    }): Query;
    /**
     * Build a simple table query
     * @param columnsId Desired columns
     * @param index Starting index to query
     * @param count Number of lines
     * @param additionalProperties Use this optional parameter to add custom properties to your query
     */
    static tableQuery(columnsId: number[], index: number, count: number, additionalProperties?: {
        [key: string]: any;
    }): Query;
    /**
     * Split the range into equal parts
     * @param start Start time
     * @param end End time
     * @param nb Number of elements
     */
    static splitRangeIntoEqualParts(start: bigint, end: bigint, nb: number): bigint[];
}
//# sourceMappingURL=query-helper.d.ts.map