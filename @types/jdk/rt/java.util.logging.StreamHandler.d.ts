declare namespace java {
    namespace util {
        namespace logging {
            class StreamHandler extends java.util.logging.Handler {
                public constructor()
                public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.util.logging.Formatter | java.util.logging.Formatter$$Lambda)
                protected setOutputStream(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public setEncoding(arg0: java.lang.String | string): void
                public publish(arg0: java.util.logging.LogRecord): void
                public isLoggable(arg0: java.util.logging.LogRecord): boolean
                public flush(): void
                public close(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}