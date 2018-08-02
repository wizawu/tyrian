declare namespace java {
    namespace lang {
        abstract class Enum<E extends java.lang.Enum<E>> implements java.lang.Comparable<E> , java.io.Serializable {
            public name(): string
            public ordinal(): int
            protected constructor(arg0: java.lang.String | string, arg1: int)
            public toString(): string
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            protected clone(): java.lang.Object
            public compareTo(arg0: E): int
            public getDeclaringClass(): java.lang.Class<E>
            public static valueOf<T extends java.lang.Enum<T>>(arg0: java.lang.Class<T>, arg1: java.lang.String | string): T
            protected finalize(): void
            public compareTo(arg0: java.lang.Object): int
            public static class: java.lang.Class<any>
        }
    }
}