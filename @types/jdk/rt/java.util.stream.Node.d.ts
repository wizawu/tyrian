declare namespace java {
    namespace util {
        namespace stream {
            interface Node<T> {
                spliterator(): java.util.Spliterator<T>
                forEach(arg0: java.util.function$.Consumer$$TypeScript<T>): void
                getChildCount(): int
                getChild(arg0: int): java.util.stream.Node<T>
                truncate(arg0: long, arg1: long, arg2: java.util.function$.IntFunction<T[]> | java.util.function$.IntFunction$$Lambda<T[]>): java.util.stream.Node<T>
                asArray(arg0: java.util.function$.IntFunction<T[]> | java.util.function$.IntFunction$$Lambda<T[]>): T[]
                copyInto(arg0: T[], arg1: int): void
                getShape(): java.util.stream.StreamShape
                count(): long
            }
        }
    }
}