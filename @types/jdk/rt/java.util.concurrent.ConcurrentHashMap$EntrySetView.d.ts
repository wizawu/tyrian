declare namespace java {
    namespace util {
        namespace concurrent {
class ConcurrentHashMap$EntrySetView<K, V> extends java.util.concurrent.ConcurrentHashMap$CollectionView<K, V, java.util.Map$Entry<K, V>> implements java.util.Set<java.util.Map$Entry<K, V>> , java.io.Serializable {
    public contains(arg0: java.lang.Object): boolean
    public remove(arg0: java.lang.Object): boolean
    public iterator(): java.util.Iterator<java.util.Map$Entry<K, V>>
    public add(arg0: java.util.Map$Entry<K, V>): boolean
    public addAll(arg0: java.util.Collection<java.util.Map$Entry<K, V>>): boolean
    public hashCode(): int
    public equals(arg0: java.lang.Object): boolean
    public spliterator(): java.util.Spliterator<java.util.Map$Entry<K, V>>
    public forEach(arg0: java.util.function$.Consumer<java.util.Map$Entry<K, V>>): void
    public add(arg0: java.lang.Object): boolean
    public static class: java.lang.Class<any>
}

        }
    }
}