declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace logging {
abstract class LogWrapperBase {
    protected logger: java.util.logging.Logger
    protected loggerName: string
    protected constructor(arg0: java.util.logging.Logger)
    protected doLog(arg0: java.util.logging.Level, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: java.lang.Class, arg4: java.lang.Throwable): void
    protected doLog(arg0: java.util.logging.Level, arg1: java.lang.String | string, arg2: java.lang.Class, arg3: java.lang.Throwable): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}