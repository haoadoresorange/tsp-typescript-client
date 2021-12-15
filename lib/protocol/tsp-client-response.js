"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TspClientResponse = void 0;
/**
 * Trace Server Protocol response.
 * The response includes the response model from the server if available,
 * the status code and message of the HTTP response, and the plain text attached to this response.
 */
class TspClientResponse {
    /**
     * Constructor
     * @param text Plain text of the response from the server
     * @param statusCode Status code from the HTTP response
     * @param statusMessage Status message from the HTTP response
     * @param responseModel Optional parsed value from `text` (usually from JSON).
     */
    constructor(text, statusCode, statusMessage, responseModel) {
        this.text = text;
        this.statusCode = statusCode;
        this.statusMessage = statusMessage;
        this.responseModel = responseModel;
    }
    /**
     * Get the model from the server, or undefined
     */
    getModel() {
        return this.responseModel;
    }
    /**
     * Get the model from the server, or throw custom Error
     */
    tryGetModel(cb) {
        if (!this.isOk())
            return cb(this.text, this.statusCode);
        if (!this.responseModel)
            return cb(`Response model is ${this.responseModel}`);
        return this.responseModel;
    }
    /**
     * Get the HTTP status code
     */
    getStatusCode() {
        return this.statusCode;
    }
    /**
     * Get the HTTP status message
     */
    getStatusMessage() {
        return this.statusMessage;
    }
    /**
     * Get the plain text of the response from the server
     */
    getText() {
        return this.text;
    }
    /**
     * Check if the status code is 200
     */
    isOk() {
        // TODO Use a constant
        return this.statusCode === 200;
    }
}
exports.TspClientResponse = TspClientResponse;
//# sourceMappingURL=tsp-client-response.js.map