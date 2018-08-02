declare namespace java {
    namespace util {
        namespace stream {
            class Nodes$DoubleSpinedNodeBuilder extends java.util.stream.SpinedBuffer$OfDouble implements java.util.stream.Node$OfDouble , java.util.stream.Node$Builder$OfDouble {
                public spliterator(): java.util.Spliterator$OfDouble
                public forEach(arg0: java.util.function$.DoubleConsumer): void
                public begin(arg0: long): void
                public accept(arg0: double): void
                public end(): void
                public copyInto(arg0: double[], arg1: int): void
                public asPrimitiveArray(): double[]
                public build(): java.util.stream.Node$OfDouble
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