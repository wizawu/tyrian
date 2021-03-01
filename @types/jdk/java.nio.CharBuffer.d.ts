declare namespace java {
  namespace nio {

    abstract class CharBuffer extends java.nio.Buffer implements java.lang.Comparable<java.nio.CharBuffer>, java.lang.Appendable, java.lang.CharSequence, java.lang.Readable {

      readonly hb: char[]
      readonly offset: int
      isReadOnly: boolean
      constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: char[], arg5: int)
      constructor(arg0: int, arg1: int, arg2: int, arg3: int)
      base(): java.lang.Object
      public static allocate(arg0: int): java.nio.CharBuffer
      public static wrap(arg0: char[], arg1: int, arg2: int): java.nio.CharBuffer
      public static wrap(arg0: char[]): java.nio.CharBuffer
      public read(arg0: java.nio.CharBuffer): int
      public static wrap(arg0: java.lang.CharSequence, arg1: int, arg2: int): java.nio.CharBuffer
      public static wrap(arg0: java.lang.CharSequence): java.nio.CharBuffer
      public abstract slice(): java.nio.CharBuffer
      public abstract duplicate(): java.nio.CharBuffer
      public abstract asReadOnlyBuffer(): java.nio.CharBuffer
      public abstract get(): char
      public abstract put(arg0: char): java.nio.CharBuffer
      public abstract get(arg0: int): char
      abstract getUnchecked(arg0: int): char
      public abstract put(arg0: int, arg1: char): java.nio.CharBuffer
      public get(arg0: char[], arg1: int, arg2: int): java.nio.CharBuffer
      public get(arg0: char[]): java.nio.CharBuffer
      public put(arg0: java.nio.CharBuffer): java.nio.CharBuffer
      public put(arg0: char[], arg1: int, arg2: int): java.nio.CharBuffer
      public readonly put(arg0: char[]): java.nio.CharBuffer
      public put(arg0: java.lang.String, arg1: int, arg2: int): java.nio.CharBuffer
      public readonly put(arg0: java.lang.String): java.nio.CharBuffer
      public readonly hasArray(): boolean
      public readonly array(): char[]
      public readonly arrayOffset(): int
      public readonly position(arg0: int): java.nio.CharBuffer
      public readonly limit(arg0: int): java.nio.CharBuffer
      public readonly mark(): java.nio.CharBuffer
      public readonly reset(): java.nio.CharBuffer
      public readonly clear(): java.nio.CharBuffer
      public readonly flip(): java.nio.CharBuffer
      public readonly rewind(): java.nio.CharBuffer
      public abstract compact(): java.nio.CharBuffer
      public abstract isDirect(): boolean
      public hashCode(): int
      public equals(arg0: java.lang.Object): boolean
      public compareTo(arg0: java.nio.CharBuffer): int
      public mismatch(arg0: java.nio.CharBuffer): int
      public toString(): java.lang.String
      abstract toString(arg0: int, arg1: int): java.lang.String
      public readonly length(): int
      public readonly charAt(arg0: int): char
      public abstract subSequence(arg0: int, arg1: int): java.nio.CharBuffer
      public append(arg0: java.lang.CharSequence): java.nio.CharBuffer
      public append(arg0: java.lang.CharSequence, arg1: int, arg2: int): java.nio.CharBuffer
      public append(arg0: char): java.nio.CharBuffer
      public abstract order(): java.nio.ByteOrder
      abstract charRegionOrder(): java.nio.ByteOrder
      public chars(): java.util.stream.IntStream
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
      public append(arg0: char): java.lang.Appendable
      public append(arg0: java.lang.CharSequence, arg1: int, arg2: int): java.lang.Appendable
      public append(arg0: java.lang.CharSequence): java.lang.Appendable
      public subSequence(arg0: int, arg1: int): java.lang.CharSequence
    }

  }
}
