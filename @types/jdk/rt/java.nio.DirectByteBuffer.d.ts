declare namespace java {
    namespace nio {
        class DirectByteBuffer extends java.nio.MappedByteBuffer implements sun.nio.ch.DirectBuffer {
            protected static unsafe: sun.misc.Unsafe
            protected static unaligned: boolean
            public attachment(): java.lang.Object
            public cleaner(): sun.misc.Cleaner
            protected constructor(arg0: int, arg1: long, arg2: java.io.FileDescriptor, arg3: java.lang.Runnable | java.lang.Runnable$$Lambda)
            public slice(): java.nio.ByteBuffer
            public duplicate(): java.nio.ByteBuffer
            public asReadOnlyBuffer(): java.nio.ByteBuffer
            public address(): long
            public get(): byte
            public get(arg0: int): byte
            public get(arg0: byte[], arg1: int, arg2: int): java.nio.ByteBuffer
            public put(arg0: byte): java.nio.ByteBuffer
            public put(arg0: int, arg1: byte): java.nio.ByteBuffer
            public put(arg0: java.nio.ByteBuffer): java.nio.ByteBuffer
            public put(arg0: byte[], arg1: int, arg2: int): java.nio.ByteBuffer
            public compact(): java.nio.ByteBuffer
            public isDirect(): boolean
            public isReadOnly(): boolean
            public getChar(): char
            public getChar(arg0: int): char
            public putChar(arg0: char): java.nio.ByteBuffer
            public putChar(arg0: int, arg1: char): java.nio.ByteBuffer
            public asCharBuffer(): java.nio.CharBuffer
            public getShort(): short
            public getShort(arg0: int): short
            public putShort(arg0: short): java.nio.ByteBuffer
            public putShort(arg0: int, arg1: short): java.nio.ByteBuffer
            public asShortBuffer(): java.nio.ShortBuffer
            public getInt(): int
            public getInt(arg0: int): int
            public putInt(arg0: int): java.nio.ByteBuffer
            public putInt(arg0: int, arg1: int): java.nio.ByteBuffer
            public asIntBuffer(): java.nio.IntBuffer
            public getLong(): long
            public getLong(arg0: int): long
            public putLong(arg0: long): java.nio.ByteBuffer
            public putLong(arg0: int, arg1: long): java.nio.ByteBuffer
            public asLongBuffer(): java.nio.LongBuffer
            public getFloat(): float
            public getFloat(arg0: int): float
            public putFloat(arg0: float): java.nio.ByteBuffer
            public putFloat(arg0: int, arg1: float): java.nio.ByteBuffer
            public asFloatBuffer(): java.nio.FloatBuffer
            public getDouble(): double
            public getDouble(arg0: int): double
            public putDouble(arg0: double): java.nio.ByteBuffer
            public putDouble(arg0: int, arg1: double): java.nio.ByteBuffer
            public asDoubleBuffer(): java.nio.DoubleBuffer
            public static class: java.lang.Class<any>
        }
    }
}