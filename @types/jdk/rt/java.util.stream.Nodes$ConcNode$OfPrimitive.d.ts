declare namespace java {
    namespace util {
        namespace stream {
abstract class Nodes$ConcNode$OfPrimitive<E, T_CONS, T_ARR, T_SPLITR extends java.util.Spliterator$OfPrimitive<E, T_CONS, T_SPLITR>, T_NODE extends java.util.stream.Node$OfPrimitive<E, T_CONS, T_ARR, T_SPLITR, T_NODE>> extends java.util.stream.Nodes$AbstractConcNode<E, T_NODE> implements java.util.stream.Node$OfPrimitive<E, T_CONS, T_ARR, T_SPLITR, T_NODE> {
    public forEach(arg0: T_CONS): void
    public copyInto(arg0: T_ARR, arg1: int): void
    public asPrimitiveArray(): T_ARR
    public toString(): string
    public getChild(arg0: int): java.util.stream.Node$OfPrimitive
    public static class: java.lang.Class<any>
}

        }
    }
}