declare namespace java {
    namespace util {
        namespace logging {
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

        }
    }
}