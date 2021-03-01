declare namespace java {
  namespace nio {

    abstract class FloatBuffer extends java.nio.Buffer implements java.lang.Comparable<java.nio.FloatBuffer> {

      readonly hb: float[]
      readonly offset: int
      isReadOnly: boolean
      constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: float[], arg5: int)
      constructor(arg0: int, arg1: int, arg2: int, arg3: int)
      base(): java.lang.Object
      public static allocate(arg0: int): java.nio.FloatBuffer
      public static wrap(arg0: float[], arg1: int, arg2: int): java.nio.FloatBuffer
      public static wrap(arg0: float[]): java.nio.FloatBuffer
      public abstract slice(): java.nio.FloatBuffer
      public abstract duplicate(): java.nio.FloatBuffer
      public abstract asReadOnlyBuffer(): java.nio.FloatBuffer
      public abstract get(): float
      public abstract put(arg0: float): java.nio.FloatBuffer
      public abstract get(arg0: int): float
      public abstract put(arg0: int, arg1: float): java.nio.FloatBuffer
      public get(arg0: float[], arg1: int, arg2: int): java.nio.FloatBuffer
      public get(arg0: float[]): java.nio.FloatBuffer
      public put(arg0: java.nio.FloatBuffer): java.nio.FloatBuffer
      public put(arg0: float[], arg1: int, arg2: int): java.nio.FloatBuffer
      public readonly put(arg0: float[]): java.nio.FloatBuffer
      public readonly hasArray(): boolean
      public readonly array(): float[]
      public readonly arrayOffset(): int
      public readonly position(arg0: int): java.nio.FloatBuffer
      public readonly limit(arg0: int): java.nio.FloatBuffer
      public readonly mark(): java.nio.FloatBuffer
      public readonly reset(): java.nio.FloatBuffer
      public readonly clear(): java.nio.FloatBuffer
      public readonly flip(): java.nio.FloatBuffer
      public readonly rewind(): java.nio.FloatBuffer
      public abstract compact(): java.nio.FloatBuffer
      public abstract isDirect(): boolean
      public toString(): java.lang.String
      public hashCode(): int
      public equals(arg0: java.lang.Object): boolean
      public compareTo(arg0: java.nio.FloatBuffer): int
      public mismatch(arg0: java.nio.FloatBuffer): int
      public abstract order(): java.nio.ByteOrder
      public duplicate(): java.nio.Buffer
      public slice(): java.nio.Buffer
      public array(): java.lang.Object
      public rewind(): java.nio.Buffer
      public flip(): java.nio.Buffer
      public clear(): java.nio.Buffer
      public reset(): java.nio.Buffer
      public mark(): java.nio.Buffer
      public limit(arg0: int): java.nio.Buffer
      public position(arg0: int): java.nio.Buffer
      public compareTo(arg0: java.lang.Object): int
    }

  }
}
