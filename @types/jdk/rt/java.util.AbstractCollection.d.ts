declare namespace java {
    namespace util {
        abstract class AbstractCollection<E> implements java.util.Collection<E> {
            protected constructor()
            public iterator(): java.util.Iterator<E>
            public size(): int
            public isEmpty(): boolean
            public contains(arg0: java.lang.Object): boolean
            public toArray(): java.lang.Object[]
            public toArray<T>(arg0: T[]): T[]
            public add<T>(arg0: E): boolean
            public remove<T>(arg0: java.lang.Object): boolean
            public containsAll<T>(arg0: java.util.Collection<any>): boolean
            public addAll<T>(arg0: java.util.Collection<E>): boolean
            public removeAll<T>(arg0: java.util.Collection<any>): boolean
            public retainAll<T>(arg0: java.util.Collection<any>): boolean
            public clear<T>(): void
            public toString<T>(): string
            public static class: java.lang.Class<any>
        }
    }
}