declare namespace java {
    namespace util {
        namespace stream {
abstract class Nodes$InternalNodeSpliterator<T, S extends java.util.Spliterator<T>, N extends java.util.stream.Node<T>> implements java.util.Spliterator<T> {
    protected initStack(): java.util.Deque<N>
    protected findNextLeafNode(arg0: java.util.Deque<N>): N
    protected initTryAdvance(): boolean
    public trySplit(): S
    public estimateSize(): long
    public characteristics(): int
    public static class: java.lang.Class<any>
}

        }
    }
}