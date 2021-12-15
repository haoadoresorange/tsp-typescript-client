"use strict";
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
exports.TspClient = void 0;
const responses_1 = require("../models/response/responses");
const xy_1 = require("../models/xy");
const timegraph_1 = require("../models/timegraph");
const annotation_1 = require("../models/annotation");
const table_1 = require("../models/table");
const trace_1 = require("../models/trace");
const rest_client_1 = require("./rest-client");
const experiment_1 = require("../models/experiment");
const output_descriptor_1 = require("../models/output-descriptor");
const entry_1 = require("../models/entry");
/**
 * Trace Server Protocol client
 */
class TspClient {
    /**
     * Constructor
     * @param baseUrl Base URL of the server (ex. https://localhost:8080/tsp/api)
     */
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    /**
     * Fetch all available traces on the server
     * @returns List of Trace
     */
    fetchTraces() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.baseUrl + '/traces';
            return rest_client_1.RestClient.get(url, undefined, [trace_1.TraceSchema]);
        });
    }
    /**
     * Fetch a specific trace information
     * @param traceUUID Trace UUID to fetch
     */
    fetchTrace(traceUUID) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.baseUrl + '/traces/' + traceUUID;
            return rest_client_1.RestClient.get(url, undefined, trace_1.TraceSchema);
        });
    }
    /**
     * Open a trace on the server
     * @param parameters Query object
     * @returns The opened trace
     */
    openTrace(parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.baseUrl + '/traces';
            return rest_client_1.RestClient.post(url, parameters, trace_1.TraceSchema);
        });
    }
    /**
     * Delete a trace on the server
     * @param traceUUID Trace UUID to delete
     * @param deleteTrace Also delete the trace from disk
     * @param removeCache Remove all cache for this trace
     * @returns The deleted trace
     */
    deleteTrace(traceUUID, deleteTrace, removeCache) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.baseUrl + '/traces/' + traceUUID;
            const deleteParameters = new Map();
            if (deleteTrace) {
                deleteParameters.set('deleteTrace', deleteTrace.toString());
            }
            if (removeCache) {
                deleteParameters.set('removeCache', removeCache.toString());
            }
            return rest_client_1.RestClient.delete(url, deleteParameters, trace_1.TraceSchema);
        });
    }
    /**
     * Fetch all available experiments on the server
     * @returns List of Experiment
     */
    fetchExperiments() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.baseUrl + '/experiments';
            return rest_client_1.RestClient.get(url, undefined, [experiment_1.ExperimentSchema]);
        });
    }
    /**
     * Fetch a specific experiment information
     * @param expUUID Experiment UUID to fetch
     * @returns The experiment
     */
    fetchExperiment(expUUID) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.baseUrl + '/experiments/' + expUUID;
            return rest_client_1.RestClient.get(url, undefined, experiment_1.ExperimentSchema);
        });
    }
    /**
     * Create an experiment on the server
     * @param parameters Query object
     * @returns The created experiment
     */
    createExperiment(parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.baseUrl + '/experiments';
            return rest_client_1.RestClient.post(url, parameters, experiment_1.ExperimentSchema);
        });
    }
    /**
     * Update an experiment
     * @param expUUID Experiment UUID to update
     * @param parameters Query object
     * @returns The updated experiment
     */
    updateExperiment(expUUID, parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.baseUrl + '/experiments/' + expUUID;
            return rest_client_1.RestClient.put(url, parameters, experiment_1.ExperimentSchema);
        });
    }
    /**
     * Delete an experiment on the server
     * @param expUUID Experiment UUID to delete
     * @returns The deleted experiment
     */
    deleteExperiment(expUUID) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.baseUrl + '/experiments/' + expUUID;
            return rest_client_1.RestClient.delete(url, undefined, experiment_1.ExperimentSchema);
        });
    }
    /**
     * List all the outputs associated to this experiment
     * @param expUUID Experiment UUID
     * @returns List of OutputDescriptor
     */
    experimentOutputs(expUUID) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.baseUrl + '/experiments/' + expUUID + '/outputs';
            return rest_client_1.RestClient.get(url, undefined, [output_descriptor_1.OutputDescriptorSchema]);
        });
    }
    /**
     * Fetch XY tree
     * @param expUUID Experiment UUID
     * @param outputID Output ID
     * @param parameters Query object
     * @returns Generic entry response with entries
     */
    fetchXYTree(expUUID, outputID, parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.baseUrl + '/experiments/' + expUUID + '/outputs/XY/' + outputID + '/tree';
            return rest_client_1.RestClient.post(url, parameters, responses_1.GenericResponseSchema(entry_1.EntryModelSchema(entry_1.EntrySchema)));
        });
    }
    /**
     * Fetch XY. model extends XYModel
     * @param expUUID Experiment UUID
     * @param outputID Output ID
     * @param parameters Query object
     * @returns XY model response with the model
     */
    fetchXY(expUUID, outputID, parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.baseUrl + '/experiments/' + expUUID + '/outputs/XY/' + outputID + '/xy';
            return rest_client_1.RestClient.post(url, parameters, responses_1.GenericResponseSchema(xy_1.XYModelSchema));
        });
    }
    /**
     * Fetch XY tooltip
     * @param expUUID Experiment UUID
     * @param outputID Output ID
     * @param xValue X value
     * @param yValue Optional Y value
     * @param seriesID Optional series ID
     * @returns Map of key=name of the property and value=string value associated
     */
    fetchXYToolTip(expUUID, outputID, xValue, yValue, seriesID) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.baseUrl + '/experiments/' + expUUID + '/outputs/XY/' + outputID + '/tooltip';
            const parametersMap = new Map();
            parametersMap.set('xValue', xValue.toString());
            if (yValue) {
                parametersMap.set('yValue', yValue.toString());
            }
            if (seriesID) {
                parametersMap.set('seriesId', seriesID);
            }
            return rest_client_1.RestClient.get(url, parametersMap);
        });
    }
    /**
     * Fetch Time Graph tree, Model extends TimeGraphEntry
     * @param expUUID Experiment UUID
     * @param outputID Output ID
     * @param parameters Query object
     * @returns Time graph entry response with entries of type TimeGraphEntry
     */
    fetchTimeGraphTree(expUUID, outputID, parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.baseUrl + '/experiments/' + expUUID + '/outputs/timeGraph/' + outputID + '/tree';
            return rest_client_1.RestClient.post(url, parameters, responses_1.GenericResponseSchema(entry_1.EntryModelSchema(timegraph_1.TimeGraphEntrySchema)));
        });
    }
    /**
     * Fetch Time Graph states. Model extends TimeGraphModel
     * @param expUUID Experiment UUID
     * @param outputID Output ID
     * @param parameters Query object
     * @returns Generic response with the model
     */
    fetchTimeGraphStates(expUUID, outputID, parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.baseUrl + '/experiments/' + expUUID + '/outputs/timeGraph/' + outputID + '/states';
            return rest_client_1.RestClient.post(url, parameters, responses_1.GenericResponseSchema(timegraph_1.TimeGraphModelSchema));
        });
    }
    /**
     * Fetch Time Graph arrows. Model extends TimeGraphArrow
     * @param expUUID Experiment UUID
     * @param outputID Output ID
     * @param parameters Query object
     * @returns Generic response with the model
     */
    fetchTimeGraphArrows(expUUID, outputID, parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.baseUrl + '/experiments/' + expUUID + '/outputs/timeGraph/' + outputID + '/arrows';
            return rest_client_1.RestClient.post(url, parameters, responses_1.GenericResponseSchema([timegraph_1.TimeGraphArrowSchema]));
        });
    }
    /**
     * Fetch marker sets.
     * @returns Generic response with the model
     */
    fetchMarkerSets(expUUID) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.baseUrl + '/experiments/' + expUUID + '/outputs/markerSets';
            return rest_client_1.RestClient.get(url, undefined);
        });
    }
    /**
     * Fetch annotations categories.
     * @param expUUID Experiment UUID
     * @param outputID Output ID
     * @param markerSetId Marker Set ID
     * @returns Generic response with the model
     */
    fetchAnnotationsCategories(expUUID, outputID, markerSetId) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.baseUrl + '/experiments/' + expUUID + '/outputs/' + outputID + '/annotations';
            let parametersMap = undefined;
            if (markerSetId) {
                parametersMap = new Map();
                parametersMap.set('markerSetId', markerSetId);
            }
            return rest_client_1.RestClient.get(url, parametersMap);
        });
    }
    /**
     * Fetch annotations.
     * @param expUUID Experiment UUID
     * @param outputID Output ID
     * @param parameters Query object
     * @returns Generic response with the model
     */
    fetchAnnotations(expUUID, outputID, parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.baseUrl + '/experiments/' + expUUID + '/outputs/' + outputID + '/annotations';
            return rest_client_1.RestClient.post(url, parameters, responses_1.GenericResponseSchema(annotation_1.AnnotationSchema));
        });
    }
    /**
     * Fetch tooltip for a Time Graph element.
     * @param expUUID Experiment UUID
     * @param outputID Output ID
     * @param parameters Query object
     * @returns Map of key=name of the property and value=string value associated
     */
    fetchTimeGraphTooltip(expUUID, outputID, parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.baseUrl + '/experiments/' + expUUID + '/outputs/timeGraph/' + outputID + '/tooltip';
            return rest_client_1.RestClient.post(url, parameters);
        });
    }
    /**
     * Fetch Table columns
     * @param expUUID Experiment UUID
     * @param outputID Output ID
     * @param parameters Query object
     * @returns Generic entry response with columns headers as model
     */
    fetchTableColumns(expUUID, outputID, parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.baseUrl + '/experiments/' + expUUID + '/outputs/table/' + outputID + '/columns';
            return rest_client_1.RestClient.post(url, parameters, responses_1.GenericResponseSchema([table_1.ColumnHeaderEntrySchema]));
        });
    }
    /**
     * Fetch Table lines
     * @param expUUID Experiment UUID
     * @param outputID Output ID
     * @param parameters Query object
     * @returns Generic response with the model
     */
    fetchTableLines(expUUID, outputID, parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.baseUrl + '/experiments/' + expUUID + '/outputs/table/' + outputID + '/lines';
            return rest_client_1.RestClient.post(url, parameters, responses_1.GenericResponseSchema(table_1.TableModelSchema));
        });
    }
    /**
     * Fetch output styles
     * @param expUUID Experiment UUID
     * @param outputID Output ID
     * @param parameters Query object
     * @returns Generic response with the model
     */
    fetchStyles(expUUID, outputID, parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.baseUrl + '/experiments/' + expUUID + '/outputs/' + outputID + '/style';
            return rest_client_1.RestClient.post(url, parameters);
        });
    }
    /**
     * Check the health status of the server
     * @returns The Health Status
     */
    checkHealth() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.baseUrl + '/health';
            return rest_client_1.RestClient.get(url);
        });
    }
}
exports.TspClient = TspClient;
//# sourceMappingURL=tsp-client.js.map