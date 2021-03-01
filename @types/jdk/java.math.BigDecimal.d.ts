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
      constructor(arg0: java.math.BigInteger, arg1: long, arg2: int, arg3: int)
      public constructor(arg0: char[], arg1: int, arg2: int)
      public constructor(arg0: char[], arg1: int, arg2: int, arg3: java.math.MathContext)
      public constructor(arg0: char[])
      public constructor(arg0: char[], arg1: java.math.MathContext)
      public constructor(arg0: java.lang.String)
      public constructor(arg0: java.lang.String, arg1: java.math.MathContext)
      public constructor(arg0: double)
      public constructor(arg0: double, arg1: java.math.MathContext)
      public constructor(arg0: java.math.BigInteger)
      public constructor(arg0: java.math.BigInteger, arg1: java.math.MathContext)
      public constructor(arg0: java.math.BigInteger, arg1: int)
      public constructor(arg0: java.math.BigInteger, arg1: int, arg2: java.math.MathContext)
      public constructor(arg0: int)
      public constructor(arg0: int, arg1: java.math.MathContext)
      public constructor(arg0: long)
      public constructor(arg0: long, arg1: java.math.MathContext)
      public static valueOf(arg0: long, arg1: int): java.math.BigDecimal
      public static valueOf(arg0: long): java.math.BigDecimal
      static valueOf(arg0: long, arg1: int, arg2: int): java.math.BigDecimal
      static valueOf(arg0: java.math.BigInteger, arg1: int, arg2: int): java.math.BigDecimal
      static zeroValueOf(arg0: int): java.math.BigDecimal
      public static valueOf(arg0: double): java.math.BigDecimal
      public add(arg0: java.math.BigDecimal): java.math.BigDecimal
      public add(arg0: java.math.BigDecimal, arg1: java.math.MathContext): java.math.BigDecimal
      public subtract(arg0: java.math.BigDecimal): java.math.BigDecimal
      public subtract(arg0: java.math.BigDecimal, arg1: java.math.MathContext): java.math.BigDecimal
      public multiply(arg0: java.math.BigDecimal): java.math.BigDecimal
      public multiply(arg0: java.math.BigDecimal, arg1: java.math.MathContext): java.math.BigDecimal
      public divide(arg0: java.math.BigDecimal, arg1: int, arg2: int): java.math.BigDecimal
      public divide(arg0: java.math.BigDecimal, arg1: int, arg2: java.math.RoundingMode): java.math.BigDecimal
      public divide(arg0: java.math.BigDecimal, arg1: int): java.math.BigDecimal
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
      public pow(arg0: int): java.math.BigDecimal
      public pow(arg0: int, arg1: java.math.MathContext): java.math.BigDecimal
      public abs(): java.math.BigDecimal
      public abs(arg0: java.math.MathContext): java.math.BigDecimal
      public negate(): java.math.BigDecimal
      public negate(arg0: java.math.MathContext): java.math.BigDecimal
      public plus(): java.math.BigDecimal
      public plus(arg0: java.math.MathContext): java.math.BigDecimal
      public signum(): int
      public scale(): int
      public precision(): int
      public unscaledValue(): java.math.BigInteger
      public round(arg0: java.math.MathContext): java.math.BigDecimal
      public setScale(arg0: int, arg1: java.math.RoundingMode): java.math.BigDecimal
      public setScale(arg0: int, arg1: int): java.math.BigDecimal
      public setScale(arg0: int): java.math.BigDecimal
      public movePointLeft(arg0: int): java.math.BigDecimal
      public movePointRight(arg0: int): java.math.BigDecimal
      public scaleByPowerOfTen(arg0: int): java.math.BigDecimal
      public stripTrailingZeros(): java.math.BigDecimal
      public compareTo(arg0: java.math.BigDecimal): int
      public equals(arg0: java.lang.Object): boolean
      public min(arg0: java.math.BigDecimal): java.math.BigDecimal
      public max(arg0: java.math.BigDecimal): java.math.BigDecimal
      public hashCode(): int
      public toString(): java.lang.String
      public toEngineeringString(): java.lang.String
      public toPlainString(): java.lang.String
      public toBigInteger(): java.math.BigInteger
      public toBigIntegerExact(): java.math.BigInteger
      public longValue(): long
      public longValueExact(): long
      public intValue(): int
      public intValueExact(): int
      public shortValueExact(): short
      public byteValueExact(): byte
      public floatValue(): float
      public doubleValue(): double
      public ulp(): java.math.BigDecimal
      static longDigitLength(arg0: long): int
      static scaledTenPow(arg0: int, arg1: int, arg2: int): java.math.BigDecimal
      public compareTo(arg0: java.lang.Object): int
    }

  }
}
