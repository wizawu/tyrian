declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
interface CodeInstaller {
    getContext(): jdk.nashorn.internal.runtime.Context
    install(arg0: java.lang.String | string, arg1: byte[]): java.lang.Class<any>
    initialize(arg0: java.util.Collection<java.lang.Class<any>>, arg1: jdk.nashorn.internal.runtime.Source, arg2: java.lang.Object[]): void
    verify(arg0: byte[]): void
    getUniqueScriptId(): long
    storeScript(arg0: java.lang.String | string, arg1: jdk.nashorn.internal.runtime.Source, arg2: java.lang.String | string, arg3: java.util.Map<java.lang.String, byte[]>, arg4: java.util.Map<java.lang.Integer, jdk.nashorn.internal.runtime.FunctionInitializer>, arg5: java.lang.Object[], arg6: int): void
    loadScript(arg0: jdk.nashorn.internal.runtime.Source, arg1: java.lang.String | string): jdk.nashorn.internal.runtime.StoredScript
    withNewLoader(): jdk.nashorn.internal.runtime.CodeInstaller
    isCompatibleWith(arg0: jdk.nashorn.internal.runtime.CodeInstaller): boolean
}

            }
        }
    }
}