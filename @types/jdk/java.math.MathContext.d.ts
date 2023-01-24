declare namespace java {
  namespace math {
    class MathContext implements java.io.Serializable {
      public static readonly UNLIMITED: java.math.MathContext
      public static readonly DECIMAL32: java.math.MathContext
      public static readonly DECIMAL64: java.math.MathContext
      public static readonly DECIMAL128: java.math.MathContext
      readonly precision: int
      readonly roundingMode: java.math.RoundingMode
      public constructor(arg0: number | java.lang.Integer)
      public constructor(arg0: number | java.lang.Integer, arg1: java.math.RoundingMode)
      public constructor(arg0: java.lang.String | string)
      public getPrecision(): number
      public getRoundingMode(): java.math.RoundingMode
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public toString(): java.lang.String
    }
  }
}
