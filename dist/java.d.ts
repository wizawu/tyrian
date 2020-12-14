/**
 * Show classes and members
 */
export declare function javap(classPath: string[], classList: string[]): {
    [key: string]: string;
};
/**
 * Show classes and members from a text file
 */
export declare function parseList(classPath: string[], file: string): {
    [key: string]: string;
};
/**
 * Show classes and members from a JAR file
 */
export declare function parseJar(classPath: string[], file: string): {
    [key: string]: string;
};
