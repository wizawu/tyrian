declare namespace java {
    namespace util {
        namespace logging {
            interface Filter {
                isLoggable(arg0: java.util.logging.LogRecord): boolean
            }
            interface Filter$$Lambda {
                (arg0: java.util.logging.LogRecord): boolean
            }
        }
    }
}