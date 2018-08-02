declare namespace sun {
    namespace util {
        namespace logging {
class PlatformLogger {
    public static getLogger(arg0: java.lang.String | string): sun.util.logging.PlatformLogger
    public static redirectPlatformLoggers(): void
    public isEnabled(): boolean
    public getName(): string
    public isLoggable(arg0: sun.util.logging.PlatformLogger$Level): boolean
    public level(): sun.util.logging.PlatformLogger$Level
    public setLevel(arg0: sun.util.logging.PlatformLogger$Level): void
    public severe(arg0: java.lang.String | string): void
    public severe(arg0: java.lang.String | string, arg1: java.lang.Throwable): void
    public severe(arg0: java.lang.String | string, ...arg1: java.lang.Object[]): void
    public warning(arg0: java.lang.String | string): void
    public warning(arg0: java.lang.String | string, arg1: java.lang.Throwable): void
    public warning(arg0: java.lang.String | string, ...arg1: java.lang.Object[]): void
    public info(arg0: java.lang.String | string): void
    public info(arg0: java.lang.String | string, arg1: java.lang.Throwable): void
    public info(arg0: java.lang.String | string, ...arg1: java.lang.Object[]): void
    public config(arg0: java.lang.String | string): void
    public config(arg0: java.lang.String | string, arg1: java.lang.Throwable): void
    public config(arg0: java.lang.String | string, ...arg1: java.lang.Object[]): void
    public fine(arg0: java.lang.String | string): void
    public fine(arg0: java.lang.String | string, arg1: java.lang.Throwable): void
    public fine(arg0: java.lang.String | string, ...arg1: java.lang.Object[]): void
    public finer(arg0: java.lang.String | string): void
    public finer(arg0: java.lang.String | string, arg1: java.lang.Throwable): void
    public finer(arg0: java.lang.String | string, ...arg1: java.lang.Object[]): void
    public finest(arg0: java.lang.String | string): void
    public finest(arg0: java.lang.String | string, arg1: java.lang.Throwable): void
    public finest(arg0: java.lang.String | string, ...arg1: java.lang.Object[]): void
    public static class: java.lang.Class<any>
}

        }
    }
}