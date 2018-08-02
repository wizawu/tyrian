declare namespace java {
    namespace util {
        class JumboEnumSet<E extends java.lang.Enum<E>> extends java.util.EnumSet<E> {
            public iterator(): java.util.Iterator<E>
            public size(): int
            public isEmpty(): boolean
            public contains(arg0: java.lang.Object): boolean
            public add(arg0: E): boolean
            public remove(arg0: java.lang.Object): boolean
            public containsAll(arg0: java.util.Collection<any>): boolean
            public addAll(arg0: java.util.Collection<E>): boolean
            public removeAll(arg0: java.util.Collection<any>): boolean
            public retainAll(arg0: java.util.Collection<any>): boolean
            public clear(): void
            public equals(arg0: java.lang.Object): boolean
            public clone(): java.util.EnumSet<E>
            public add(arg0: java.lang.Object): boolean
            public clone(): java.lang.Object
            public static class: java.lang.Class<any>
        }
    }
}