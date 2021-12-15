"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const query_helper_1 = require("./query-helper");
const query_1 = require("./query");
describe('Query helper tests', () => {
    it('Should build a simple query', () => {
        const content = {
            first: 1
        };
        const query = new query_1.Query(content);
        const test = query_helper_1.QueryHelper.query(content);
        expect(test).toEqual(query);
    });
    it('Should build a simple time query', () => {
        const array = [BigInt(1), BigInt(2), BigInt(3)];
        const query = new query_1.Query({ [query_helper_1.QueryHelper.REQUESTED_TIMES_KEY]: array });
        const test = query_helper_1.QueryHelper.timeQuery(array);
        expect(test).toEqual(query);
    });
    it('Should build a simple time query with selected items', () => {
        const times = [BigInt(1), BigInt(2), BigInt(3)];
        const items = [4, 5, 6];
        const query = new query_1.Query({
            [query_helper_1.QueryHelper.REQUESTED_TIMES_KEY]: times,
            [query_helper_1.QueryHelper.REQUESTED_ITEMS_KEY]: items
        });
        const test = query_helper_1.QueryHelper.selectionTimeQuery(times, items);
        expect(test).toEqual(query);
    });
    it('Should build a simple table query', () => {
        const columnIds = [1, 2, 3];
        const index = 2;
        const count = 1;
        const query = new query_1.Query({
            [query_helper_1.QueryHelper.REQUESTED_TABLE_INDEX_KEY]: index,
            [query_helper_1.QueryHelper.REQUESTED_TABLE_COUNT_KEY]: count,
            [query_helper_1.QueryHelper.REQUESTED_TABLE_COLUMN_IDS_KEY]: columnIds
        });
        const test = query_helper_1.QueryHelper.tableQuery(columnIds, index, count);
        expect(test).toEqual(query);
    });
    it('Should split the range into equal parts', () => {
        const start = BigInt(10);
        const end = BigInt(20);
        const parts = 3;
        const array = [BigInt(10), BigInt(15), BigInt(20)];
        const test = query_helper_1.QueryHelper.splitRangeIntoEqualParts(start, end, parts);
        expect(test).toEqual(array);
    });
    it('Should split the range into equal parts without duplicates', () => {
        const start = BigInt('1234567890123456781');
        const end = BigInt('1234567890123456785');
        const parts = 20;
        const array = [BigInt('1234567890123456781'), BigInt('1234567890123456782'), BigInt('1234567890123456783'), BigInt('1234567890123456784'), BigInt('1234567890123456785')];
        const test = query_helper_1.QueryHelper.splitRangeIntoEqualParts(start, end, parts);
        expect(test).toEqual(array);
    });
});
//# sourceMappingURL=query-helper.test.js.map