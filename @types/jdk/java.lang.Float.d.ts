declare namespace java {
  namespace lang {

    class Float extends java.lang.Number implements java.lang.Comparable<java.lang.Float> {
      public static readonly POSITIVE_INFINITY: float
      public static readonly NEGATIVE_INFINITY: float
      public static readonly NaN: float
      public static readonly MAX_VALUE: float
      public static readonly MIN_NORMAL: float
      public static readonly MIN_VALUE: float
      public static readonly MAX_EXPONENT: int
      public static readonly MIN_EXPONENT: int
      public static readonly SIZE: int
      public static readonly BYTES: int
      public static readonly TYPE: java.lang.Class<java.lang.Float>
      public static toString(arg0: number | java.lang.Float): java.lang.String
      public static toHexString(arg0: number | java.lang.Float): java.lang.String
      public static valueOf(arg0: java.lang.String | string): number
      public static valueOf(arg0: number | java.lang.Float): number
      public static parseFloat(arg0: java.lang.String | string): number
      public static isNaN(arg0: number | java.lang.Float): boolean
      public static isInfinite(arg0: number | java.lang.Float): boolean
      public static isFinite(arg0: number | java.lang.Float): boolean
      public constructor(arg0: number | java.lang.Float)
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
      public static hashCode(arg0: number | java.lang.Float): number
      public equals(arg0: java.lang.Object | any): boolean
      public static floatToIntBits(arg0: number | java.lang.Float): number
      public static floatToRawIntBits(arg0: number | java.lang.Float): number
      public static intBitsToFloat(arg0: number | java.lang.Integer): number
      public compareTo(arg0: number | java.lang.Float): number
      public static compare(arg0: number | java.lang.Float, arg1: number | java.lang.Float): number
      public static sum(arg0: number | java.lang.Float, arg1: number | java.lang.Float): number
      public static max(arg0: number | java.lang.Float, arg1: number | java.lang.Float): number
      public static min(arg0: number | java.lang.Float, arg1: number | java.lang.Float): number
      public compareTo(arg0: java.lang.Object | any): number
    }

  }
}
