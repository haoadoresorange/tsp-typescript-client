import { Schema } from 'when-json-met-bigint';
import { OutputElementStyle } from './styles';
export declare enum Type {
    TREE = "TREE",
    CHART = "CHART"
}
export interface AnnotationCategoriesModel {
    annotationCategories: string[];
}
export declare const AnnotationSchema: Schema<AnnotationModel>;
/**
 * Model for annotation
 */
export interface Annotation {
    /**
     * Label of the annotation
     */
    label: string;
    /**
     * Time of the annotation
     */
    time: bigint;
    /**
     * Duration of the annotation
     */
    duration: bigint;
    /**
     * Entry Id of the annotation
     */
    entryId: number;
    /**
     * Type of the annotation
     */
    type: string;
    /**
     * Style of the annotation
     */
    style?: OutputElementStyle;
}
export interface AnnotationModel {
    annotations: {
        [category: string]: Annotation[];
    };
}
//# sourceMappingURL=annotation.d.ts.map