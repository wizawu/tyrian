declare namespace java {
    namespace util {
        class Objects {
            public static equals(arg0: java.lang.Object, arg1: java.lang.Object): boolean
            public static deepEquals(arg0: java.lang.Object, arg1: java.lang.Object): boolean
            public static hashCode(arg0: java.lang.Object): int
            public static hash(...arg0: java.lang.Object[]): int
            public static toString(arg0: java.lang.Object): string
            public static toString(arg0: java.lang.Object, arg1: java.lang.String | string): string
            public static compare<T>(arg0: T, arg1: T, arg2: java.util.Comparator<T>): int
            public static requireNonNull<T>(arg0: T): T
            public static requireNonNull<T>(arg0: T, arg1: java.lang.String | string): T
            public static isNull<T>(arg0: java.lang.Object): boolean
            public static nonNull<T>(arg0: java.lang.Object): boolean
            public static requireNonNull<T>(arg0: T, arg1: java.util.function$.Supplier<java.lang.String> | java.util.function$.Supplier$$Lambda<java.lang.String>): T
            public static class: java.lang.Class<any>
        }
    }
}