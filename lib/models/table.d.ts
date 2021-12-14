import { Schema } from 'when-json-met-bigint';
export declare const ColumnHeaderEntrySchema: Schema;
/**
 * Column header
 */
export interface ColumnHeaderEntry {
    /**
     * Unique ID
     */
    id: number;
    /**
     * Displayed name for this column
     */
    name: string;
    /**
     * Description of the column
     */
    description: string;
    /**
     * Hint on the Type of data associated to the column
     */
    type: string;
}
export declare const CellSchema: Schema;
/**
 * Cell inside a table line
 */
export interface Cell {
    /**
     * Content of the cell, can use markdown for formatting
     */
    content: string;
    /**
     * Tag associated to the cell, used when the cell pass a filter
     */
    tags?: number;
}
export declare const LineSchema: {
    cells: {}[];
    index: Schema;
    tags: Schema;
};
/**
 * Line of a table
 */
export interface Line {
    /**
     * Index of the line
     */
    index: number;
    /**
     * Array of cells that compose the line
     */
    cells: Cell[];
    /**
     * Tag associated to the line, used when the line pass a filter
     */
    tags?: number;
}
export declare const TableModelSchema: {
    columnIds: Schema[];
    lines: {
        cells: {}[];
        index: Schema;
        tags: Schema;
    }[];
    lowIndex: Schema;
    size: Schema;
};
/**
 * Model of a table
 */
export interface TableModel {
    /**
     * Index of the first returned line
     */
    lowIndex: number;
    /**
     * Number of lines
     */
    size: number;
    /**
     * Columns of the table represented by their respective Id
     */
    columnIds: number[];
    /**
     * Lines
     */
    lines: Line[];
}
//# sourceMappingURL=table.d.ts.map