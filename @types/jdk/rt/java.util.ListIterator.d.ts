declare namespace java {
    namespace util {
        interface ListIterator<E> extends java.util.Iterator<E> {
            hasNext(): boolean
            next(): E
            hasPrevious(): boolean
            previous(): E
            nextIndex(): int
            previousIndex(): int
            remove(): void
            set(arg0: E): void
            add(arg0: E): void
        }
    }
}