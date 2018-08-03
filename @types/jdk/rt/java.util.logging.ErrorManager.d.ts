declare namespace java {
    namespace util {
        namespace logging {
            class ErrorManager {
                public static readonly GENERIC_FAILURE: int
                public static readonly WRITE_FAILURE: int
                public static readonly FLUSH_FAILURE: int
                public static readonly CLOSE_FAILURE: int
                public static readonly OPEN_FAILURE: int
                public static readonly FORMAT_FAILURE: int
                public constructor()
                public error(arg0: java.lang.String | string, arg1: java.lang.Exception, arg2: int): void
                public static class: java.lang.Class<any>
            }
        }
    }
}