declare namespace java {
    namespace util {
        namespace logging {
class Level implements java.io.Serializable {
    public static OFF: java.util.logging.Level
    public static SEVERE: java.util.logging.Level
    public static WARNING: java.util.logging.Level
    public static INFO: java.util.logging.Level
    public static CONFIG: java.util.logging.Level
    public static FINE: java.util.logging.Level
    public static FINER: java.util.logging.Level
    public static FINEST: java.util.logging.Level
    public static ALL: java.util.logging.Level
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