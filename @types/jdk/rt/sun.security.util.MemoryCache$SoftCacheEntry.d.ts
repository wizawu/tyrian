declare namespace sun {
    namespace security {
        namespace util {
class MemoryCache$SoftCacheEntry<K, V> extends java.lang.ref.SoftReference<V> implements sun.security.util.MemoryCache$CacheEntry<K, V> {
    public getKey(): K
    public getValue(): V
    public isValid(arg0: long): boolean
    public invalidate(): void
    public static class: java.lang.Class<any>
}

        }
    }
}