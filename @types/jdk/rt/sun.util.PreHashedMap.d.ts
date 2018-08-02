declare namespace sun {
    namespace util {
        abstract class PreHashedMap<V> extends java.util.AbstractMap<java.lang.String, V> {
            protected constructor(arg0: int, arg1: int, arg2: int, arg3: int)
            protected init(arg0: java.lang.Object[]): void
            public get(arg0: java.lang.Object): V
            public put(arg0: java.lang.String | string, arg1: V): V
            public keySet(): java.util.Set<java.lang.String>
            public entrySet(): java.util.Set<java.util.Map$Entry<java.lang.String, V>>
            public put(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
            public static class: java.lang.Class<any>
        }
    }
}