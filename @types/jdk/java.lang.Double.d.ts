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
      public static toString(arg0: double): java.lang.String
      public static toHexString(arg0: double): java.lang.String
      public static valueOf(arg0: java.lang.String): java.lang.Double
      public static valueOf(arg0: double): java.lang.Double
      public static parseDouble(arg0: java.lang.String): double
      public static isNaN(arg0: double): boolean
      public static isInfinite(arg0: double): boolean
      public static isFinite(arg0: double): boolean
      public constructor(arg0: double)
      public constructor(arg0: java.lang.String)
      public isNaN(): boolean
      public isInfinite(): boolean
      public toString(): java.lang.String
      public byteValue(): byte
      public shortValue(): short
      public intValue(): int
      public longValue(): long
      public floatValue(): float
      public doubleValue(): double
      public hashCode(): int
      public static hashCode(arg0: double): int
      public equals(arg0: java.lang.Object): boolean
      public static doubleToLongBits(arg0: double): long
      public static doubleToRawLongBits(arg0: double): long
      public static longBitsToDouble(arg0: long): double
      public compareTo(arg0: java.lang.Double): int
      public static compare(arg0: double, arg1: double): int
      public static sum(arg0: double, arg1: double): double
      public static max(arg0: double, arg1: double): double
      public static min(arg0: double, arg1: double): double
      public compareTo(arg0: java.lang.Object): int
    }

  }
}
