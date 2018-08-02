declare namespace com {
    namespace sun {
        namespace java {
            namespace util {
                namespace jar {
                    namespace pack {
                        class FixedList<E> implements java.util.List<E> {
                            protected constructor(arg0: int)
                            public size(): int
                            public isEmpty(): boolean
                            public contains(arg0: java.lang.Object): boolean
                            public iterator(): java.util.Iterator<E>
                            public toArray(): java.lang.Object[]
                            public toArray<T>(arg0: T[]): T[]
                            public add<T>(arg0: E): boolean
                            public remove<T>(arg0: java.lang.Object): boolean
                            public containsAll<T>(arg0: java.util.Collection<any>): boolean
                            public addAll<T>(arg0: java.util.Collection<E>): boolean
                            public addAll<T>(arg0: int, arg1: java.util.Collection<E>): boolean
                            public removeAll<T>(arg0: java.util.Collection<any>): boolean
                            public retainAll<T>(arg0: java.util.Collection<any>): boolean
                            public clear<T>(): void
                            public get<T>(arg0: int): E
                            public set<T>(arg0: int, arg1: E): E
                            public add<T>(arg0: int, arg1: E): void
                            public remove<T>(arg0: int): E
                            public indexOf<T>(arg0: java.lang.Object): int
                            public lastIndexOf<T>(arg0: java.lang.Object): int
                            public listIterator<T>(): java.util.ListIterator<E>
                            public listIterator<T>(arg0: int): java.util.ListIterator<E>
                            public subList<T>(arg0: int, arg1: int): java.util.List<E>
                            public toString<T>(): string
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}