declare namespace java {
    namespace util {
        namespace stream {
            class Nodes$LongSpinedNodeBuilder extends java.util.stream.SpinedBuffer$OfLong implements java.util.stream.Node$OfLong , java.util.stream.Node$Builder$OfLong {
                public spliterator(): java.util.Spliterator$OfLong
                public forEach(arg0: java.util.function$.LongConsumer): void
                public begin(arg0: long): void
                public accept(arg0: long): void
                public end(): void
                public copyInto(arg0: long[], arg1: int): void
                public asPrimitiveArray(): long[]
                public build(): java.util.stream.Node$OfLong
                public forEach(arg0: java.lang.Object): void
                public asPrimitiveArray(): java.lang.Object
                public copyInto(arg0: java.lang.Object, arg1: int): void
                public spliterator(): java.util.Spliterator
                public spliterator(): java.util.Spliterator$OfPrimitive
                public build(): java.util.stream.Node
                public static class: java.lang.Class<any>
            }
        }
    }
}