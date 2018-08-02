declare namespace java {
    namespace util {
        namespace stream {
            interface Node$OfLong extends java.util.stream.Node$OfPrimitive<java.lang.Long, java.util.function$.LongConsumer, long[], java.util.Spliterator$OfLong, java.util.stream.Node$OfLong> {
                forEach(arg0: java.util.function$.Consumer<java.lang.Long>): void
                copyInto(arg0: java.lang.Long[], arg1: int): void
                truncate(arg0: long, arg1: long, arg2: java.util.function$.IntFunction<java.lang.Long[]> | java.util.function$.IntFunction$$Lambda<java.lang.Long[]>): java.util.stream.Node$OfLong
                newArray(arg0: int): long[]
                getShape(): java.util.stream.StreamShape
                newArray(arg0: int): java.lang.Object
                truncate(arg0: long, arg1: long, arg2: java.util.function$.IntFunction | java.util.function$.IntFunction$$Lambda): java.util.stream.Node$OfPrimitive
                copyInto(arg0: java.lang.Object[], arg1: int): void
                truncate(arg0: long, arg1: long, arg2: java.util.function$.IntFunction | java.util.function$.IntFunction$$Lambda): java.util.stream.Node
            }
        }
    }
}