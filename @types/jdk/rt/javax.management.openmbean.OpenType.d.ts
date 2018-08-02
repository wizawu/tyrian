declare namespace javax {
    namespace management {
        namespace openmbean {
abstract class OpenType<T> implements java.io.Serializable {
    public static ALLOWED_CLASSNAMES_LIST: java.util.List<java.lang.String>
    public static ALLOWED_CLASSNAMES: java.lang.String[]
    protected constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string)
    public getClassName(): string
    public getTypeName(): string
    public getDescription(): string
    public isArray(): boolean
    public isValue(arg0: java.lang.Object): boolean
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}