declare namespace java {
    namespace util {
        namespace stream {
abstract class Nodes$AbstractConcNode<T, T_NODE extends java.util.stream.Node<T>> implements java.util.stream.Node<T> {
    protected left: T_NODE
    protected right: T_NODE
    public getChildCount(): int
    public getChild(arg0: int): T_NODE
    public count(): long
    public static class: java.lang.Class<any>
}

        }
    }
}