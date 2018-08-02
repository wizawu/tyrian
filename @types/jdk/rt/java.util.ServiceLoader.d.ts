declare namespace java {
    namespace util {
        class ServiceLoader<S> implements java.lang.Iterable<S> {
            public reload(): void
            public iterator(): java.util.Iterator<S>
            public static load<S>(arg0: java.lang.Class<S>, arg1: java.lang.ClassLoader): java.util.ServiceLoader<S>
            public static load<S>(arg0: java.lang.Class<S>): java.util.ServiceLoader<S>
            public static loadInstalled<S>(arg0: java.lang.Class<S>): java.util.ServiceLoader<S>
            public toString(): string
            public static class: java.lang.Class<any>
        }
    }
}