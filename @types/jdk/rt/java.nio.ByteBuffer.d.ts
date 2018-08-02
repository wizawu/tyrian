declare namespace java {
    namespace nio {
        abstract class ByteBuffer extends java.nio.Buffer implements java.lang.Comparable<java.nio.ByteBuffer> {
            public static allocateDirect(arg0: int): java.nio.ByteBuffer
            public static allocate(arg0: int): java.nio.ByteBuffer
            public static wrap(arg0: byte[], arg1: int, arg2: int): java.nio.ByteBuffer
            public static wrap(arg0: byte[]): java.nio.ByteBuffer
            public slice(): java.nio.ByteBuffer
            public duplicate(): java.nio.ByteBuffer
            public asReadOnlyBuffer(): java.nio.ByteBuffer
            public get(): byte
            public put(arg0: byte): java.nio.ByteBuffer
            public get(arg0: int): byte
            public put(arg0: int, arg1: byte): java.nio.ByteBuffer
            public get(arg0: byte[], arg1: int, arg2: int): java.nio.ByteBuffer
            public get(arg0: byte[]): java.nio.ByteBuffer
            public put(arg0: java.nio.ByteBuffer): java.nio.ByteBuffer
            public put(arg0: byte[], arg1: int, arg2: int): java.nio.ByteBuffer
            public put(arg0: byte[]): java.nio.ByteBuffer
            public hasArray(): boolean
            public array(): byte[]
            public arrayOffset(): int
            public compact(): java.nio.ByteBuffer
            public isDirect(): boolean
            public toString(): string
            public hashCode(): int
            public equals(arg0: java.lang.Object): boolean
            public compareTo(arg0: java.nio.ByteBuffer): int
            public order(): java.nio.ByteOrder
            public order(arg0: java.nio.ByteOrder): java.nio.ByteBuffer
            public getChar(): char
            public putChar(arg0: char): java.nio.ByteBuffer
            public getChar(arg0: int): char
            public putChar(arg0: int, arg1: char): java.nio.ByteBuffer
            public asCharBuffer(): java.nio.CharBuffer
            public getShort(): short
            public putShort(arg0: short): java.nio.ByteBuffer
            public getShort(arg0: int): short
            public putShort(arg0: int, arg1: short): java.nio.ByteBuffer
            public asShortBuffer(): java.nio.ShortBuffer
            public getInt(): int
            public putInt(arg0: int): java.nio.ByteBuffer
            public getInt(arg0: int): int
            public putInt(arg0: int, arg1: int): java.nio.ByteBuffer
            public asIntBuffer(): java.nio.IntBuffer
            public getLong(): long
            public putLong(arg0: long): java.nio.ByteBuffer
            public getLong(arg0: int): long
            public putLong(arg0: int, arg1: long): java.nio.ByteBuffer
            public asLongBuffer(): java.nio.LongBuffer
            public getFloat(): float
            public putFloat(arg0: float): java.nio.ByteBuffer
            public getFloat(arg0: int): float
            public putFloat(arg0: int, arg1: float): java.nio.ByteBuffer
            public asFloatBuffer(): java.nio.FloatBuffer
            public getDouble(): double
            public putDouble(arg0: double): java.nio.ByteBuffer
            public getDouble(arg0: int): double
            public putDouble(arg0: int, arg1: double): java.nio.ByteBuffer
            public asDoubleBuffer(): java.nio.DoubleBuffer
            public array(): java.lang.Object
            public compareTo(arg0: java.lang.Object): int
            public static class: java.lang.Class<any>
        }
    }
}