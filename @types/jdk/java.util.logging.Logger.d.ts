declare namespace java {
  namespace util {
    namespace logging {
      class Logger {
        static readonly SYSTEM_LOGGER_RB_NAME: java.lang.String
        public static readonly GLOBAL_LOGGER_NAME: java.lang.String
        public static readonly global: java.util.logging.Logger
        public static getGlobal(): java.util.logging.Logger
        protected constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
        constructor(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: java.lang.Module,
          arg3: java.util.logging.LogManager,
          arg4: boolean | java.lang.Boolean
        )
        mergeWithSystemLogger(arg0: java.util.logging.Logger): void
        setLogManager(arg0: java.util.logging.LogManager): void
        public static getLogger(arg0: java.lang.String | string): java.util.logging.Logger
        public static getLogger(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string
        ): java.util.logging.Logger
        static getPlatformLogger(arg0: java.lang.String | string): java.util.logging.Logger
        public static getAnonymousLogger(): java.util.logging.Logger
        public static getAnonymousLogger(arg0: java.lang.String | string): java.util.logging.Logger
        public getResourceBundle(): java.util.ResourceBundle
        public getResourceBundleName(): java.lang.String
        public setFilter(arg0: java.util.logging.Filter | java.util.logging.Filter$$lambda): void
        public getFilter(): java.util.logging.Filter
        public log(arg0: java.util.logging.LogRecord): void
        public log(arg0: java.util.logging.Level, arg1: java.lang.String | string): void
        public log(
          arg0: java.util.logging.Level,
          arg1: java.util.function$.Supplier<java.lang.String> | java.util.function$.Supplier$$lambda<java.lang.String>
        ): void
        public log(arg0: java.util.logging.Level, arg1: java.lang.String | string, arg2: java.lang.Object | any): void
        public log(
          arg0: java.util.logging.Level,
          arg1: java.lang.String | string,
          arg2: java.lang.Object[] | any[]
        ): void
        public log(arg0: java.util.logging.Level, arg1: java.lang.String | string, arg2: java.lang.Throwable): void
        public log(
          arg0: java.util.logging.Level,
          arg1: java.lang.Throwable,
          arg2: java.util.function$.Supplier<java.lang.String> | java.util.function$.Supplier$$lambda<java.lang.String>
        ): void
        public logp(
          arg0: java.util.logging.Level,
          arg1: java.lang.String | string,
          arg2: java.lang.String | string,
          arg3: java.lang.String | string
        ): void
        public logp(
          arg0: java.util.logging.Level,
          arg1: java.lang.String | string,
          arg2: java.lang.String | string,
          arg3: java.util.function$.Supplier<java.lang.String> | java.util.function$.Supplier$$lambda<java.lang.String>
        ): void
        public logp(
          arg0: java.util.logging.Level,
          arg1: java.lang.String | string,
          arg2: java.lang.String | string,
          arg3: java.lang.String | string,
          arg4: java.lang.Object | any
        ): void
        public logp(
          arg0: java.util.logging.Level,
          arg1: java.lang.String | string,
          arg2: java.lang.String | string,
          arg3: java.lang.String | string,
          arg4: java.lang.Object[] | any[]
        ): void
        public logp(
          arg0: java.util.logging.Level,
          arg1: java.lang.String | string,
          arg2: java.lang.String | string,
          arg3: java.lang.String | string,
          arg4: java.lang.Throwable
        ): void
        public logp(
          arg0: java.util.logging.Level,
          arg1: java.lang.String | string,
          arg2: java.lang.String | string,
          arg3: java.lang.Throwable,
          arg4: java.util.function$.Supplier<java.lang.String> | java.util.function$.Supplier$$lambda<java.lang.String>
        ): void
        public logrb(
          arg0: java.util.logging.Level,
          arg1: java.lang.String | string,
          arg2: java.lang.String | string,
          arg3: java.lang.String | string,
          arg4: java.lang.String | string
        ): void
        public logrb(
          arg0: java.util.logging.Level,
          arg1: java.lang.String | string,
          arg2: java.lang.String | string,
          arg3: java.lang.String | string,
          arg4: java.lang.String | string,
          arg5: java.lang.Object | any
        ): void
        public logrb(
          arg0: java.util.logging.Level,
          arg1: java.lang.String | string,
          arg2: java.lang.String | string,
          arg3: java.lang.String | string,
          arg4: java.lang.String | string,
          arg5: java.lang.Object[] | any[]
        ): void
        public logrb(
          arg0: java.util.logging.Level,
          arg1: java.lang.String | string,
          arg2: java.lang.String | string,
          arg3: java.util.ResourceBundle,
          arg4: java.lang.String | string,
          ...vargs: (java.lang.Object | any)[]
        ): void
        public logrb(
          arg0: java.util.logging.Level,
          arg1: java.util.ResourceBundle,
          arg2: java.lang.String | string,
          ...vargs: (java.lang.Object | any)[]
        ): void
        public logrb(
          arg0: java.util.logging.Level,
          arg1: java.lang.String | string,
          arg2: java.lang.String | string,
          arg3: java.lang.String | string,
          arg4: java.lang.String | string,
          arg5: java.lang.Throwable
        ): void
        public logrb(
          arg0: java.util.logging.Level,
          arg1: java.lang.String | string,
          arg2: java.lang.String | string,
          arg3: java.util.ResourceBundle,
          arg4: java.lang.String | string,
          arg5: java.lang.Throwable
        ): void
        public logrb(
          arg0: java.util.logging.Level,
          arg1: java.util.ResourceBundle,
          arg2: java.lang.String | string,
          arg3: java.lang.Throwable
        ): void
        public entering(arg0: java.lang.String | string, arg1: java.lang.String | string): void
        public entering(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: java.lang.Object | any
        ): void
        public entering(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: java.lang.Object[] | any[]
        ): void
        public exiting(arg0: java.lang.String | string, arg1: java.lang.String | string): void
        public exiting(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: java.lang.Object | any
        ): void
        public throwing(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: java.lang.Throwable
        ): void
        public severe(arg0: java.lang.String | string): void
        public warning(arg0: java.lang.String | string): void
        public info(arg0: java.lang.String | string): void
        public config(arg0: java.lang.String | string): void
        public fine(arg0: java.lang.String | string): void
        public finer(arg0: java.lang.String | string): void
        public finest(arg0: java.lang.String | string): void
        public severe(
          arg0: java.util.function$.Supplier<java.lang.String> | java.util.function$.Supplier$$lambda<java.lang.String>
        ): void
        public warning(
          arg0: java.util.function$.Supplier<java.lang.String> | java.util.function$.Supplier$$lambda<java.lang.String>
        ): void
        public info(
          arg0: java.util.function$.Supplier<java.lang.String> | java.util.function$.Supplier$$lambda<java.lang.String>
        ): void
        public config(
          arg0: java.util.function$.Supplier<java.lang.String> | java.util.function$.Supplier$$lambda<java.lang.String>
        ): void
        public fine(
          arg0: java.util.function$.Supplier<java.lang.String> | java.util.function$.Supplier$$lambda<java.lang.String>
        ): void
        public finer(
          arg0: java.util.function$.Supplier<java.lang.String> | java.util.function$.Supplier$$lambda<java.lang.String>
        ): void
        public finest(
          arg0: java.util.function$.Supplier<java.lang.String> | java.util.function$.Supplier$$lambda<java.lang.String>
        ): void
        public setLevel(arg0: java.util.logging.Level): void
        isLevelInitialized(): boolean
        public getLevel(): java.util.logging.Level
        public isLoggable(arg0: java.util.logging.Level): boolean
        public getName(): java.lang.String
        public addHandler(arg0: java.util.logging.Handler): void
        public removeHandler(arg0: java.util.logging.Handler): void
        public getHandlers(): java.util.logging.Handler[]
        accessCheckedHandlers(): java.util.logging.Handler[]
        public setUseParentHandlers(arg0: boolean | java.lang.Boolean): void
        public getUseParentHandlers(): boolean
        public setResourceBundle(arg0: java.util.ResourceBundle): void
        public getParent(): java.util.logging.Logger
        public setParent(arg0: java.util.logging.Logger): void
        removeChildLogger(arg0: java.util.logging.LogManager$LoggerWeakRef): void
      }
    }
  }
}
