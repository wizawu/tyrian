declare namespace java {
  namespace lang {

    class Short extends java.lang.Number implements java.lang.Comparable<java.lang.Short> {
      public static readonly MIN_VALUE: short
      public static readonly MAX_VALUE: short
      public static readonly TYPE: java.lang.Class<java.lang.Short>
      public static readonly SIZE: int
      public static readonly BYTES: int
      public static toString(arg0: number | java.lang.Short): java.lang.String
      public static parseShort(arg0: java.lang.String | string, arg1: number | java.lang.Integer): number
      public static parseShort(arg0: java.lang.String | string): number
      public static valueOf(arg0: java.lang.String | string, arg1: number | java.lang.Integer): number
      public static valueOf(arg0: java.lang.String | string): number
      public static valueOf(arg0: number | java.lang.Short): number
      public static decode(arg0: java.lang.String | string): number
      public constructor(arg0: number | java.lang.Short)
      public constructor(arg0: java.lang.String | string)
      public byteValue(): number
      public shortValue(): number
      public intValue(): number
      public longValue(): number
      public floatValue(): number
      public doubleValue(): number
      public toString(): java.lang.String
      public hashCode(): number
      public static hashCode(arg0: number | java.lang.Short): number
      public equals(arg0: java.lang.Object | any): boolean
      public compareTo(arg0: number | java.lang.Short): number
      public static compare(arg0: number | java.lang.Short, arg1: number | java.lang.Short): number
      public static compareUnsigned(arg0: number | java.lang.Short, arg1: number | java.lang.Short): number
      public static reverseBytes(arg0: number | java.lang.Short): number
      public static toUnsignedInt(arg0: number | java.lang.Short): number
      public static toUnsignedLong(arg0: number | java.lang.Short): number
      public compareTo(arg0: java.lang.Object | any): number
    }

  }
}
