declare namespace java {
    namespace util {
        namespace stream {
interface Node$OfInt extends java.util.stream.Node$OfPrimitive<java.lang.Integer, java.util.function$.IntConsumer, int[], java.util.Spliterator$OfInt, java.util.stream.Node$OfInt> {
    forEach(arg0: java.util.function$.Consumer<java.lang.Integer>): void
    copyInto(arg0: java.lang.Integer[], arg1: int): void
    truncate(arg0: long, arg1: long, arg2: java.util.function$.IntFunction<java.lang.Integer[]> | java.util.function$.IntFunction$$Lambda<java.lang.Integer[]>): java.util.stream.Node$OfInt
    newArray(arg0: int): int[]
    getShape(): java.util.stream.StreamShape
    newArray(arg0: int): java.lang.Object
    truncate(arg0: long, arg1: long, arg2: java.util.function$.IntFunction | java.util.function$.IntFunction$$Lambda): java.util.stream.Node$OfPrimitive
    copyInto(arg0: java.lang.Object[], arg1: int): void
    truncate(arg0: long, arg1: long, arg2: java.util.function$.IntFunction | java.util.function$.IntFunction$$Lambda): java.util.stream.Node
}

        }
    }
}