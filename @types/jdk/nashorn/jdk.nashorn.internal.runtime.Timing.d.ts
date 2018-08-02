declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                class Timing implements jdk.nashorn.internal.runtime.logging.Loggable {
                    public constructor(arg0: boolean)
                    public getLogInfo(): string
                    public getLogInfoLines(): java.lang.String[]
                    public accumulateTime(arg0: java.lang.String | string, arg1: long): void
                    public initLogger(arg0: jdk.nashorn.internal.runtime.Context): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public getLogger(): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public static toMillisPrint(arg0: long): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}