declare namespace java {
    namespace util {
        namespace stream {
class SpinedBuffer$OfDouble extends java.util.stream.SpinedBuffer$OfPrimitive<java.lang.Double, double[], java.util.function$.DoubleConsumer> implements java.util.function$.DoubleConsumer {
    public forEach(arg0: java.util.function$.Consumer<java.lang.Double>): void
    protected newArrayArray(arg0: int): double[][]
    public newArray(arg0: int): double[]
    protected arrayLength(arg0: double[]): int
    protected arrayForEach(arg0: double[], arg1: int, arg2: int, arg3: java.util.function$.DoubleConsumer): void
    public accept(arg0: double): void
    public get(arg0: long): double
    public iterator(): java.util.PrimitiveIterator$OfDouble
    public spliterator(): java.util.Spliterator$OfDouble
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