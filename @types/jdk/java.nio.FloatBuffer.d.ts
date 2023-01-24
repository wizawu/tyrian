declare namespace java {
  namespace nio {
    abstract class FloatBuffer extends java.nio.Buffer implements java.lang.Comparable<java.nio.FloatBuffer> {
      readonly hb: float[]
      readonly offset: int
      isReadOnly: boolean
      constructor(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: number[] | java.lang.Float[],
        arg5: number | java.lang.Integer
      )
      constructor(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer
      )
      base(): java.lang.Object
      public static allocate(arg0: number | java.lang.Integer): java.nio.FloatBuffer
      public static wrap(
        arg0: number[] | java.lang.Float[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.nio.FloatBuffer
      public static wrap(arg0: number[] | java.lang.Float[]): java.nio.FloatBuffer
      public abstract slice(): java.nio.FloatBuffer
      public abstract duplicate(): java.nio.FloatBuffer
      public abstract asReadOnlyBuffer(): java.nio.FloatBuffer
      public abstract get(): number
      public abstract put(arg0: number | java.lang.Float): java.nio.FloatBuffer
      public abstract get(arg0: number | java.lang.Integer): number
      public abstract put(arg0: number | java.lang.Integer, arg1: number | java.lang.Float): java.nio.FloatBuffer
      public get(
        arg0: number[] | java.lang.Float[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.nio.FloatBuffer
      public get(arg0: number[] | java.lang.Float[]): java.nio.FloatBuffer
      public put(arg0: java.nio.FloatBuffer): java.nio.FloatBuffer
      public put(
        arg0: number[] | java.lang.Float[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.nio.FloatBuffer
      public put(arg0: number[] | java.lang.Float[]): java.nio.FloatBuffer
      public hasArray(): boolean
      public array(): number[]
      public arrayOffset(): number
      public position(arg0: number | java.lang.Integer): java.nio.FloatBuffer
      public limit(arg0: number | java.lang.Integer): java.nio.FloatBuffer
      public mark(): java.nio.FloatBuffer
      public reset(): java.nio.FloatBuffer
      public clear(): java.nio.FloatBuffer
      public flip(): java.nio.FloatBuffer
      public rewind(): java.nio.FloatBuffer
      public abstract compact(): java.nio.FloatBuffer
      public abstract isDirect(): boolean
      public toString(): java.lang.String
      public hashCode(): number
      public equals(arg0: java.lang.Object | any): boolean
      public compareTo(arg0: java.nio.FloatBuffer): number
      public mismatch(arg0: java.nio.FloatBuffer): number
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
