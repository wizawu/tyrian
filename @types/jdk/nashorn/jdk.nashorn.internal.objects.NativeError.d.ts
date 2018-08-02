declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace objects {
class NativeError extends jdk.nashorn.internal.runtime.ScriptObject {
    public instMessage: java.lang.Object
    public nashornException: java.lang.Object
    public getClassName(): string
    public static constructor(arg0: boolean, arg1: java.lang.Object, arg2: java.lang.Object): jdk.nashorn.internal.objects.NativeError
    public static captureStackTrace(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
    public static dumpStack(arg0: java.lang.Object): java.lang.Object
    public static printStackTrace(arg0: java.lang.Object): java.lang.Object
    public static getStackTrace(arg0: java.lang.Object): java.lang.Object
    public static getLineNumber(arg0: java.lang.Object): java.lang.Object
    public static setLineNumber(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
    public static getColumnNumber(arg0: java.lang.Object): java.lang.Object
    public static setColumnNumber(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
    public static getFileName(arg0: java.lang.Object): java.lang.Object
    public static setFileName(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
    public static getStack(arg0: java.lang.Object): java.lang.Object
    public static setStack(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
    public static toString(arg0: java.lang.Object): java.lang.Object
    public static $clinit$(): void
    public G$instMessage(): java.lang.Object
    public S$instMessage(arg0: java.lang.Object): void
    public G$nashornException(): java.lang.Object
    public S$nashornException(arg0: java.lang.Object): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}