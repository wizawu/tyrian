declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                class ECMAException extends jdk.nashorn.api.scripting.NashornException {
                    public static CREATE: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static THROWN: jdk.nashorn.internal.codegen.CompilerConstants$FieldAccess
                    public thrown: java.lang.Object
                    public constructor(arg0: java.lang.Object, arg1: java.lang.Throwable)
                    public static create(arg0: java.lang.Object, arg1: java.lang.String | string, arg2: int, arg3: int): jdk.nashorn.internal.runtime.ECMAException
                    public getThrown(): java.lang.Object
                    public toString(): string
                    public static getException(arg0: jdk.nashorn.internal.runtime.ScriptObject): java.lang.Object
                    public static printStackTrace(arg0: jdk.nashorn.internal.runtime.ScriptObject): java.lang.Object
                    public static getLineNumber(arg0: jdk.nashorn.internal.runtime.ScriptObject): java.lang.Object
                    public static getColumnNumber(arg0: jdk.nashorn.internal.runtime.ScriptObject): java.lang.Object
                    public static getFileName(arg0: jdk.nashorn.internal.runtime.ScriptObject): java.lang.Object
                    public static safeToString(arg0: jdk.nashorn.internal.runtime.ScriptObject): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}