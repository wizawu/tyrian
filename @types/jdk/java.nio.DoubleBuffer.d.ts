declare namespace java {
  namespace nio {

    abstract class DoubleBuffer extends java.nio.Buffer implements java.lang.Comparable<java.nio.DoubleBuffer> {
      readonly hb: double[]
      readonly offset: int
      isReadOnly: boolean
      constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: double[], arg5: int)
      constructor(arg0: int, arg1: int, arg2: int, arg3: int)
      base(): java.lang.Object
      public static allocate(arg0: int): java.nio.DoubleBuffer
      public static wrap(arg0: double[], arg1: int, arg2: int): java.nio.DoubleBuffer
      public static wrap(arg0: double[]): java.nio.DoubleBuffer
      public abstract slice(): java.nio.DoubleBuffer
      public abstract duplicate(): java.nio.DoubleBuffer
      public abstract asReadOnlyBuffer(): java.nio.DoubleBuffer
      public abstract get(): double
      public abstract put(arg0: double): java.nio.DoubleBuffer
      public abstract get(arg0: int): double
      public abstract put(arg0: int, arg1: double): java.nio.DoubleBuffer
      public get(arg0: double[], arg1: int, arg2: int): java.nio.DoubleBuffer
      public get(arg0: double[]): java.nio.DoubleBuffer
      public put(arg0: java.nio.DoubleBuffer): java.nio.DoubleBuffer
      public put(arg0: double[], arg1: int, arg2: int): java.nio.DoubleBuffer
      public put(arg0: double[]): java.nio.DoubleBuffer
      public hasArray(): boolean
      public array(): double[]
      public arrayOffset(): int
      public position(arg0: int): java.nio.DoubleBuffer
      public limit(arg0: int): java.nio.DoubleBuffer
      public mark(): java.nio.DoubleBuffer
      public reset(): java.nio.DoubleBuffer
      public clear(): java.nio.DoubleBuffer
      public flip(): java.nio.DoubleBuffer
      public rewind(): java.nio.DoubleBuffer
      public abstract compact(): java.nio.DoubleBuffer
      public abstract isDirect(): boolean
      public toString(): java.lang.String
      public hashCode(): int
      public equals(arg0: java.lang.Object): boolean
      public compareTo(arg0: java.nio.DoubleBuffer): int
      public mismatch(arg0: java.nio.DoubleBuffer): int
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
