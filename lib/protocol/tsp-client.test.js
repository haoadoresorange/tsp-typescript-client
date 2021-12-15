"use strict";
// tslint:disable: no-unused-expression
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_1 = require("../models/query/query");
const rest_client_1 = require("./rest-client");
const test_utils_1 = require("./test-utils");
const tsp_client_1 = require("./tsp-client");
describe('TspClient Deserialization', () => {
    const client = new tsp_client_1.TspClient('not-relevant');
    const httpRequestMock = jest.fn();
    let fixtures;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        fixtures = yield test_utils_1.FixtureSet.fromFolder(__dirname, 'fixtures/tsp-client');
        rest_client_1.RestClient['httpRequest'] = httpRequestMock;
    }));
    afterAll(() => {
        fixtures.assertUsedAllFixtures();
    });
    beforeEach(() => {
        httpRequestMock.mockReset();
        httpRequestMock.mockResolvedValue({ text: '', status: 404, statusText: 'Not found' });
    });
    it('checkHealth', () => __awaiter(void 0, void 0, void 0, function* () {
        httpRequestMock.mockReturnValueOnce(fixtures.asResponse('check-health-0.json'));
        const response = yield client.checkHealth();
        const health = response.getModel();
        expect(health.status).toEqual('UP');
    }));
    it('createExperiment', () => __awaiter(void 0, void 0, void 0, function* () {
        httpRequestMock.mockReturnValueOnce(fixtures.asResponse('create-experiment-0.json'));
        const response = yield client.createExperiment(new query_1.Query({}));
        const experiment = response.getModel();
        expect(typeof experiment.end).toEqual('bigint');
        expect(typeof experiment.start).toEqual('bigint');
        expect(typeof experiment.nbEvents).toEqual('number');
    }));
    it('deleteExperiment', () => __awaiter(void 0, void 0, void 0, function* () {
        httpRequestMock.mockReturnValueOnce(fixtures.asResponse('delete-experiment-0.json'));
        const response = yield client.deleteExperiment('not-relevant');
        const experiment = response.getModel();
        expect(typeof experiment.end).toEqual('bigint');
        expect(typeof experiment.start).toEqual('bigint');
        expect(typeof experiment.nbEvents).toEqual('number');
    }));
    it('deleteTrace', () => __awaiter(void 0, void 0, void 0, function* () {
        httpRequestMock.mockReturnValueOnce(fixtures.asResponse('delete-trace-0.json'));
        const response = yield client.deleteTrace('not-relevant');
        const trace = response.getModel();
        expect(typeof trace.end).toEqual('bigint');
        expect(typeof trace.start).toEqual('bigint');
        expect(typeof trace.nbEvents).toEqual('number');
    }));
    it('experimentOutputs', () => __awaiter(void 0, void 0, void 0, function* () {
        httpRequestMock.mockReturnValueOnce(fixtures.asResponse('experiment-outputs-0.json'));
        const response = yield client.experimentOutputs('not-relevant');
        const outputs = response.getModel();
        expect(outputs).toHaveLength(4);
    }));
    it('fetchAnnotationsCategories', () => __awaiter(void 0, void 0, void 0, function* () {
        httpRequestMock.mockReturnValueOnce(fixtures.asResponse('fetch-annotation-categories-0.json'));
        const response = yield client.fetchAnnotationsCategories('not-relevant', 'not-relevant');
        const categories = response.getModel();
        expect(categories.model.annotationCategories[0]).toEqual('Annotation category');
    }));
    it('fetchAnnotations', () => __awaiter(void 0, void 0, void 0, function* () {
        httpRequestMock.mockReturnValueOnce(fixtures.asResponse('fetch-annotations-0.json'));
        const response = yield client.fetchAnnotations('not-relevant', 'not-relevant', new query_1.Query({}));
        const genericResponse = response.getModel();
        const annotations = genericResponse.model.annotations['Annotation category'];
        expect(annotations).toHaveLength(1);
        for (const annotation of annotations) {
            expect(typeof annotation.time).toEqual('bigint');
            expect(typeof annotation.entryId).toEqual('number');
            expect(typeof annotation.time).toEqual('bigint');
        }
    }));
    it('fetchExperiment', () => __awaiter(void 0, void 0, void 0, function* () {
        httpRequestMock.mockReturnValueOnce(fixtures.asResponse('fetch-experiment-0.json'));
        const response = yield client.fetchExperiment('not-relevant');
        const experiment = response.getModel();
        expect(typeof experiment.end).toEqual('bigint');
        expect(typeof experiment.nbEvents).toEqual('number');
        expect(typeof experiment.start).toEqual('bigint');
        expect(experiment.traces).toHaveLength(1);
        for (const trace of experiment.traces) {
            expect(typeof trace.end).toEqual('bigint');
            expect(typeof trace.nbEvents).toEqual('number');
            expect(typeof trace.start).toEqual('bigint');
        }
    }));
    it('fetchExperiments', () => __awaiter(void 0, void 0, void 0, function* () {
        httpRequestMock.mockReturnValueOnce(fixtures.asResponse('fetch-experiments-0.json'));
        const response = yield client.fetchExperiments();
        const experiments = response.getModel();
        expect(experiments).toHaveLength(1);
        for (const experiment of experiments) {
            expect(typeof experiment.end).toEqual('bigint');
            expect(typeof experiment.nbEvents).toEqual('number');
            expect(typeof experiment.start).toEqual('bigint');
        }
    }));
    it('fetchMarkerSets', () => __awaiter(void 0, void 0, void 0, function* () {
        httpRequestMock.mockReturnValueOnce(fixtures.asResponse('fetch-marker-sets-0.json'));
        const response = yield client.fetchMarkerSets('not-relevant');
        const genericResponse = response.getModel();
        const markerSets = genericResponse.model;
        expect(markerSets).toHaveLength(1);
    }));
    it('fetchStyles', () => __awaiter(void 0, void 0, void 0, function* () {
        httpRequestMock.mockReturnValueOnce(fixtures.asResponse('fetch-styles-0.json'));
        const response = yield client.fetchStyles('not-relevant', 'not-relevant', new query_1.Query({}));
        const genericResponse = response.getModel();
        const testStyle = genericResponse.model.styles['Style key'];
        expect(typeof testStyle.values.height).toEqual('number');
        expect(typeof testStyle.values.opacity).toEqual('number');
    }));
    it('fetchTableColumns', () => __awaiter(void 0, void 0, void 0, function* () {
        httpRequestMock.mockReturnValueOnce(fixtures.asResponse('fetch-table-columns-0.json'));
        const response = yield client.fetchTableColumns('not-relevant', 'not-relevant', new query_1.Query({}));
        const genericResponse = response.getModel();
        const tableColumns = genericResponse.model;
        expect(tableColumns).toHaveLength(3);
        for (const tableColumn of tableColumns) {
            expect(typeof tableColumn.id).toEqual('number');
        }
    }));
    it('fetchTableLines', () => __awaiter(void 0, void 0, void 0, function* () {
        httpRequestMock.mockReturnValueOnce(fixtures.asResponse('fetch-table-lines-0.json'));
        const response = yield client.fetchTableLines('not-relevant', 'not-relevant', new query_1.Query({}));
        const genericResponse = response.getModel();
        const model = genericResponse.model;
        expect(typeof model.size).toEqual('number');
        expect(typeof model.lowIndex).toEqual('number');
        expect(model.lines).toHaveLength(2);
        for (const line of model.lines) {
            expect(typeof line.index).toEqual('number');
        }
    }));
    it('fetchTimeGraphArrows', () => __awaiter(void 0, void 0, void 0, function* () {
        httpRequestMock.mockReturnValueOnce(fixtures.asResponse('fetch-timegraph-arrows-0.json'));
        const response = yield client.fetchTimeGraphArrows('not-relevant', 'not-relevant', new query_1.Query({}));
        const genericResponse = response.getModel();
        const arrows = genericResponse.model;
        expect(arrows).toHaveLength(1);
        for (const arrow of arrows) {
            expect(typeof arrow.end).toEqual('bigint');
            expect(typeof arrow.sourceId).toEqual('number');
            expect(typeof arrow.start).toEqual('bigint');
            expect(typeof arrow.targetId).toEqual('number');
        }
    }));
    it('fetchTimeGraphStates', () => __awaiter(void 0, void 0, void 0, function* () {
        httpRequestMock.mockReturnValueOnce(fixtures.asResponse('fetch-timegraph-states-0.json'));
        const response = yield client.fetchTimeGraphStates('not-relevant', 'not-relevant', new query_1.Query({}));
        const genericResponse = response.getModel();
        const rows = genericResponse.model.rows;
        expect(rows).toHaveLength(1);
        for (const row of rows) {
            expect(typeof row.entryId).toEqual('number');
            for (const state of row.states) {
                expect(typeof state.end).toEqual('bigint');
                expect(typeof state.start).toEqual('bigint');
                if (state.tags !== undefined) {
                    expect(typeof state.tags).toEqual('number');
                }
            }
        }
    }));
    it('fetchTimeGraphTooltip', () => __awaiter(void 0, void 0, void 0, function* () {
        httpRequestMock.mockReturnValueOnce(fixtures.asResponse('fetch-timegraph-tooltip-0.json'));
        const response = yield client.fetchTimeGraphTooltip('not-relevant', 'not-relevant', new query_1.Query({}));
        const genericResponse = response.getModel();
        const tooltips = genericResponse.model;
        expect(tooltips.key).toEqual('value');
    }));
    it('fetchTimeGraphTree', () => __awaiter(void 0, void 0, void 0, function* () {
        httpRequestMock.mockReturnValueOnce(fixtures.asResponse('fetch-timegraph-tree-0.json'));
        const response = yield client.fetchTimeGraphTree('not-relevant', 'not-relevant', new query_1.Query({}));
        const genericResponse = response.getModel();
        const model = genericResponse.model;
        expect(model.entries).toHaveLength(1);
        expect(model.headers).toHaveLength(0);
        for (const entry of model.entries) {
            expect(typeof entry.end).toEqual('bigint');
            expect(typeof entry.id).toEqual('number');
            expect(typeof entry.start).toEqual('bigint');
        }
    }));
    it('fetchXY', () => __awaiter(void 0, void 0, void 0, function* () {
        httpRequestMock.mockReturnValueOnce(fixtures.asResponse('fetch-xy-0.json'));
        // To throw or not to throw?
        // The `fetch-xy-0.json` fixture contains values too big for JS `number`
        // type, but the current implementation lossly converts those.
        // return expect(client.fetchXY('not-relevant', 'not-relevant', new Query({}))).rejects.toBe(Error);
        const response = yield client.fetchXY('not-relevant', 'not-relevant', new query_1.Query({}));
        const genericResponse = response.getModel();
        const xy = genericResponse.model;
        expect(xy.series).toHaveLength(1);
        for (const serie of xy.series) {
            expect(typeof serie.seriesId).toEqual('number');
            expect(serie.xValues).toHaveLength(3);
            expect(serie.yValues).toHaveLength(3);
            for (const xValue of serie.xValues) {
                expect(typeof xValue).toEqual('number');
            }
            for (const yValue of serie.yValues) {
                expect(typeof yValue).toEqual('number');
            }
        }
    }));
    it('fetchXYTree', () => __awaiter(void 0, void 0, void 0, function* () {
        httpRequestMock.mockReturnValueOnce(fixtures.asResponse('fetch-xy-tree-0.json'));
        const response = yield client.fetchXYTree('not-relevant', 'not-relevant', new query_1.Query({}));
        const genericResponse = response.getModel();
        const model = genericResponse.model;
        expect(model.entries).toHaveLength(1);
        expect(model.headers).toHaveLength(4);
        for (const entry of model.entries) {
            expect(typeof entry.id).toEqual('number');
        }
    }));
    it('openTrace', () => __awaiter(void 0, void 0, void 0, function* () {
        httpRequestMock.mockReturnValueOnce(fixtures.asResponse('open-trace-0.json'));
        const response = yield client.openTrace(new query_1.Query({}));
        const trace = response.getModel();
        expect(typeof trace.end).toEqual('bigint');
        expect(typeof trace.nbEvents).toEqual('number');
        expect(typeof trace.start).toEqual('bigint');
    }));
});
//# sourceMappingURL=tsp-client.test.js.map