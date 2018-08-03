declare namespace java {
    namespace util {
        namespace stream {
            class Nodes$ConcNode<T> extends java.util.stream.Nodes$AbstractConcNode<T, java.util.stream.Node<T>> implements java.util.stream.Node<T> {
                public spliterator(): java.util.Spliterator<T>
                public copyInto(arg0: T[], arg1: int): void
                public asArray(arg0: java.util.function$.IntFunction<T[]> | java.util.function$.IntFunction$$Lambda<T[]>): T[]
                public forEach(arg0: java.util.function$.Consumer$$Lambda<T>): void
                public truncate(arg0: long, arg1: long, arg2: java.util.function$.IntFunction<T[]> | java.util.function$.IntFunction$$Lambda<T[]>): java.util.stream.Node<T>
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}