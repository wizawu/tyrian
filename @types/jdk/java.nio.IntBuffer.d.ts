declare namespace java {
  namespace nio {

    abstract class IntBuffer extends java.nio.Buffer implements java.lang.Comparable<java.nio.IntBuffer> {
      readonly hb: int[]
      readonly offset: int
      isReadOnly: boolean
      constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int[], arg5: int)
      constructor(arg0: int, arg1: int, arg2: int, arg3: int)
      base(): java.lang.Object
      public static allocate(arg0: int): java.nio.IntBuffer
      public static wrap(arg0: int[], arg1: int, arg2: int): java.nio.IntBuffer
      public static wrap(arg0: int[]): java.nio.IntBuffer
      public abstract slice(): java.nio.IntBuffer
      public abstract duplicate(): java.nio.IntBuffer
      public abstract asReadOnlyBuffer(): java.nio.IntBuffer
      public abstract get(): int
      public abstract put(arg0: int): java.nio.IntBuffer
      public abstract get(arg0: int): int
      public abstract put(arg0: int, arg1: int): java.nio.IntBuffer
      public get(arg0: int[], arg1: int, arg2: int): java.nio.IntBuffer
      public get(arg0: int[]): java.nio.IntBuffer
      public put(arg0: java.nio.IntBuffer): java.nio.IntBuffer
      public put(arg0: int[], arg1: int, arg2: int): java.nio.IntBuffer
      public put(arg0: int[]): java.nio.IntBuffer
      public hasArray(): boolean
      public array(): int[]
      public arrayOffset(): int
      public position(arg0: int): java.nio.IntBuffer
      public limit(arg0: int): java.nio.IntBuffer
      public mark(): java.nio.IntBuffer
      public reset(): java.nio.IntBuffer
      public clear(): java.nio.IntBuffer
      public flip(): java.nio.IntBuffer
      public rewind(): java.nio.IntBuffer
      public abstract compact(): java.nio.IntBuffer
      public abstract isDirect(): boolean
      public toString(): java.lang.String
      public hashCode(): int
      public equals(arg0: java.lang.Object): boolean
      public compareTo(arg0: java.nio.IntBuffer): int
      public mismatch(arg0: java.nio.IntBuffer): int
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
