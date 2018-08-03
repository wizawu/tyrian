declare namespace java {
    namespace util {
        namespace stream {
            class SpinedBuffer<E> extends java.util.stream.AbstractSpinedBuffer implements java.util.function$.Consumer<E> , java.lang.Iterable<E> {
                protected curChunk: E[]
                protected spine: E[][]
                protected capacity(): long
                protected ensureCapacity(arg0: long): void
                protected increaseCapacity(): void
                public get(arg0: long): E
                public copyInto(arg0: E[], arg1: int): void
                public asArray(arg0: java.util.function$.IntFunction<E[]> | java.util.function$.IntFunction$$Lambda<E[]>): E[]
                public clear(): void
                public iterator(): java.util.Iterator<E>
                public forEach(arg0: java.util.function$.Consumer$$Lambda<E>): void
                public accept(arg0: E): void
                public toString(): string
                public spliterator(): java.util.Spliterator<E>
                public static class: java.lang.Class<any>
            }
        }
    }
}