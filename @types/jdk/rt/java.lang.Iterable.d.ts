declare namespace java {
    namespace lang {
        interface Iterable<T> {
            iterator(): java.util.Iterator<T>
            forEach(arg0: java.util.function$.Consumer$$Lambda<T>): void
            spliterator(): java.util.Spliterator<T>
        }
    }
}