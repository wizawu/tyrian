declare namespace java {
  namespace lang {
    class Double extends java.lang.Number implements java.lang.Comparable<java.lang.Double> {
      public static readonly POSITIVE_INFINITY: double
      public static readonly NEGATIVE_INFINITY: double
      public static readonly NaN: double
      public static readonly MAX_VALUE: double
      public static readonly MIN_NORMAL: double
      public static readonly MIN_VALUE: double
      public static readonly MAX_EXPONENT: int
      public static readonly MIN_EXPONENT: int
      public static readonly SIZE: int
      public static readonly BYTES: int
      public static readonly TYPE: java.lang.Class<java.lang.Double>
      public static toString(arg0: number | java.lang.Double): java.lang.String
      public static toHexString(arg0: number | java.lang.Double): java.lang.String
      public static valueOf(arg0: java.lang.String | string): number
      public static valueOf(arg0: number | java.lang.Double): number
      public static parseDouble(arg0: java.lang.String | string): number
      public static isNaN(arg0: number | java.lang.Double): boolean
      public static isInfinite(arg0: number | java.lang.Double): boolean
      public static isFinite(arg0: number | java.lang.Double): boolean
      public constructor(arg0: number | java.lang.Double)
      public constructor(arg0: java.lang.String | string)
      public isNaN(): boolean
      public isInfinite(): boolean
      public toString(): java.lang.String
      public byteValue(): number
      public shortValue(): number
      public intValue(): number
      public longValue(): number
      public floatValue(): number
      public doubleValue(): number
      public hashCode(): number
      public static hashCode(arg0: number | java.lang.Double): number
      public equals(arg0: java.lang.Object | any): boolean
      public static doubleToLongBits(arg0: number | java.lang.Double): number
      public static doubleToRawLongBits(arg0: number | java.lang.Double): number
      public static longBitsToDouble(arg0: number | java.lang.Long): number
      public compareTo(arg0: number | java.lang.Double): number
      public static compare(arg0: number | java.lang.Double, arg1: number | java.lang.Double): number
      public static sum(arg0: number | java.lang.Double, arg1: number | java.lang.Double): number
      public static max(arg0: number | java.lang.Double, arg1: number | java.lang.Double): number
      public static min(arg0: number | java.lang.Double, arg1: number | java.lang.Double): number
      public compareTo(arg0: java.lang.Object | any): number
    }
  }
}
