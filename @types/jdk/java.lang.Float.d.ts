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
      public static toString(arg0: float): java.lang.String
      public static toHexString(arg0: float): java.lang.String
      public static valueOf(arg0: java.lang.String): java.lang.Float
      public static valueOf(arg0: float): java.lang.Float
      public static parseFloat(arg0: java.lang.String): float
      public static isNaN(arg0: float): boolean
      public static isInfinite(arg0: float): boolean
      public static isFinite(arg0: float): boolean
      public constructor(arg0: float)
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
      public static hashCode(arg0: float): int
      public equals(arg0: java.lang.Object): boolean
      public static floatToIntBits(arg0: float): int
      public static floatToRawIntBits(arg0: float): int
      public static intBitsToFloat(arg0: int): float
      public compareTo(arg0: java.lang.Float): int
      public static compare(arg0: float, arg1: float): int
      public static sum(arg0: float, arg1: float): float
      public static max(arg0: float, arg1: float): float
      public static min(arg0: float, arg1: float): float
      public compareTo(arg0: java.lang.Object): int
    }

  }
}
