declare namespace java {
  namespace nio {

    abstract class ShortBuffer extends java.nio.Buffer implements java.lang.Comparable<java.nio.ShortBuffer> {
      readonly hb: short[]
      readonly offset: int
      isReadOnly: boolean
      constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number[] | java.lang.Short[], arg5: number | java.lang.Integer)
      constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer)
      base(): java.lang.Object
      public static allocate(arg0: number | java.lang.Integer): java.nio.ShortBuffer
      public static wrap(arg0: number[] | java.lang.Short[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.nio.ShortBuffer
      public static wrap(arg0: number[] | java.lang.Short[]): java.nio.ShortBuffer
      public abstract slice(): java.nio.ShortBuffer
      public abstract duplicate(): java.nio.ShortBuffer
      public abstract asReadOnlyBuffer(): java.nio.ShortBuffer
      public abstract get(): number
      public abstract put(arg0: number | java.lang.Short): java.nio.ShortBuffer
      public abstract get(arg0: number | java.lang.Integer): number
      public abstract put(arg0: number | java.lang.Integer, arg1: number | java.lang.Short): java.nio.ShortBuffer
      public get(arg0: number[] | java.lang.Short[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.nio.ShortBuffer
      public get(arg0: number[] | java.lang.Short[]): java.nio.ShortBuffer
      public put(arg0: java.nio.ShortBuffer): java.nio.ShortBuffer
      public put(arg0: number[] | java.lang.Short[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.nio.ShortBuffer
      public put(arg0: number[] | java.lang.Short[]): java.nio.ShortBuffer
      public hasArray(): boolean
      public array(): number[]
      public arrayOffset(): number
      public position(arg0: number | java.lang.Integer): java.nio.ShortBuffer
      public limit(arg0: number | java.lang.Integer): java.nio.ShortBuffer
      public mark(): java.nio.ShortBuffer
      public reset(): java.nio.ShortBuffer
      public clear(): java.nio.ShortBuffer
      public flip(): java.nio.ShortBuffer
      public rewind(): java.nio.ShortBuffer
      public abstract compact(): java.nio.ShortBuffer
      public abstract isDirect(): boolean
      public toString(): java.lang.String
      public hashCode(): number
      public equals(arg0: java.lang.Object | any): boolean
      public compareTo(arg0: java.nio.ShortBuffer): number
      public mismatch(arg0: java.nio.ShortBuffer): number
      public abstract order(): java.nio.ByteOrder
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
