declare namespace java {
    namespace util {
        namespace stream {
interface Node$OfPrimitive<T, T_CONS, T_ARR, T_SPLITR extends java.util.Spliterator$OfPrimitive<T, T_CONS, T_SPLITR>, T_NODE extends java.util.stream.Node$OfPrimitive<T, T_CONS, T_ARR, T_SPLITR, T_NODE>> extends java.util.stream.Node<T> {
    spliterator(): T_SPLITR
    forEach(arg0: T_CONS): void
    getChild(arg0: int): T_NODE
    truncate(arg0: long, arg1: long, arg2: java.util.function$.IntFunction<T[]> | java.util.function$.IntFunction$$Lambda<T[]>): T_NODE
    asArray(arg0: java.util.function$.IntFunction<T[]> | java.util.function$.IntFunction$$Lambda<T[]>): T[]
    asPrimitiveArray(): T_ARR
    newArray(arg0: int): T_ARR
    copyInto(arg0: T_ARR, arg1: int): void
    truncate(arg0: long, arg1: long, arg2: java.util.function$.IntFunction | java.util.function$.IntFunction$$Lambda): java.util.stream.Node
    getChild(arg0: int): java.util.stream.Node
    spliterator(): java.util.Spliterator
}

        }
    }
}