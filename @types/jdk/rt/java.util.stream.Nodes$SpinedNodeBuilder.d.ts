declare namespace java {
    namespace util {
        namespace stream {
            class Nodes$SpinedNodeBuilder<T> extends java.util.stream.SpinedBuffer<T> implements java.util.stream.Node<T> , java.util.stream.Node$Builder<T> {
                public spliterator(): java.util.Spliterator<T>
                public forEach(arg0: java.util.function$.Consumer$$Lambda<T>): void
                public begin(arg0: long): void
                public accept(arg0: T): void
                public end(): void
                public copyInto(arg0: T[], arg1: int): void
                public asArray(arg0: java.util.function$.IntFunction<T[]> | java.util.function$.IntFunction$$Lambda<T[]>): T[]
                public build(): java.util.stream.Node<T>
                public static class: java.lang.Class<any>
            }
        }
    }
}