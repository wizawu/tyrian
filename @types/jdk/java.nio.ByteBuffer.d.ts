declare namespace java {
  namespace nio {
    abstract class ByteBuffer extends java.nio.Buffer implements java.lang.Comparable<java.nio.ByteBuffer> {
      readonly hb: byte[]
      readonly offset: int
      isReadOnly: boolean
      bigEndian: boolean
      nativeByteOrder: boolean
      constructor(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: number[] | java.lang.Byte[],
        arg5: number | java.lang.Integer
      )
      constructor(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer
      )
      base(): java.lang.Object
      public static allocateDirect(arg0: number | java.lang.Integer): java.nio.ByteBuffer
      public static allocate(arg0: number | java.lang.Integer): java.nio.ByteBuffer
      public static wrap(
        arg0: number[] | java.lang.Byte[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.nio.ByteBuffer
      public static wrap(arg0: number[] | java.lang.Byte[]): java.nio.ByteBuffer
      public abstract slice(): java.nio.ByteBuffer
      public abstract duplicate(): java.nio.ByteBuffer
      public abstract asReadOnlyBuffer(): java.nio.ByteBuffer
      public abstract get(): number
      public abstract put(arg0: number | java.lang.Byte): java.nio.ByteBuffer
      public abstract get(arg0: number | java.lang.Integer): number
      public abstract put(arg0: number | java.lang.Integer, arg1: number | java.lang.Byte): java.nio.ByteBuffer
      public get(
        arg0: number[] | java.lang.Byte[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.nio.ByteBuffer
      public get(arg0: number[] | java.lang.Byte[]): java.nio.ByteBuffer
      public put(arg0: java.nio.ByteBuffer): java.nio.ByteBuffer
      public put(
        arg0: number[] | java.lang.Byte[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.nio.ByteBuffer
      public put(arg0: number[] | java.lang.Byte[]): java.nio.ByteBuffer
      public hasArray(): boolean
      public array(): number[]
      public arrayOffset(): number
      public position(arg0: number | java.lang.Integer): java.nio.ByteBuffer
      public limit(arg0: number | java.lang.Integer): java.nio.ByteBuffer
      public mark(): java.nio.ByteBuffer
      public reset(): java.nio.ByteBuffer
      public clear(): java.nio.ByteBuffer
      public flip(): java.nio.ByteBuffer
      public rewind(): java.nio.ByteBuffer
      public abstract compact(): java.nio.ByteBuffer
      public abstract isDirect(): boolean
      public toString(): java.lang.String
      public hashCode(): number
      public equals(arg0: java.lang.Object | any): boolean
      public compareTo(arg0: java.nio.ByteBuffer): number
      public mismatch(arg0: java.nio.ByteBuffer): number
      public order(): java.nio.ByteOrder
      public order(arg0: java.nio.ByteOrder): java.nio.ByteBuffer
      public alignmentOffset(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
      public alignedSlice(arg0: number | java.lang.Integer): java.nio.ByteBuffer
      abstract slice(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.nio.ByteBuffer
      public abstract getChar(): string
      public abstract putChar(arg0: string | java.lang.Character): java.nio.ByteBuffer
      public abstract getChar(arg0: number | java.lang.Integer): string
      public abstract putChar(arg0: number | java.lang.Integer, arg1: string | java.lang.Character): java.nio.ByteBuffer
      public abstract asCharBuffer(): java.nio.CharBuffer
      public abstract getShort(): number
      public abstract putShort(arg0: number | java.lang.Short): java.nio.ByteBuffer
      public abstract getShort(arg0: number | java.lang.Integer): number
      public abstract putShort(arg0: number | java.lang.Integer, arg1: number | java.lang.Short): java.nio.ByteBuffer
      public abstract asShortBuffer(): java.nio.ShortBuffer
      public abstract getInt(): number
      public abstract putInt(arg0: number | java.lang.Integer): java.nio.ByteBuffer
      public abstract getInt(arg0: number | java.lang.Integer): number
      public abstract putInt(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.nio.ByteBuffer
      public abstract asIntBuffer(): java.nio.IntBuffer
      public abstract getLong(): number
      public abstract putLong(arg0: number | java.lang.Long): java.nio.ByteBuffer
      public abstract getLong(arg0: number | java.lang.Integer): number
      public abstract putLong(arg0: number | java.lang.Integer, arg1: number | java.lang.Long): java.nio.ByteBuffer
      public abstract asLongBuffer(): java.nio.LongBuffer
      public abstract getFloat(): number
      public abstract putFloat(arg0: number | java.lang.Float): java.nio.ByteBuffer
      public abstract getFloat(arg0: number | java.lang.Integer): number
      public abstract putFloat(arg0: number | java.lang.Integer, arg1: number | java.lang.Float): java.nio.ByteBuffer
      public abstract asFloatBuffer(): java.nio.FloatBuffer
      public abstract getDouble(): number
      public abstract putDouble(arg0: number | java.lang.Double): java.nio.ByteBuffer
      public abstract getDouble(arg0: number | java.lang.Integer): number
      public abstract putDouble(arg0: number | java.lang.Integer, arg1: number | java.lang.Double): java.nio.ByteBuffer
      public abstract asDoubleBuffer(): java.nio.DoubleBuffer
      public duplicate(): java.nio.Buffer
      public slice(): java.nio.Buffer
      public array(): java.lang.Object
      public rewind(): java.nio.Buffer
      public flip(): java.nio.Buffer
      public clear(): java.nio.Buffer
      public reset(): java.nio.Buffer
      public mark(): java.nio.Buffer
      public limit(arg0: number | java.lang.Integer): java.nio.Buffer
      public position(arg0: number | java.lang.Integer): java.nio.Buffer
      public compareTo(arg0: java.lang.Object | any): number
    }
  }
}
