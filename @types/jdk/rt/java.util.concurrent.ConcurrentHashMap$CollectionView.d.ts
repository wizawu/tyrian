declare namespace java {
    namespace util {
        namespace concurrent {
            abstract class ConcurrentHashMap$CollectionView<K, V, E> implements java.util.Collection<E> , java.io.Serializable {
                public getMap(): java.util.concurrent.ConcurrentHashMap<K, V>
                public clear(): void
                public size(): int
                public isEmpty(): boolean
                public abstract iterator(): java.util.Iterator<E>
                public abstract contains(arg0: java.lang.Object): boolean
                public abstract remove(arg0: java.lang.Object): boolean
                public toArray(): java.lang.Object[]
                public toArray<T>(arg0: T[]): T[]
                public toString<T>(): string
                public containsAll<T>(arg0: java.util.Collection<any>): boolean
                public removeAll<T>(arg0: java.util.Collection<any>): boolean
                public retainAll<T>(arg0: java.util.Collection<any>): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}