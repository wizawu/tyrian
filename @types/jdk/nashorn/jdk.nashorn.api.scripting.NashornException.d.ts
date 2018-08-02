declare namespace jdk {
    namespace nashorn {
        namespace api {
            namespace scripting {
abstract class NashornException extends java.lang.RuntimeException {
    protected constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: int)
    protected constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable, arg2: java.lang.String | string, arg3: int, arg4: int)
    protected constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
    public getFileName(): string
    public setFileName(arg0: java.lang.String | string): void
    public getLineNumber(): int
    public setLineNumber(arg0: int): void
    public getColumnNumber(): int
    public setColumnNumber(arg0: int): void
    public static getScriptFrames(arg0: java.lang.Throwable): java.lang.StackTraceElement[]
    public static getScriptStackString(arg0: java.lang.Throwable): string
    protected getThrown(): java.lang.Object
    protected initEcmaError(arg0: jdk.nashorn.internal.runtime.ScriptObject): jdk.nashorn.api.scripting.NashornException
    public getEcmaError(): java.lang.Object
    public setEcmaError(arg0: java.lang.Object): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}