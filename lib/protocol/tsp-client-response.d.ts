/**
 * Trace Server Protocol response.
 * The response includes the response model from the server if available,
 * the status code and message of the HTTP response, and the plain text attached to this response.
 */
export declare class TspClientResponse<T> {
    private readonly text;
    private readonly statusCode;
    private readonly statusMessage;
    private readonly responseModel?;
    /**
     * Constructor
     * @param text Plain text of the response from the server
     * @param statusCode Status code from the HTTP response
     * @param statusMessage Status message from the HTTP response
     * @param responseModel Optional parsed value from `text` (usually from JSON).
     */
    constructor(text: string, statusCode: number, statusMessage: string, responseModel?: T | undefined);
    /**
     * Get the model from the server, or undefined
     */
    getModel(): T | undefined;
    /**
     * Get the model from the server, or throw custom Error
     */
    tryGetModel(cb: (msg: string, code?: number) => T): T;
    /**
     * Get the HTTP status code
     */
    getStatusCode(): number;
    /**
     * Get the HTTP status message
     */
    getStatusMessage(): string;
    /**
     * Get the plain text of the response from the server
     */
    getText(): string;
    /**
     * Check if the status code is 200
     */
    isOk(): boolean;
}
//# sourceMappingURL=tsp-client-response.d.ts.map