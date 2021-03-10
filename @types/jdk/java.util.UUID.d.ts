declare namespace java {
  namespace util {

    class UUID implements java.io.Serializable, java.lang.Comparable<java.util.UUID> {
      static readonly $assertionsDisabled: boolean
      public constructor(arg0: number | java.lang.Long, arg1: number | java.lang.Long)
      public static randomUUID(): java.util.UUID
      public static nameUUIDFromBytes(arg0: number[] | java.lang.Byte[]): java.util.UUID
      public static fromString(arg0: java.lang.String | string): java.util.UUID
      public getLeastSignificantBits(): number
      public getMostSignificantBits(): number
      public version(): number
      public variant(): number
      public timestamp(): number
      public clockSequence(): number
      public node(): number
      public toString(): java.lang.String
      public hashCode(): number
      public equals(arg0: java.lang.Object | any): boolean
      public compareTo(arg0: java.util.UUID): number
      public compareTo(arg0: java.lang.Object | any): number
    }

  }
}
