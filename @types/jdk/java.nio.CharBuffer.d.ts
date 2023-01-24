declare namespace java {
  namespace nio {
    abstract class CharBuffer
      extends java.nio.Buffer
      implements
        java.lang.Comparable<java.nio.CharBuffer>,
        java.lang.Appendable,
        java.lang.CharSequence,
        java.lang.Readable
    {
      readonly hb: char[]
      readonly offset: int
      isReadOnly: boolean
      static readonly $assertionsDisabled: boolean
      constructor(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: string[] | java.lang.Character[],
        arg5: number | java.lang.Integer
      )
      constructor(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer
      )
      base(): java.lang.Object
      public static allocate(arg0: number | java.lang.Integer): java.nio.CharBuffer
      public static wrap(
        arg0: string[] | java.lang.Character[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.nio.CharBuffer
      public static wrap(arg0: string[] | java.lang.Character[]): java.nio.CharBuffer
      public read(arg0: java.nio.CharBuffer): number
      public static wrap(
        arg0: string | java.lang.CharSequence,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.nio.CharBuffer
      public static wrap(arg0: string | java.lang.CharSequence): java.nio.CharBuffer
      public abstract slice(): java.nio.CharBuffer
      public abstract duplicate(): java.nio.CharBuffer
      public abstract asReadOnlyBuffer(): java.nio.CharBuffer
      public abstract get(): string
      public abstract put(arg0: string | java.lang.Character): java.nio.CharBuffer
      public abstract get(arg0: number | java.lang.Integer): string
      abstract getUnchecked(arg0: number | java.lang.Integer): string
      public abstract put(arg0: number | java.lang.Integer, arg1: string | java.lang.Character): java.nio.CharBuffer
      public get(
        arg0: string[] | java.lang.Character[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.nio.CharBuffer
      public get(arg0: string[] | java.lang.Character[]): java.nio.CharBuffer
      public put(arg0: java.nio.CharBuffer): java.nio.CharBuffer
      public put(
        arg0: string[] | java.lang.Character[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.nio.CharBuffer
      public put(arg0: string[] | java.lang.Character[]): java.nio.CharBuffer
      public put(
        arg0: java.lang.String | string,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.nio.CharBuffer
      public put(arg0: java.lang.String | string): java.nio.CharBuffer
      public hasArray(): boolean
      public array(): string[]
      public arrayOffset(): number
      public position(arg0: number | java.lang.Integer): java.nio.CharBuffer
      public limit(arg0: number | java.lang.Integer): java.nio.CharBuffer
      public mark(): java.nio.CharBuffer
      public reset(): java.nio.CharBuffer
      public clear(): java.nio.CharBuffer
      public flip(): java.nio.CharBuffer
      public rewind(): java.nio.CharBuffer
      public abstract compact(): java.nio.CharBuffer
      public abstract isDirect(): boolean
      public hashCode(): number
      public equals(arg0: java.lang.Object | any): boolean
      public compareTo(arg0: java.nio.CharBuffer): number
      public mismatch(arg0: java.nio.CharBuffer): number
      public toString(): java.lang.String
      abstract toString(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.lang.String
      public length(): number
      public charAt(arg0: number | java.lang.Integer): string
      public abstract subSequence(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer
      ): java.nio.CharBuffer
      public append(arg0: string | java.lang.CharSequence): java.nio.CharBuffer
      public append(
        arg0: string | java.lang.CharSequence,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.nio.CharBuffer
      public append(arg0: string | java.lang.Character): java.nio.CharBuffer
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
      public limit(arg0: number | java.lang.Integer): java.nio.Buffer
      public position(arg0: number | java.lang.Integer): java.nio.Buffer
      public compareTo(arg0: java.lang.Object | any): number
      public append(arg0: string | java.lang.Character): java.lang.Appendable
      public append(
        arg0: string | java.lang.CharSequence,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.lang.Appendable
      public append(arg0: string | java.lang.CharSequence): java.lang.Appendable
      public subSequence(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): string
    }
  }
}
