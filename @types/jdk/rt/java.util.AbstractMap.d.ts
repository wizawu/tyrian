declare namespace java {
    namespace util {
        abstract class AbstractMap<K, V> implements java.util.Map<K, V> {
            protected constructor()
            public size(): int
            public isEmpty(): boolean
            public containsValue(arg0: java.lang.Object): boolean
            public containsKey(arg0: java.lang.Object): boolean
            public get(arg0: java.lang.Object): V
            public put(arg0: K, arg1: V): V
            public remove(arg0: java.lang.Object): V
            public putAll(arg0: java.util.Map<K, V>): void
            public clear(): void
            public keySet(): java.util.Set<K>
            public values(): java.util.Collection<V>
            public abstract entrySet(): java.util.Set<java.util.Map$Entry<K, V>>
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public toString(): string
            protected clone(): java.lang.Object
            public static class: java.lang.Class<any>
        }
        interface AbstractMap$$Lambda<K, V> implements java.util.Map<K, V> {
            (): java.util.Set<java.util.Map$Entry<K, V>>
        }
    }
}