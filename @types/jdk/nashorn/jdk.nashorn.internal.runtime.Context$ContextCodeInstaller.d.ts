declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
class Context$ContextCodeInstaller implements jdk.nashorn.internal.runtime.CodeInstaller {
    public getContext(): jdk.nashorn.internal.runtime.Context
    public install(arg0: java.lang.String | string, arg1: byte[]): java.lang.Class<any>
    public initialize(arg0: java.util.Collection<java.lang.Class<any>>, arg1: jdk.nashorn.internal.runtime.Source, arg2: java.lang.Object[]): void
    public verify(arg0: byte[]): void
    public getUniqueScriptId(): long
    public storeScript(arg0: java.lang.String | string, arg1: jdk.nashorn.internal.runtime.Source, arg2: java.lang.String | string, arg3: java.util.Map<java.lang.String, byte[]>, arg4: java.util.Map<java.lang.Integer, jdk.nashorn.internal.runtime.FunctionInitializer>, arg5: java.lang.Object[], arg6: int): void
    public loadScript(arg0: jdk.nashorn.internal.runtime.Source, arg1: java.lang.String | string): jdk.nashorn.internal.runtime.StoredScript
    public withNewLoader(): jdk.nashorn.internal.runtime.CodeInstaller
    public isCompatibleWith(arg0: jdk.nashorn.internal.runtime.CodeInstaller): boolean
    public static class: java.lang.Class<any>
}

            }
        }
    }
}