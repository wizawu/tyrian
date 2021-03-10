declare namespace java {
  namespace math {

    class BigDecimal extends java.lang.Number implements java.lang.Comparable<java.math.BigDecimal> {
      static readonly INFLATED: long
      public static readonly ZERO: java.math.BigDecimal
      public static readonly ONE: java.math.BigDecimal
      public static readonly TEN: java.math.BigDecimal
      public static readonly ROUND_UP: int
      public static readonly ROUND_DOWN: int
      public static readonly ROUND_CEILING: int
      public static readonly ROUND_FLOOR: int
      public static readonly ROUND_HALF_UP: int
      public static readonly ROUND_HALF_DOWN: int
      public static readonly ROUND_HALF_EVEN: int
      public static readonly ROUND_UNNECESSARY: int
      static readonly $assertionsDisabled: boolean
      constructor(arg0: java.math.BigInteger, arg1: number | java.lang.Long, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer)
      public constructor(arg0: string[] | java.lang.Character[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer)
      public constructor(arg0: string[] | java.lang.Character[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.math.MathContext)
      public constructor(arg0: string[] | java.lang.Character[])
      public constructor(arg0: string[] | java.lang.Character[], arg1: java.math.MathContext)
      public constructor(arg0: java.lang.String | string)
      public constructor(arg0: java.lang.String | string, arg1: java.math.MathContext)
      public constructor(arg0: number | java.lang.Double)
      public constructor(arg0: number | java.lang.Double, arg1: java.math.MathContext)
      public constructor(arg0: java.math.BigInteger)
      public constructor(arg0: java.math.BigInteger, arg1: java.math.MathContext)
      public constructor(arg0: java.math.BigInteger, arg1: number | java.lang.Integer)
      public constructor(arg0: java.math.BigInteger, arg1: number | java.lang.Integer, arg2: java.math.MathContext)
      public constructor(arg0: number | java.lang.Integer)
      public constructor(arg0: number | java.lang.Integer, arg1: java.math.MathContext)
      public constructor(arg0: number | java.lang.Long)
      public constructor(arg0: number | java.lang.Long, arg1: java.math.MathContext)
      public static valueOf(arg0: number | java.lang.Long, arg1: number | java.lang.Integer): java.math.BigDecimal
      public static valueOf(arg0: number | java.lang.Long): java.math.BigDecimal
      static valueOf(arg0: number | java.lang.Long, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.math.BigDecimal
      static valueOf(arg0: java.math.BigInteger, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.math.BigDecimal
      static zeroValueOf(arg0: number | java.lang.Integer): java.math.BigDecimal
      public static valueOf(arg0: number | java.lang.Double): java.math.BigDecimal
      public add(arg0: java.math.BigDecimal): java.math.BigDecimal
      public add(arg0: java.math.BigDecimal, arg1: java.math.MathContext): java.math.BigDecimal
      public subtract(arg0: java.math.BigDecimal): java.math.BigDecimal
      public subtract(arg0: java.math.BigDecimal, arg1: java.math.MathContext): java.math.BigDecimal
      public multiply(arg0: java.math.BigDecimal): java.math.BigDecimal
      public multiply(arg0: java.math.BigDecimal, arg1: java.math.MathContext): java.math.BigDecimal
      public divide(arg0: java.math.BigDecimal, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.math.BigDecimal
      public divide(arg0: java.math.BigDecimal, arg1: number | java.lang.Integer, arg2: java.math.RoundingMode): java.math.BigDecimal
      public divide(arg0: java.math.BigDecimal, arg1: number | java.lang.Integer): java.math.BigDecimal
      public divide(arg0: java.math.BigDecimal, arg1: java.math.RoundingMode): java.math.BigDecimal
      public divide(arg0: java.math.BigDecimal): java.math.BigDecimal
      public divide(arg0: java.math.BigDecimal, arg1: java.math.MathContext): java.math.BigDecimal
      public divideToIntegralValue(arg0: java.math.BigDecimal): java.math.BigDecimal
      public divideToIntegralValue(arg0: java.math.BigDecimal, arg1: java.math.MathContext): java.math.BigDecimal
      public remainder(arg0: java.math.BigDecimal): java.math.BigDecimal
      public remainder(arg0: java.math.BigDecimal, arg1: java.math.MathContext): java.math.BigDecimal
      public divideAndRemainder(arg0: java.math.BigDecimal): java.math.BigDecimal[]
      public divideAndRemainder(arg0: java.math.BigDecimal, arg1: java.math.MathContext): java.math.BigDecimal[]
      public sqrt(arg0: java.math.MathContext): java.math.BigDecimal
      public pow(arg0: number | java.lang.Integer): java.math.BigDecimal
      public pow(arg0: number | java.lang.Integer, arg1: java.math.MathContext): java.math.BigDecimal
      public abs(): java.math.BigDecimal
      public abs(arg0: java.math.MathContext): java.math.BigDecimal
      public negate(): java.math.BigDecimal
      public negate(arg0: java.math.MathContext): java.math.BigDecimal
      public plus(): java.math.BigDecimal
      public plus(arg0: java.math.MathContext): java.math.BigDecimal
      public signum(): number
      public scale(): number
      public precision(): number
      public unscaledValue(): java.math.BigInteger
      public round(arg0: java.math.MathContext): java.math.BigDecimal
      public setScale(arg0: number | java.lang.Integer, arg1: java.math.RoundingMode): java.math.BigDecimal
      public setScale(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.math.BigDecimal
      public setScale(arg0: number | java.lang.Integer): java.math.BigDecimal
      public movePointLeft(arg0: number | java.lang.Integer): java.math.BigDecimal
      public movePointRight(arg0: number | java.lang.Integer): java.math.BigDecimal
      public scaleByPowerOfTen(arg0: number | java.lang.Integer): java.math.BigDecimal
      public stripTrailingZeros(): java.math.BigDecimal
      public compareTo(arg0: java.math.BigDecimal): number
      public equals(arg0: java.lang.Object | any): boolean
      public min(arg0: java.math.BigDecimal): java.math.BigDecimal
      public max(arg0: java.math.BigDecimal): java.math.BigDecimal
      public hashCode(): number
      public toString(): java.lang.String
      public toEngineeringString(): java.lang.String
      public toPlainString(): java.lang.String
      public toBigInteger(): java.math.BigInteger
      public toBigIntegerExact(): java.math.BigInteger
      public longValue(): number
      public longValueExact(): number
      public intValue(): number
      public intValueExact(): number
      public shortValueExact(): number
      public byteValueExact(): number
      public floatValue(): number
      public doubleValue(): number
      public ulp(): java.math.BigDecimal
      static longDigitLength(arg0: number | java.lang.Long): number
      static scaledTenPow(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.math.BigDecimal
      public compareTo(arg0: java.lang.Object | any): number
    }

  }
}
