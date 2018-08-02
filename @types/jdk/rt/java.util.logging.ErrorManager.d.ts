declare namespace java {
    namespace util {
        namespace logging {
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
        }
    }
}