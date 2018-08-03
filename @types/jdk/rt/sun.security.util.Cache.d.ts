declare namespace sun {
    namespace security {
        namespace util {
            abstract class Cache<K, V> {
                protected constructor()
                public abstract size(): int
                public abstract clear(): void
                public abstract put(arg0: K, arg1: V): void
                public abstract get(arg0: java.lang.Object): V
                public abstract remove(arg0: java.lang.Object): void
                public abstract setCapacity(arg0: int): void
                public abstract setTimeout(arg0: int): void
                public abstract accept(arg0: sun.security.util.Cache$CacheVisitor<K, V> | sun.security.util.Cache$CacheVisitor$$Lambda<K, V>): void
                public static newSoftMemoryCache<K, V>(arg0: int): sun.security.util.Cache<K, V>
                public static newSoftMemoryCache<K, V>(arg0: int, arg1: int): sun.security.util.Cache<K, V>
                public static newHardMemoryCache<K, V>(arg0: int): sun.security.util.Cache<K, V>
                public static newNullCache<K, V>(): sun.security.util.Cache<K, V>
                public static newHardMemoryCache<K, V>(arg0: int, arg1: int): sun.security.util.Cache<K, V>
                public static class: java.lang.Class<any>
            }
        }
    }
}