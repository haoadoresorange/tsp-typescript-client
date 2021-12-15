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
const url_1 = require("url");
const rest_client_1 = require("./rest-client");
describe('RestClient', () => {
    it('RestClient.encodeURLParameters', () => __awaiter(void 0, void 0, void 0, function* () {
        const parameters = new Map();
        parameters.set('a b c', 'value 1');
        parameters.set('d', 'value 2');
        const query = rest_client_1.RestClient['encodeURLParameters'](parameters);
        const parsed = new url_1.URLSearchParams(query);
        expect(parsed.get('a b c')).toEqual('value 1');
        expect(parsed.get('d')).toEqual('value 2');
    }));
});
//# sourceMappingURL=rest-client.test.js.map