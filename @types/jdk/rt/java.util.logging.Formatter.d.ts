declare namespace java {
    namespace util {
        namespace logging {
            abstract class Formatter {
                protected constructor()
                public format(arg0: java.util.logging.LogRecord): string
                public getHead(arg0: java.util.logging.Handler): string
                public getTail(arg0: java.util.logging.Handler): string
                public formatMessage(arg0: java.util.logging.LogRecord): string
                public static class: java.lang.Class<any>
            }
        }
    }
}