declare namespace java {
  namespace util {

    class BitSet implements java.lang.Cloneable, java.io.Serializable {
      static readonly $assertionsDisabled: boolean
      public constructor()
      public constructor(arg0: number | java.lang.Integer)
      public static valueOf(arg0: long[]): java.util.BitSet
      public static valueOf(arg0: java.nio.LongBuffer): java.util.BitSet
      public static valueOf(arg0: byte[]): java.util.BitSet
      public static valueOf(arg0: java.nio.ByteBuffer): java.util.BitSet
      public toByteArray(): number[]
      public toLongArray(): number[]
      public flip(arg0: number | java.lang.Integer): void
      public flip(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public set(arg0: number | java.lang.Integer): void
      public set(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean): void
      public set(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public set(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: boolean | java.lang.Boolean): void
      public clear(arg0: number | java.lang.Integer): void
      public clear(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public clear(): void
      public get(arg0: number | java.lang.Integer): boolean
      public get(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.util.BitSet
      public nextSetBit(arg0: number | java.lang.Integer): number
      public nextClearBit(arg0: number | java.lang.Integer): number
      public previousSetBit(arg0: number | java.lang.Integer): number
      public previousClearBit(arg0: number | java.lang.Integer): number
      public length(): number
      public isEmpty(): boolean
      public intersects(arg0: java.util.BitSet): boolean
      public cardinality(): number
      public and(arg0: java.util.BitSet): void
      public or(arg0: java.util.BitSet): void
      public xor(arg0: java.util.BitSet): void
      public andNot(arg0: java.util.BitSet): void
      public hashCode(): number
      public size(): number
      public equals(arg0: java.lang.Object | any): boolean
      public clone(): java.lang.Object
      public toString(): java.lang.String
      public stream(): java.util.stream.IntStream
    }

  }
}
