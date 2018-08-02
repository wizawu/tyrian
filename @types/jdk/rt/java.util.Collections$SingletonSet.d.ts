declare namespace java {
    namespace util {
        class Collections$SingletonSet<E> extends java.util.AbstractSet<E> implements java.io.Serializable {
            public iterator(): java.util.Iterator<E>
            public size(): int
            public contains(arg0: java.lang.Object): boolean
            public forEach(arg0: java.util.function$.Consumer$$TypeScript<E>): void
            public spliterator(): java.util.Spliterator<E>
            public removeIf(arg0: java.util.function$.Predicate<E>): boolean
            public static class: java.lang.Class<any>
        }
    }
}