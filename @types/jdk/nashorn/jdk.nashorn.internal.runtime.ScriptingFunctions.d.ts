declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                class ScriptingFunctions {
                    public static READLINE: java.lang.invoke.MethodHandle
                    public static READFULLY: java.lang.invoke.MethodHandle
                    public static EXEC: java.lang.invoke.MethodHandle
                    public static EXEC_NAME: string
                    public static OUT_NAME: string
                    public static ERR_NAME: string
                    public static EXIT_NAME: string
                    public static THROW_ON_ERROR_NAME: string
                    public static ENV_NAME: string
                    public static PWD_NAME: string
                    public static readLine(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static readFully(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public static exec(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
                    public static tokenizeString(arg0: java.lang.String | string): java.util.List<java.lang.String>
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}