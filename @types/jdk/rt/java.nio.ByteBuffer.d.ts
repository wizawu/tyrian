declare namespace java {
    namespace nio {
        abstract class ByteBuffer extends java.nio.Buffer implements java.lang.Comparable<java.nio.ByteBuffer> {
            public static allocateDirect(arg0: int): java.nio.ByteBuffer
            public static allocate(arg0: int): java.nio.ByteBuffer
            public static wrap(arg0: byte[], arg1: int, arg2: int): java.nio.ByteBuffer
            public static wrap(arg0: byte[]): java.nio.ByteBuffer
            public abstract slice(): java.nio.ByteBuffer
            public abstract duplicate(): java.nio.ByteBuffer
            public abstract asReadOnlyBuffer(): java.nio.ByteBuffer
            public abstract get(): byte
            public abstract put(arg0: byte): java.nio.ByteBuffer
            public abstract get(arg0: int): byte
            public abstract put(arg0: int, arg1: byte): java.nio.ByteBuffer
            public get(arg0: byte[], arg1: int, arg2: int): java.nio.ByteBuffer
            public get(arg0: byte[]): java.nio.ByteBuffer
            public put(arg0: java.nio.ByteBuffer): java.nio.ByteBuffer
            public put(arg0: byte[], arg1: int, arg2: int): java.nio.ByteBuffer
            public put(arg0: byte[]): java.nio.ByteBuffer
            public hasArray(): boolean
            public array(): byte[]
            public arrayOffset(): int
            public abstract compact(): java.nio.ByteBuffer
            public abstract isDirect(): boolean
            public toString(): string
            public hashCode(): int
            public equals(arg0: java.lang.Object): boolean
            public compareTo(arg0: java.nio.ByteBuffer): int
            public order(): java.nio.ByteOrder
            public order(arg0: java.nio.ByteOrder): java.nio.ByteBuffer
            public abstract getChar(): char
            public abstract putChar(arg0: char): java.nio.ByteBuffer
            public abstract getChar(arg0: int): char
            public abstract putChar(arg0: int, arg1: char): java.nio.ByteBuffer
            public abstract asCharBuffer(): java.nio.CharBuffer
            public abstract getShort(): short
            public abstract putShort(arg0: short): java.nio.ByteBuffer
            public abstract getShort(arg0: int): short
            public abstract putShort(arg0: int, arg1: short): java.nio.ByteBuffer
            public abstract asShortBuffer(): java.nio.ShortBuffer
            public abstract getInt(): int
            public abstract putInt(arg0: int): java.nio.ByteBuffer
            public abstract getInt(arg0: int): int
            public abstract putInt(arg0: int, arg1: int): java.nio.ByteBuffer
            public abstract asIntBuffer(): java.nio.IntBuffer
            public abstract getLong(): long
            public abstract putLong(arg0: long): java.nio.ByteBuffer
            public abstract getLong(arg0: int): long
            public abstract putLong(arg0: int, arg1: long): java.nio.ByteBuffer
            public abstract asLongBuffer(): java.nio.LongBuffer
            public abstract getFloat(): float
            public abstract putFloat(arg0: float): java.nio.ByteBuffer
            public abstract getFloat(arg0: int): float
            public abstract putFloat(arg0: int, arg1: float): java.nio.ByteBuffer
            public abstract asFloatBuffer(): java.nio.FloatBuffer
            public abstract getDouble(): double
            public abstract putDouble(arg0: double): java.nio.ByteBuffer
            public abstract getDouble(arg0: int): double
            public abstract putDouble(arg0: int, arg1: double): java.nio.ByteBuffer
            public abstract asDoubleBuffer(): java.nio.DoubleBuffer
            public array(): java.lang.Object
            public compareTo(arg0: java.lang.Object): int
            public static class: java.lang.Class<any>
        }
    }
}