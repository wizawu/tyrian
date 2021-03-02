declare namespace java {
  namespace util {
    namespace logging {

      class LogManager {
        static readonly controlPermission: java.security.Permission
        public static readonly LOGGING_MXBEAN_NAME: java.lang.String
        static readonly $assertionsDisabled: boolean
        protected constructor()
        ensureLogManagerInitialized(): void
        public static getLogManager(): java.util.logging.LogManager
        getSystemContext(): java.util.logging.LogManager$LoggerContext
        demandLogger(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.Class<unknown>): java.util.logging.Logger
        demandLogger(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.Module): java.util.logging.Logger
        demandSystemLogger(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.Class<unknown>): java.util.logging.Logger
        demandSystemLogger(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.Module): java.util.logging.Logger
        drainLoggerRefQueueBounded(): void
        public addLogger(arg0: java.util.logging.Logger): boolean
        public getLogger(arg0: java.lang.String): java.util.logging.Logger
        public getLoggerNames(): java.util.Enumeration<java.lang.String>
        public readConfiguration(): void
        getConfigurationFileName(): java.lang.String
        public reset(): void
        public readConfiguration(arg0: java.io.InputStream): void
        public updateConfiguration(arg0: java.util.function$.Function<java.lang.String,java.util.function$.BiFunction<java.lang.String,java.lang.String,java.lang.String>>): void
        public updateConfiguration(arg0: java.io.InputStream, arg1: java.util.function$.Function<java.lang.String,java.util.function$.BiFunction<java.lang.String,java.lang.String,java.lang.String>>): void
        public getProperty(arg0: java.lang.String): java.lang.String
        getStringProperty(arg0: java.lang.String, arg1: java.lang.String): java.lang.String
        getIntProperty(arg0: java.lang.String, arg1: int): int
        getLongProperty(arg0: java.lang.String, arg1: long): long
        getBooleanProperty(arg0: java.lang.String, arg1: boolean): boolean
        getLevelProperty(arg0: java.lang.String, arg1: java.util.logging.Level): java.util.logging.Level
        getFilterProperty(arg0: java.lang.String, arg1: java.util.logging.Filter): java.util.logging.Filter
        getFormatterProperty(arg0: java.lang.String, arg1: java.util.logging.Formatter): java.util.logging.Formatter
        checkPermission(): void
        public checkAccess(): void
        public static getLoggingMXBean(): java.util.logging.LoggingMXBean
        public addConfigurationListener(arg0: java.lang.Runnable): java.util.logging.LogManager
        public removeConfigurationListener(arg0: java.lang.Runnable): void
      }

    }
  }
}
