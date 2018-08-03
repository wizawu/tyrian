declare namespace java {
    namespace util {
        namespace logging {
            class Level implements java.io.Serializable {
                public static readonly OFF: java.util.logging.Level
                public static readonly SEVERE: java.util.logging.Level
                public static readonly WARNING: java.util.logging.Level
                public static readonly INFO: java.util.logging.Level
                public static readonly CONFIG: java.util.logging.Level
                public static readonly FINE: java.util.logging.Level
                public static readonly FINER: java.util.logging.Level
                public static readonly FINEST: java.util.logging.Level
                public static readonly ALL: java.util.logging.Level
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
        }
    }
}