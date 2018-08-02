declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace objects {
                class NativeArguments extends jdk.nashorn.internal.runtime.ScriptObject {
                    public getClassName(): string
                    public getArgument(arg0: int): java.lang.Object
                    public setArgument(arg0: int, arg1: java.lang.Object): void
                    public delete(arg0: int, arg1: boolean): boolean
                    public delete(arg0: double, arg1: boolean): boolean
                    public delete(arg0: java.lang.Object, arg1: boolean): boolean
                    public defineOwnProperty(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: boolean): boolean
                    public static allocate(arg0: java.lang.Object[], arg1: jdk.nashorn.internal.runtime.ScriptFunction, arg2: int): jdk.nashorn.internal.runtime.ScriptObject
                    public static G$length(arg0: java.lang.Object): java.lang.Object
                    public static S$length(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public static G$callee(arg0: java.lang.Object): java.lang.Object
                    public static S$callee(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public getLength(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}