declare namespace java {
    namespace lang {
class Runtime {
    public static getRuntime(): java.lang.Runtime
    public exit(arg0: int): void
    public addShutdownHook(arg0: java.lang.Thread | java.lang.Thread$$Lambda): void
    public removeShutdownHook(arg0: java.lang.Thread | java.lang.Thread$$Lambda): boolean
    public halt(arg0: int): void
    public static runFinalizersOnExit(arg0: boolean): void
    public exec(arg0: java.lang.String | string): java.lang.Process
    public exec(arg0: java.lang.String | string, arg1: java.lang.String[]): java.lang.Process
    public exec(arg0: java.lang.String | string, arg1: java.lang.String[], arg2: java.io.File): java.lang.Process
    public exec(arg0: java.lang.String[]): java.lang.Process
    public exec(arg0: java.lang.String[], arg1: java.lang.String[]): java.lang.Process
    public exec(arg0: java.lang.String[], arg1: java.lang.String[], arg2: java.io.File): java.lang.Process
    public availableProcessors(): int
    public freeMemory(): long
    public totalMemory(): long
    public maxMemory(): long
    public gc(): void
    public runFinalization(): void
    public traceInstructions(arg0: boolean): void
    public traceMethodCalls(arg0: boolean): void
    public load(arg0: java.lang.String | string): void
    public loadLibrary(arg0: java.lang.String | string): void
    public getLocalizedInputStream(arg0: java.io.InputStream): java.io.InputStream
    public getLocalizedOutputStream(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): java.io.OutputStream
    public static class: java.lang.Class<any>
}

    }
}