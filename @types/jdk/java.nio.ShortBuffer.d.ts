declare namespace java {
  namespace nio {

    abstract class ShortBuffer extends java.nio.Buffer implements java.lang.Comparable<java.nio.ShortBuffer> {
      readonly hb: short[]
      readonly offset: int
      isReadOnly: boolean
      constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: short[], arg5: int)
      constructor(arg0: int, arg1: int, arg2: int, arg3: int)
      base(): java.lang.Object
      public static allocate(arg0: int): java.nio.ShortBuffer
      public static wrap(arg0: short[], arg1: int, arg2: int): java.nio.ShortBuffer
      public static wrap(arg0: short[]): java.nio.ShortBuffer
      public abstract slice(): java.nio.ShortBuffer
      public abstract duplicate(): java.nio.ShortBuffer
      public abstract asReadOnlyBuffer(): java.nio.ShortBuffer
      public abstract get(): short
      public abstract put(arg0: short): java.nio.ShortBuffer
      public abstract get(arg0: int): short
      public abstract put(arg0: int, arg1: short): java.nio.ShortBuffer
      public get(arg0: short[], arg1: int, arg2: int): java.nio.ShortBuffer
      public get(arg0: short[]): java.nio.ShortBuffer
      public put(arg0: java.nio.ShortBuffer): java.nio.ShortBuffer
      public put(arg0: short[], arg1: int, arg2: int): java.nio.ShortBuffer
      public put(arg0: short[]): java.nio.ShortBuffer
      public hasArray(): boolean
      public array(): short[]
      public arrayOffset(): int
      public position(arg0: int): java.nio.ShortBuffer
      public limit(arg0: int): java.nio.ShortBuffer
      public mark(): java.nio.ShortBuffer
      public reset(): java.nio.ShortBuffer
      public clear(): java.nio.ShortBuffer
      public flip(): java.nio.ShortBuffer
      public rewind(): java.nio.ShortBuffer
      public abstract compact(): java.nio.ShortBuffer
      public abstract isDirect(): boolean
      public toString(): java.lang.String
      public hashCode(): int
      public equals(arg0: java.lang.Object): boolean
      public compareTo(arg0: java.nio.ShortBuffer): int
      public mismatch(arg0: java.nio.ShortBuffer): int
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
