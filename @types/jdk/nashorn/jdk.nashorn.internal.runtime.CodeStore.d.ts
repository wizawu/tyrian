declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                abstract class CodeStore implements jdk.nashorn.internal.runtime.logging.Loggable {
                    public static readonly NASHORN_PROVIDE_CODE_STORE: string
                    protected constructor()
                    public initLogger(arg0: jdk.nashorn.internal.runtime.Context): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public getLogger(): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public static newCodeStore(arg0: jdk.nashorn.internal.runtime.Context): jdk.nashorn.internal.runtime.CodeStore
                    public store(arg0: java.lang.String | string, arg1: jdk.nashorn.internal.runtime.Source, arg2: java.lang.String | string, arg3: java.util.Map<java.lang.String, byte[]>, arg4: java.util.Map<java.lang.Integer, jdk.nashorn.internal.runtime.FunctionInitializer>, arg5: java.lang.Object[], arg6: int): jdk.nashorn.internal.runtime.StoredScript
                    public abstract store(arg0: java.lang.String | string, arg1: jdk.nashorn.internal.runtime.Source, arg2: jdk.nashorn.internal.runtime.StoredScript): jdk.nashorn.internal.runtime.StoredScript
                    public abstract load(arg0: jdk.nashorn.internal.runtime.Source, arg1: java.lang.String | string): jdk.nashorn.internal.runtime.StoredScript
                    public storedScriptFor(arg0: jdk.nashorn.internal.runtime.Source, arg1: java.lang.String | string, arg2: java.util.Map<java.lang.String, byte[]>, arg3: java.util.Map<java.lang.Integer, jdk.nashorn.internal.runtime.FunctionInitializer>, arg4: java.lang.Object[], arg5: int): jdk.nashorn.internal.runtime.StoredScript
                    public static getCacheKey(arg0: java.lang.Object, arg1: jdk.nashorn.internal.codegen.types.Type[]): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}