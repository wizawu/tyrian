declare namespace javax {
    namespace management {
        namespace openmbean {
            abstract class OpenType<T> implements java.io.Serializable {
                public static readonly ALLOWED_CLASSNAMES_LIST: java.util.List<java.lang.String>
                public static readonly ALLOWED_CLASSNAMES: java.lang.String[]
                protected constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string)
                public getClassName(): string
                public getTypeName(): string
                public getDescription(): string
                public isArray(): boolean
                public abstract isValue(arg0: java.lang.Object): boolean
                public abstract equals(arg0: java.lang.Object): boolean
                public abstract hashCode(): int
                public abstract toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}