declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                class GlobalConstants implements jdk.nashorn.internal.runtime.logging.Loggable {
                    public static readonly GLOBAL_ONLY: boolean
                    public constructor(arg0: jdk.nashorn.internal.runtime.logging.DebugLogger)
                    public getLogger(): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public initLogger(arg0: jdk.nashorn.internal.runtime.Context): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public invalidateAll(): void
                    public invalidateForever(): void
                    public static staticConstantGetter(arg0: java.lang.Object): java.lang.invoke.MethodHandle
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}