import type { HttpResponse } from './rest-client';
export declare class FixtureSet {
    /**
     * Key: fixture file name.
     * Value: fixture file path.
     */
    protected fixtures: Map<string, string>;
    static fromFolder(...paths: string[]): Promise<FixtureSet>;
    /**
     * Set of unused fixtures (file names).
     */
    protected unused: Set<string>;
    protected constructor(
    /**
     * Key: fixture file name.
     * Value: fixture file path.
     */
    fixtures: Map<string, string>);
    asResponse(fixtureName: string, options?: Partial<HttpResponse>): Promise<HttpResponse>;
    assertUsedAllFixtures(): void;
    protected readFixture(fixtureName: string): Promise<string>;
}
//# sourceMappingURL=test-utils.d.ts.map