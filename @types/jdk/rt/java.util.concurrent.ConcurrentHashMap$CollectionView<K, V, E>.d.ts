declare namespace java {
    namespace util {
        namespace concurrent {
abstract class ConcurrentHashMap$CollectionView<K, V, E> implements java.util.Collection<E> , java.io.Serializable {
    public getMap(): java.util.concurrent.ConcurrentHashMap<K, V>
    public clear(): void
    public size(): int
    public isEmpty(): boolean
    public iterator(): java.util.Iterator<E>
    public contains(arg0: java.lang.Object): boolean
    public remove(arg0: java.lang.Object): boolean
    public toArray(): java.lang.Object[]
    public toArray<T>(arg0: T[]): T[]
    public toString(): string
    public containsAll(arg0: java.util.Collection<any>): boolean
    public removeAll(arg0: java.util.Collection<any>): boolean
    public retainAll(arg0: java.util.Collection<any>): boolean
    public static class: java.lang.Class<any>
}

        }
    }
}