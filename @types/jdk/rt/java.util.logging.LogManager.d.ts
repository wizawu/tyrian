declare namespace java {
    namespace util {
        namespace logging {
            class LogManager {
                public static readonly LOGGING_MXBEAN_NAME: string
                protected constructor()
                public static getLogManager(): java.util.logging.LogManager
                public addPropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
                public removePropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
                public addLogger(arg0: java.util.logging.Logger): boolean
                public getLogger(arg0: java.lang.String | string): java.util.logging.Logger
                public getLoggerNames(): java.util.Enumeration<java.lang.String>
                public readConfiguration(): void
                public reset(): void
                public readConfiguration(arg0: java.io.InputStream | java.io.InputStream$$Lambda): void
                public getProperty(arg0: java.lang.String | string): string
                public checkAccess(): void
                public static getLoggingMXBean(): java.util.logging.LoggingMXBean
                public static class: java.lang.Class<any>
            }
        }
    }
}