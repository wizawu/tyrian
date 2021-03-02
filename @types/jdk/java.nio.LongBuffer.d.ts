declare namespace java {
  namespace nio {

    abstract class LongBuffer extends java.nio.Buffer implements java.lang.Comparable<java.nio.LongBuffer> {
      readonly hb: long[]
      readonly offset: int
      isReadOnly: boolean
      constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: long[], arg5: number | java.lang.Integer)
      constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer)
      base(): java.lang.Object
      public static allocate(arg0: number | java.lang.Integer): java.nio.LongBuffer
      public static wrap(arg0: long[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.nio.LongBuffer
      public static wrap(arg0: long[]): java.nio.LongBuffer
      public abstract slice(): java.nio.LongBuffer
      public abstract duplicate(): java.nio.LongBuffer
      public abstract asReadOnlyBuffer(): java.nio.LongBuffer
      public abstract get(): number
      public abstract put(arg0: number | java.lang.Long): java.nio.LongBuffer
      public abstract get(arg0: number | java.lang.Integer): number
      public abstract put(arg0: number | java.lang.Integer, arg1: number | java.lang.Long): java.nio.LongBuffer
      public get(arg0: long[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.nio.LongBuffer
      public get(arg0: long[]): java.nio.LongBuffer
      public put(arg0: java.nio.LongBuffer): java.nio.LongBuffer
      public put(arg0: long[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.nio.LongBuffer
      public put(arg0: long[]): java.nio.LongBuffer
      public hasArray(): boolean
      public array(): number[]
      public arrayOffset(): number
      public position(arg0: number | java.lang.Integer): java.nio.LongBuffer
      public limit(arg0: number | java.lang.Integer): java.nio.LongBuffer
      public mark(): java.nio.LongBuffer
      public reset(): java.nio.LongBuffer
      public clear(): java.nio.LongBuffer
      public flip(): java.nio.LongBuffer
      public rewind(): java.nio.LongBuffer
      public abstract compact(): java.nio.LongBuffer
      public abstract isDirect(): boolean
      public toString(): java.lang.String
      public hashCode(): number
      public equals(arg0: java.lang.Object | any): boolean
      public compareTo(arg0: java.nio.LongBuffer): number
      public mismatch(arg0: java.nio.LongBuffer): number
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
