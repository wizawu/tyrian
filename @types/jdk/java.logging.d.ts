declare namespace java {
    namespace util {
        namespace logging {
            class ConsoleHandler extends java.util.logging.StreamHandler {
                public constructor()
                public publish(arg0: java.util.logging.LogRecord): void
                public close(): void
                public static class: java.lang.Class<any>
            }
            class ErrorManager {
                public static GENERIC_FAILURE: int
                public static WRITE_FAILURE: int
                public static FLUSH_FAILURE: int
                public static CLOSE_FAILURE: int
                public static OPEN_FAILURE: int
                public static FORMAT_FAILURE: int
                public constructor()
                public error(arg0: java.lang.String | string, arg1: java.lang.Exception, arg2: int): void
                public static class: java.lang.Class<any>
            }
            class FileHandler extends java.util.logging.StreamHandler {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: boolean)
                public constructor(arg0: java.lang.String | string, arg1: int, arg2: int)
                public constructor(arg0: java.lang.String | string, arg1: int, arg2: int, arg3: boolean)
                public publish(arg0: java.util.logging.LogRecord): void
                public close(): void
                public static class: java.lang.Class<any>
            }
            interface Filter {
                isLoggable(arg0: java.util.logging.LogRecord): boolean
            }
            interface Filter$$Lambda {
                (arg0: java.util.logging.LogRecord): boolean
            }
            abstract class Formatter {
                protected constructor()
                public format(arg0: java.util.logging.LogRecord): string
                public getHead(arg0: java.util.logging.Handler): string
                public getTail(arg0: java.util.logging.Handler): string
                public formatMessage(arg0: java.util.logging.LogRecord): string
                public static class: java.lang.Class<any>
            }
            abstract class Handler {
                protected constructor()
                public publish(arg0: java.util.logging.LogRecord): void
                public flush(): void
                public close(): void
                public setFormatter(arg0: java.util.logging.Formatter): void
                public getFormatter(): java.util.logging.Formatter
                public setEncoding(arg0: java.lang.String | string): void
                public getEncoding(): string
                public setFilter(arg0: java.util.logging.Filter | java.util.logging.Filter$$Lambda): void
                public getFilter(): java.util.logging.Filter
                public setErrorManager(arg0: java.util.logging.ErrorManager): void
                public getErrorManager(): java.util.logging.ErrorManager
                protected reportError(arg0: java.lang.String | string, arg1: java.lang.Exception, arg2: int): void
                public setLevel(arg0: java.util.logging.Level): void
                public getLevel(): java.util.logging.Level
                public isLoggable(arg0: java.util.logging.LogRecord): boolean
                public static class: java.lang.Class<any>
            }
            class Level implements java.io.Serializable {
                public static OFF: java.util.logging.Level
                public static SEVERE: java.util.logging.Level
                public static WARNING: java.util.logging.Level
                public static INFO: java.util.logging.Level
                public static CONFIG: java.util.logging.Level
                public static FINE: java.util.logging.Level
                public static FINER: java.util.logging.Level
                public static FINEST: java.util.logging.Level
                public static ALL: java.util.logging.Level
                protected constructor(arg0: java.lang.String | string, arg1: int)
                protected constructor(arg0: java.lang.String | string, arg1: int, arg2: java.lang.String | string)
                public getResourceBundleName(): string
                public getName(): string
                public getLocalizedName(): string
                public toString(): string
                public intValue(): int
                public static parse(arg0: java.lang.String | string): java.util.logging.Level
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public static class: java.lang.Class<any>
            }
            class LogManager {
                public static LOGGING_MXBEAN_NAME: string
                protected constructor()
                public static getLogManager(): java.util.logging.LogManager
                public addPropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
                public removePropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
                public addLogger(arg0: java.util.logging.Logger): boolean
                public getLogger(arg0: java.lang.String | string): java.util.logging.Logger
                public getLoggerNames(): java.util.Enumeration<java.lang.String>
                public readConfiguration(): void
                public reset(): void
                public readConfiguration(arg0: java.io.InputStream): void
                public getProperty(arg0: java.lang.String | string): string
                public checkAccess(): void
                public static getLoggingMXBean(): java.util.logging.LoggingMXBean
                public static class: java.lang.Class<any>
            }
            class LogRecord implements java.io.Serializable {
                public constructor(arg0: java.util.logging.Level, arg1: java.lang.String | string)
                public getLoggerName(): string
                public setLoggerName(arg0: java.lang.String | string): void
                public getResourceBundle(): java.util.ResourceBundle
                public setResourceBundle(arg0: java.util.ResourceBundle): void
                public getResourceBundleName(): string
                public setResourceBundleName(arg0: java.lang.String | string): void
                public getLevel(): java.util.logging.Level
                public setLevel(arg0: java.util.logging.Level): void
                public getSequenceNumber(): long
                public setSequenceNumber(arg0: long): void
                public getSourceClassName(): string
                public setSourceClassName(arg0: java.lang.String | string): void
                public getSourceMethodName(): string
                public setSourceMethodName(arg0: java.lang.String | string): void
                public getMessage(): string
                public setMessage(arg0: java.lang.String | string): void
                public getParameters(): java.lang.Object[]
                public setParameters(arg0: java.lang.Object[]): void
                public getThreadID(): int
                public setThreadID(arg0: int): void
                public getMillis(): long
                public setMillis(arg0: long): void
                public getThrown(): java.lang.Throwable
                public setThrown(arg0: java.lang.Throwable): void
                public static class: java.lang.Class<any>
            }
            class Logger {
                public static GLOBAL_LOGGER_NAME: string
                public static global: java.util.logging.Logger
                public static getGlobal(): java.util.logging.Logger
                protected constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                public static getLogger(arg0: java.lang.String | string): java.util.logging.Logger
                public static getLogger(arg0: java.lang.String | string, arg1: java.lang.String | string): java.util.logging.Logger
                public static getAnonymousLogger(): java.util.logging.Logger
                public static getAnonymousLogger(arg0: java.lang.String | string): java.util.logging.Logger
                public getResourceBundle(): java.util.ResourceBundle
                public getResourceBundleName(): string
                public setFilter(arg0: java.util.logging.Filter | java.util.logging.Filter$$Lambda): void
                public getFilter(): java.util.logging.Filter
                public log(arg0: java.util.logging.LogRecord): void
                public log(arg0: java.util.logging.Level, arg1: java.lang.String | string): void
                public log(arg0: java.util.logging.Level, arg1: java.util.function$.Supplier<java.lang.String> | java.util.function$.Supplier$$Lambda<java.lang.String>): void
                public log(arg0: java.util.logging.Level, arg1: java.lang.String | string, arg2: java.lang.Object): void
                public log(arg0: java.util.logging.Level, arg1: java.lang.String | string, arg2: java.lang.Object[]): void
                public log(arg0: java.util.logging.Level, arg1: java.lang.String | string, arg2: java.lang.Throwable): void
                public log(arg0: java.util.logging.Level, arg1: java.lang.Throwable, arg2: java.util.function$.Supplier<java.lang.String> | java.util.function$.Supplier$$Lambda<java.lang.String>): void
                public logp(arg0: java.util.logging.Level, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                public logp(arg0: java.util.logging.Level, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.util.function$.Supplier<java.lang.String> | java.util.function$.Supplier$$Lambda<java.lang.String>): void
                public logp(arg0: java.util.logging.Level, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.Object): void
                public logp(arg0: java.util.logging.Level, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.Object[]): void
                public logp(arg0: java.util.logging.Level, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.Throwable): void
                public logp(arg0: java.util.logging.Level, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.Throwable, arg4: java.util.function$.Supplier<java.lang.String> | java.util.function$.Supplier$$Lambda<java.lang.String>): void
                public logrb(arg0: java.util.logging.Level, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string): void
                public logrb(arg0: java.util.logging.Level, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.Object): void
                public logrb(arg0: java.util.logging.Level, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.Object[]): void
                public logrb(arg0: java.util.logging.Level, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.util.ResourceBundle, arg4: java.lang.String | string, ...arg5: java.lang.Object[]): void
                public logrb(arg0: java.util.logging.Level, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.Throwable): void
                public logrb(arg0: java.util.logging.Level, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.util.ResourceBundle, arg4: java.lang.String | string, arg5: java.lang.Throwable): void
                public entering(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public entering(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object): void
                public entering(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object[]): void
                public exiting(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public exiting(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object): void
                public throwing(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Throwable): void
                public severe(arg0: java.lang.String | string): void
                public warning(arg0: java.lang.String | string): void
                public info(arg0: java.lang.String | string): void
                public config(arg0: java.lang.String | string): void
                public fine(arg0: java.lang.String | string): void
                public finer(arg0: java.lang.String | string): void
                public finest(arg0: java.lang.String | string): void
                public severe(arg0: java.util.function$.Supplier<java.lang.String> | java.util.function$.Supplier$$Lambda<java.lang.String>): void
                public warning(arg0: java.util.function$.Supplier<java.lang.String> | java.util.function$.Supplier$$Lambda<java.lang.String>): void
                public info(arg0: java.util.function$.Supplier<java.lang.String> | java.util.function$.Supplier$$Lambda<java.lang.String>): void
                public config(arg0: java.util.function$.Supplier<java.lang.String> | java.util.function$.Supplier$$Lambda<java.lang.String>): void
                public fine(arg0: java.util.function$.Supplier<java.lang.String> | java.util.function$.Supplier$$Lambda<java.lang.String>): void
                public finer(arg0: java.util.function$.Supplier<java.lang.String> | java.util.function$.Supplier$$Lambda<java.lang.String>): void
                public finest(arg0: java.util.function$.Supplier<java.lang.String> | java.util.function$.Supplier$$Lambda<java.lang.String>): void
                public setLevel(arg0: java.util.logging.Level): void
                public getLevel(): java.util.logging.Level
                public isLoggable(arg0: java.util.logging.Level): boolean
                public getName(): string
                public addHandler(arg0: java.util.logging.Handler): void
                public removeHandler(arg0: java.util.logging.Handler): void
                public getHandlers(): java.util.logging.Handler[]
                public setUseParentHandlers(arg0: boolean): void
                public getUseParentHandlers(): boolean
                public setResourceBundle(arg0: java.util.ResourceBundle): void
                public getParent(): java.util.logging.Logger
                public setParent(arg0: java.util.logging.Logger): void
                public static class: java.lang.Class<any>
            }
            class Logging implements java.util.logging.LoggingMXBean {
                public getLoggerNames(): java.util.List<java.lang.String>
                public getLoggerLevel(arg0: java.lang.String | string): string
                public setLoggerLevel(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public getParentLoggerName(arg0: java.lang.String | string): string
                public static class: java.lang.Class<any>
            }
            interface LoggingMXBean {
                getLoggerLevel(arg0: java.lang.String | string): string
                getLoggerNames(): java.util.List<java.lang.String>
                getParentLoggerName(arg0: java.lang.String | string): string
                setLoggerLevel(arg0: java.lang.String | string, arg1: java.lang.String | string): void
            }
            class LoggingPermission extends java.security.BasicPermission {
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
            class MemoryHandler extends java.util.logging.Handler {
                public constructor()
                public constructor(arg0: java.util.logging.Handler, arg1: int, arg2: java.util.logging.Level)
                public publish(arg0: java.util.logging.LogRecord): void
                public push(): void
                public flush(): void
                public close(): void
                public setPushLevel(arg0: java.util.logging.Level): void
                public getPushLevel(): java.util.logging.Level
                public isLoggable(arg0: java.util.logging.LogRecord): boolean
                public static class: java.lang.Class<any>
            }
            class SimpleFormatter extends java.util.logging.Formatter {
                public constructor()
                public format(arg0: java.util.logging.LogRecord): string
                public static class: java.lang.Class<any>
            }
            class SocketHandler extends java.util.logging.StreamHandler {
                public constructor()
                public constructor(arg0: java.lang.String | string, arg1: int)
                public close(): void
                public publish(arg0: java.util.logging.LogRecord): void
                public static class: java.lang.Class<any>
            }
            class StreamHandler extends java.util.logging.Handler {
                public constructor()
                public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.util.logging.Formatter)
                protected setOutputStream(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public setEncoding(arg0: java.lang.String | string): void
                public publish(arg0: java.util.logging.LogRecord): void
                public isLoggable(arg0: java.util.logging.LogRecord): boolean
                public flush(): void
                public close(): void
                public static class: java.lang.Class<any>
            }
            class XMLFormatter extends java.util.logging.Formatter {
                public constructor()
                public format(arg0: java.util.logging.LogRecord): string
                public getHead(arg0: java.util.logging.Handler): string
                public getTail(arg0: java.util.logging.Handler): string
                public static class: java.lang.Class<any>
            }
        }
    }
}
declare namespace sun {
    namespace net {
        namespace www {
            namespace protocol {
                namespace http {
                    namespace logging {
                        class HttpLogFormatter extends java.util.logging.SimpleFormatter {
                            public constructor()
                            public format(arg0: java.util.logging.LogRecord): string
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}
