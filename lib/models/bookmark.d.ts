import { Schema } from 'when-json-met-bigint';
export declare const BookmarkSchema: Schema<Bookmark>;
/**
 * Model for bookmark
 */
export interface Bookmark {
    /**
     * Unique Id of the bookmark
     */
    UUID: string;
    /**
     * Name of the bookmark
     */
    name: string;
    /**
     * Start time for the bookmark
     */
    startTime: bigint;
    /**
     * End time for the bookmark
     */
    endTime: bigint;
    /**
     * Type of the bookmark
     */
    type: string;
}
//# sourceMappingURL=bookmark.d.ts.map