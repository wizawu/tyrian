export declare function listFilesByExt(dirname: string, ext: string): string[];
export declare function readJsonObject(path: string): Record<string, any>;
export declare function realPath(command: string): string;
export declare function javap(classPaths: string[], classList: string[]): string | null;
export declare function locateJdk(runtime: string): [Runtime, string];
