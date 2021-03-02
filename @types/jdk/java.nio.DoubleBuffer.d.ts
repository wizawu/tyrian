declare namespace java {
  namespace nio {

    abstract class DoubleBuffer extends java.nio.Buffer implements java.lang.Comparable<java.nio.DoubleBuffer> {
      readonly hb: double[]
      readonly offset: int
      isReadOnly: boolean
      constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: double[], arg5: number | java.lang.Integer)
      constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer)
      base(): java.lang.Object
      public static allocate(arg0: number | java.lang.Integer): java.nio.DoubleBuffer
      public static wrap(arg0: double[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.nio.DoubleBuffer
      public static wrap(arg0: double[]): java.nio.DoubleBuffer
      public abstract slice(): java.nio.DoubleBuffer
      public abstract duplicate(): java.nio.DoubleBuffer
      public abstract asReadOnlyBuffer(): java.nio.DoubleBuffer
      public abstract get(): number
      public abstract put(arg0: number | java.lang.Double): java.nio.DoubleBuffer
      public abstract get(arg0: number | java.lang.Integer): number
      public abstract put(arg0: number | java.lang.Integer, arg1: number | java.lang.Double): java.nio.DoubleBuffer
      public get(arg0: double[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.nio.DoubleBuffer
      public get(arg0: double[]): java.nio.DoubleBuffer
      public put(arg0: java.nio.DoubleBuffer): java.nio.DoubleBuffer
      public put(arg0: double[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.nio.DoubleBuffer
      public put(arg0: double[]): java.nio.DoubleBuffer
      public hasArray(): boolean
      public array(): number[]
      public arrayOffset(): number
      public position(arg0: number | java.lang.Integer): java.nio.DoubleBuffer
      public limit(arg0: number | java.lang.Integer): java.nio.DoubleBuffer
      public mark(): java.nio.DoubleBuffer
      public reset(): java.nio.DoubleBuffer
      public clear(): java.nio.DoubleBuffer
      public flip(): java.nio.DoubleBuffer
      public rewind(): java.nio.DoubleBuffer
      public abstract compact(): java.nio.DoubleBuffer
      public abstract isDirect(): boolean
      public toString(): java.lang.String
      public hashCode(): number
      public equals(arg0: java.lang.Object | any): boolean
      public compareTo(arg0: java.nio.DoubleBuffer): number
      public mismatch(arg0: java.nio.DoubleBuffer): number
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
