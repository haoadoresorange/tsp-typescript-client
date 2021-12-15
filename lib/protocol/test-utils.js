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
exports.FixtureSet = void 0;
const fs = require("fs");
const path = require("path");
class FixtureSet {
    constructor(
    /**
     * Key: fixture file name.
     * Value: fixture file path.
     */
    fixtures) {
        this.fixtures = fixtures;
        this.unused = new Set(fixtures.keys());
    }
    static fromFolder(...paths) {
        return __awaiter(this, void 0, void 0, function* () {
            const folder = path.resolve(...paths);
            const files = yield fs.promises.readdir(folder);
            const fixtures = new Map();
            for (const file of files) {
                fixtures.set(file, path.resolve(folder, file));
            }
            return new this(fixtures);
        });
    }
    asResponse(fixtureName, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const { status = 200, statusText = 'Success' } = options;
            return {
                status,
                statusText,
                text: yield this.readFixture(fixtureName),
            };
        });
    }
    assertUsedAllFixtures() {
        if (this.unused.size > 0) {
            throw new Error(`Some fixtures were not used!\n${Array.from(this.unused, fixture => ` - ${fixture}`).join('\n')}`);
        }
    }
    readFixture(fixtureName) {
        return __awaiter(this, void 0, void 0, function* () {
            const fixturePath = this.fixtures.get(fixtureName);
            if (!fixturePath) {
                throw new Error(`no fixture named ${fixtureName}`);
            }
            const content = yield fs.promises.readFile(fixturePath, 'utf8');
            this.unused.delete(fixtureName);
            return content;
        });
    }
}
exports.FixtureSet = FixtureSet;
//# sourceMappingURL=test-utils.js.map