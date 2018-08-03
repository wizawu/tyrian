declare namespace java {
    namespace util {
        namespace stream {
            abstract class Nodes$ToArrayTask<T, T_NODE extends java.util.stream.Node<T>, K extends java.util.stream.Nodes$ToArrayTask<T, T_NODE, K>> extends java.util.concurrent.CountedCompleter<java.lang.Void> {
                protected readonly node: T_NODE
                protected readonly offset: int
                public compute(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}