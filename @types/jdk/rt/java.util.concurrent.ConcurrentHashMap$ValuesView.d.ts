declare namespace java {
    namespace util {
        namespace concurrent {
class ConcurrentHashMap$ValuesView<K, V> extends java.util.concurrent.ConcurrentHashMap$CollectionView<K, V, V> implements java.util.Collection<V> , java.io.Serializable {
    public contains(arg0: java.lang.Object): boolean
    public remove(arg0: java.lang.Object): boolean
    public iterator(): java.util.Iterator<V>
    public add(arg0: V): boolean
    public addAll(arg0: java.util.Collection<V>): boolean
    public spliterator(): java.util.Spliterator<V>
    public forEach(arg0: java.util.function$.Consumer$$TypeScript<V>): void
    public static class: java.lang.Class<any>
}

        }
    }
}