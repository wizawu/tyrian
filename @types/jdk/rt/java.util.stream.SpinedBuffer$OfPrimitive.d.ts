declare namespace java {
    namespace util {
        namespace stream {
            abstract class SpinedBuffer$OfPrimitive<E, T_ARR, T_CONS> extends java.util.stream.AbstractSpinedBuffer implements java.lang.Iterable<E> {
                public iterator(): java.util.Iterator<E>
                public forEach(arg0: java.util.function$.Consumer$$Lambda<E>): void
                protected newArrayArray(arg0: int): T_ARR[]
                public newArray(arg0: int): T_ARR
                protected arrayLength(arg0: T_ARR): int
                protected arrayForEach(arg0: T_ARR, arg1: int, arg2: int, arg3: T_CONS): void
                protected capacity(): long
                protected ensureCapacity(arg0: long): void
                protected increaseCapacity(): void
                protected chunkFor(arg0: long): int
                public copyInto(arg0: T_ARR, arg1: int): void
                public asPrimitiveArray(): T_ARR
                protected preAccept(): void
                public clear(): void
                public forEach(arg0: T_CONS): void
                public static class: java.lang.Class<any>
            }
        }
    }
}