declare namespace java {
    namespace util {
        namespace stream {
class SpinedBuffer$OfLong extends java.util.stream.SpinedBuffer$OfPrimitive<java.lang.Long, long[], java.util.function$.LongConsumer> implements java.util.function$.LongConsumer {
    public forEach(arg0: java.util.function$.Consumer<java.lang.Long>): void
    protected newArrayArray(arg0: int): long[][]
    public newArray(arg0: int): long[]
    protected arrayLength(arg0: long[]): int
    protected arrayForEach(arg0: long[], arg1: int, arg2: int, arg3: java.util.function$.LongConsumer): void
    public accept(arg0: long): void
    public get(arg0: long): long
    public iterator(): java.util.PrimitiveIterator$OfLong
    public spliterator(): java.util.Spliterator$OfLong
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