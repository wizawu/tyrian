declare namespace java {
    namespace util {
        namespace stream {
            interface Node$OfDouble extends java.util.stream.Node$OfPrimitive<java.lang.Double, java.util.function$.DoubleConsumer, double[], java.util.Spliterator$OfDouble, java.util.stream.Node$OfDouble> {
                forEach(arg0: java.util.function$.Consumer<java.lang.Double>): void
                copyInto(arg0: java.lang.Double[], arg1: int): void
                truncate(arg0: long, arg1: long, arg2: java.util.function$.IntFunction<java.lang.Double[]> | java.util.function$.IntFunction$$Lambda<java.lang.Double[]>): java.util.stream.Node$OfDouble
                newArray(arg0: int): double[]
                getShape(): java.util.stream.StreamShape
                newArray(arg0: int): java.lang.Object
                truncate(arg0: long, arg1: long, arg2: java.util.function$.IntFunction | java.util.function$.IntFunction$$Lambda): java.util.stream.Node$OfPrimitive
                copyInto(arg0: java.lang.Object[], arg1: int): void
                truncate(arg0: long, arg1: long, arg2: java.util.function$.IntFunction | java.util.function$.IntFunction$$Lambda): java.util.stream.Node
            }
        }
    }
}