declare namespace sun {
    namespace security {
        namespace util {
class MemoryCache<K, V> extends sun.security.util.Cache<K, V> {
    public constructor(arg0: boolean, arg1: int)
    public constructor(arg0: boolean, arg1: int, arg2: int)
    public size(): int
    public clear(): void
    public put(arg0: K, arg1: V): void
    public get(arg0: java.lang.Object): V
    public remove(arg0: java.lang.Object): void
    public setCapacity(arg0: int): void
    public setTimeout(arg0: int): void
    public accept(arg0: sun.security.util.Cache$CacheVisitor<K, V> | sun.security.util.Cache$CacheVisitor$$Lambda<K, V>): void
    protected newEntry(arg0: K, arg1: V, arg2: long, arg3: java.lang.ref.ReferenceQueue<V>): sun.security.util.MemoryCache$CacheEntry<K, V>
    public static class: java.lang.Class<any>
}

        }
    }
}