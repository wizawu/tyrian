declare namespace sun {
    namespace security {
        namespace util {
interface MemoryCache$CacheEntry<K, V> {
    isValid(arg0: long): boolean
    invalidate(): void
    getKey(): K
    getValue(): V
}

        }
    }
}