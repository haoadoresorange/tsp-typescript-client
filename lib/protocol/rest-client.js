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
exports.RestClient = void 0;
const node_fetch_1 = require("node-fetch");
const tsp_client_response_1 = require("./tsp-client-response");
const when_json_met_bigint_1 = require("when-json-met-bigint");
/**
 * Rest client helper to make request.
 * The request response status code indicates if the request is successful.
 * The json object in the response may be undefined when an error occurs.
 */
class RestClient {
    /**
     * Perform GET
     * @template T is the expected type of the json object returned by this request
     * @param url URL to query without query parameters
     * @param parameters Query parameters. Mapped keys and values are used to build the final URL
     */
    static get(url, parameters, schema) {
        return __awaiter(this, void 0, void 0, function* () {
            let getUrl = url;
            if (parameters) {
                const urlParameters = this.encodeURLParameters(parameters);
                getUrl = getUrl.concat(urlParameters);
            }
            return this.performRequest('get', getUrl, undefined, schema);
        });
    }
    /**
     * Perform POST
     * @template T is the expected type of the json object returned by this request
     * @param url URL to query
     * @param body Query object as defined by the Query interface
     */
    static post(url, body, schema) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.performRequest('post', url, body, schema);
        });
    }
    /**
     * Perform PUT
     * @template T is the expected type of the json object returned by this request
     * @param url URL to query
     * @param body Query object as defined by the Query interface
     */
    static put(url, body, schema) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.performRequest('put', url, body, schema);
        });
    }
    /**
     * Perform DELETE
     * @template T is the expected type of the json object returned by this request
     * @param url URL to query without query parameters
     * @param parameters Query parameters. Mapped keys and values are used to build the final URL
     */
    static delete(url, parameters, schema) {
        return __awaiter(this, void 0, void 0, function* () {
            let deleteUrl = url;
            if (parameters) {
                const urlParameters = this.encodeURLParameters(parameters);
                deleteUrl = deleteUrl.concat(urlParameters);
            }
            return this.performRequest('delete', deleteUrl, undefined, schema);
        });
    }
    static performRequest(method, url, body, schema) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpRequest({
                url,
                method,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: when_json_met_bigint_1.JSONB.stringify(body)
            });
            return new tsp_client_response_1.TspClientResponse(response.text, response.status, response.statusText, when_json_met_bigint_1.JSONB.parse(response.text, null, schema));
        });
    }
    static httpRequest(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { url, method, body, headers } = req;
            const response = yield node_fetch_1.default(url, { method, headers, body });
            const text = yield response.text();
            return {
                text,
                status: response.status,
                statusText: response.statusText,
            };
        });
    }
    static encodeURLParameters(parameters) {
        if (parameters.size) {
            return '?' + Array.from(parameters, ([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&');
        }
        return '';
    }
}
exports.RestClient = RestClient;
//# sourceMappingURL=rest-client.js.map