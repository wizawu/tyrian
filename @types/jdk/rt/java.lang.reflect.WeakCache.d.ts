declare namespace java {
    namespace lang {
        namespace reflect {
            class WeakCache<K, P, V> {
                public constructor(arg0: java.util.function$.BiFunction<K, P, any>, arg1: java.util.function$.BiFunction<K, P, V>)
                public get(arg0: K, arg1: P): V
                public containsValue(arg0: V): boolean
                public size(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}