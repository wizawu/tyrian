declare namespace java {
    namespace util {
        namespace stream {
            class SpinedBuffer$OfInt extends java.util.stream.SpinedBuffer$OfPrimitive<java.lang.Integer, int[], java.util.function$.IntConsumer> implements java.util.function$.IntConsumer {
                public forEach(arg0: java.util.function$.Consumer<java.lang.Integer>): void
                protected newArrayArray(arg0: int): int[][]
                public newArray(arg0: int): int[]
                protected arrayLength(arg0: int[]): int
                protected arrayForEach(arg0: int[], arg1: int, arg2: int, arg3: java.util.function$.IntConsumer): void
                public accept(arg0: int): void
                public get(arg0: long): int
                public iterator(): java.util.PrimitiveIterator$OfInt
                public spliterator(): java.util.Spliterator$OfInt
                public toString(): string
                protected arrayForEach(arg0: java.lang.Object, arg1: int, arg2: int, arg3: java.lang.Object): void
                protected arrayLength(arg0: java.lang.Object): int
                public newArray(arg0: int): java.lang.Object
                protected newArrayArray(arg0: int): java.lang.Object[]
                public iterator(): java.util.Iterator
                public spliterator(): java.util.Spliterator
                public static class: java.lang.Class<any>
            }
        }
    }
}