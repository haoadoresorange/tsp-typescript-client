import { TspClientResponse } from './tsp-client-response';
import { Schema } from "when-json-met-bigint";
export interface HttpRequest {
    method: string;
    url: string;
    body?: string;
    headers?: Record<string, string>;
}
export interface HttpResponse {
    text: string;
    status: number;
    statusText: string;
}
/**
 * Rest client helper to make request.
 * The request response status code indicates if the request is successful.
 * The json object in the response may be undefined when an error occurs.
 */
export declare class RestClient {
    static get<T>(url: string, parameters?: Map<string, string>): Promise<TspClientResponse<T>>;
    static get<T>(url: string, parameters: Map<string, string> | undefined, schema: Schema): Promise<TspClientResponse<T>>;
    static post<T>(url: string, body?: any): Promise<TspClientResponse<T>>;
    static post<T>(url: string, body: any, schema: Schema): Promise<TspClientResponse<T>>;
    static put<T>(url: string, body?: any): Promise<TspClientResponse<T>>;
    static put<T>(url: string, body: any, schema: Schema): Promise<TspClientResponse<T>>;
    static delete<T>(url: string, parameters?: Map<string, string>): Promise<TspClientResponse<T>>;
    static delete<T>(url: string, parameters: Map<string, string> | undefined, schema: Schema): Promise<TspClientResponse<T>>;
    protected static performRequest<T>(method: string, url: string, body?: any, schema?: Schema): Promise<TspClientResponse<T>>;
    protected static httpRequest(req: HttpRequest): Promise<HttpResponse>;
    protected static encodeURLParameters(parameters: Map<string, string>): string;
}
//# sourceMappingURL=rest-client.d.ts.map