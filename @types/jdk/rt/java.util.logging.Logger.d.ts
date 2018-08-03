declare namespace java {
    namespace util {
        namespace logging {
            class Logger {
                public static readonly GLOBAL_LOGGER_NAME: string
                public static readonly global: java.util.logging.Logger
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
        }
    }
}