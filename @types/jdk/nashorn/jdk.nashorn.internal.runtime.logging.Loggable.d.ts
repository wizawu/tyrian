declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace logging {
                    interface Loggable {
                        initLogger(arg0: jdk.nashorn.internal.runtime.Context): jdk.nashorn.internal.runtime.logging.DebugLogger
                        getLogger(): jdk.nashorn.internal.runtime.logging.DebugLogger
                    }
                }
            }
        }
    }
}