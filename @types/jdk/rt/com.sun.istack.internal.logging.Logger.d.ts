declare namespace com {
    namespace sun {
        namespace istack {
            namespace internal {
                namespace logging {
class Logger {
    protected constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
    public static getLogger(arg0: java.lang.Class<any>): com.sun.istack.internal.logging.Logger
    public static getLogger(arg0: java.lang.String | string, arg1: java.lang.Class<any>): com.sun.istack.internal.logging.Logger
    public log(arg0: java.util.logging.Level, arg1: java.lang.String | string): void
    public log(arg0: java.util.logging.Level, arg1: java.lang.String | string, arg2: java.lang.Object): void
    public log(arg0: java.util.logging.Level, arg1: java.lang.String | string, arg2: java.lang.Object[]): void
    public log(arg0: java.util.logging.Level, arg1: java.lang.String | string, arg2: java.lang.Throwable): void
    public finest(arg0: java.lang.String | string): void
    public finest(arg0: java.lang.String | string, arg1: java.lang.Object[]): void
    public finest(arg0: java.lang.String | string, arg1: java.lang.Throwable): void
    public finer(arg0: java.lang.String | string): void
    public finer(arg0: java.lang.String | string, arg1: java.lang.Object[]): void
    public finer(arg0: java.lang.String | string, arg1: java.lang.Throwable): void
    public fine(arg0: java.lang.String | string): void
    public fine(arg0: java.lang.String | string, arg1: java.lang.Throwable): void
    public info(arg0: java.lang.String | string): void
    public info(arg0: java.lang.String | string, arg1: java.lang.Object[]): void
    public info(arg0: java.lang.String | string, arg1: java.lang.Throwable): void
    public config(arg0: java.lang.String | string): void
    public config(arg0: java.lang.String | string, arg1: java.lang.Object[]): void
    public config(arg0: java.lang.String | string, arg1: java.lang.Throwable): void
    public warning(arg0: java.lang.String | string): void
    public warning(arg0: java.lang.String | string, arg1: java.lang.Object[]): void
    public warning(arg0: java.lang.String | string, arg1: java.lang.Throwable): void
    public severe(arg0: java.lang.String | string): void
    public severe(arg0: java.lang.String | string, arg1: java.lang.Object[]): void
    public severe(arg0: java.lang.String | string, arg1: java.lang.Throwable): void
    public isMethodCallLoggable(): boolean
    public isLoggable(arg0: java.util.logging.Level): boolean
    public setLevel(arg0: java.util.logging.Level): void
    public entering(): void
    public entering(...arg0: java.lang.Object[]): void
    public exiting(): void
    public exiting(arg0: java.lang.Object): void
    public logSevereException<T extends java.lang.Throwable>(arg0: T, arg1: java.lang.Throwable): T
    public logSevereException<T extends java.lang.Throwable>(arg0: T, arg1: boolean): T
    public logSevereException<T extends java.lang.Throwable>(arg0: T): T
    public logException<T extends java.lang.Throwable>(arg0: T, arg1: java.lang.Throwable, arg2: java.util.logging.Level): T
    public logException<T extends java.lang.Throwable>(arg0: T, arg1: boolean, arg2: java.util.logging.Level): T
    public logException<T extends java.lang.Throwable>(arg0: T, arg1: java.util.logging.Level): T
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}