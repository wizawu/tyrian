declare namespace java {
  namespace math {

    class BigInteger extends java.lang.Number implements java.lang.Comparable<java.math.BigInteger> {
      readonly signum: int
      readonly mag: int[]
      static readonly LONG_MASK: long
      static readonly BURNIKEL_ZIEGLER_THRESHOLD: int
      static readonly BURNIKEL_ZIEGLER_OFFSET: int
      public static readonly ZERO: java.math.BigInteger
      public static readonly ONE: java.math.BigInteger
      public static readonly TWO: java.math.BigInteger
      public static readonly TEN: java.math.BigInteger
      static bnExpModThreshTable: int[]
      static readonly $assertionsDisabled: boolean
      public constructor(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer)
      public constructor(arg0: number[] | java.lang.Byte[])
      public constructor(arg0: number | java.lang.Integer, arg1: number[] | java.lang.Byte[], arg2: number | java.lang.Integer, arg3: number | java.lang.Integer)
      public constructor(arg0: number | java.lang.Integer, arg1: number[] | java.lang.Byte[])
      public constructor(arg0: java.lang.String | string, arg1: number | java.lang.Integer)
      constructor(arg0: string[] | java.lang.Character[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer)
      public constructor(arg0: java.lang.String | string)
      public constructor(arg0: number | java.lang.Integer, arg1: java.util.Random)
      public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: java.util.Random)
      public static probablePrime(arg0: number | java.lang.Integer, arg1: java.util.Random): java.math.BigInteger
      public nextProbablePrime(): java.math.BigInteger
      primeToCertainty(arg0: number | java.lang.Integer, arg1: java.util.Random): boolean
      constructor(arg0: number[] | java.lang.Integer[], arg1: number | java.lang.Integer)
      public static valueOf(arg0: number | java.lang.Long): java.math.BigInteger
      public add(arg0: java.math.BigInteger): java.math.BigInteger
      add(arg0: number | java.lang.Long): java.math.BigInteger
      public subtract(arg0: java.math.BigInteger): java.math.BigInteger
      public multiply(arg0: java.math.BigInteger): java.math.BigInteger
      multiply(arg0: number | java.lang.Long): java.math.BigInteger
      public divide(arg0: java.math.BigInteger): java.math.BigInteger
      public divideAndRemainder(arg0: java.math.BigInteger): java.math.BigInteger[]
      public remainder(arg0: java.math.BigInteger): java.math.BigInteger
      public pow(arg0: number | java.lang.Integer): java.math.BigInteger
      public sqrt(): java.math.BigInteger
      public sqrtAndRemainder(): java.math.BigInteger[]
      public gcd(arg0: java.math.BigInteger): java.math.BigInteger
      static bitLengthForInt(arg0: number | java.lang.Integer): number
      static primitiveRightShift(arg0: number[] | java.lang.Integer[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      static primitiveLeftShift(arg0: number[] | java.lang.Integer[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public abs(): java.math.BigInteger
      public negate(): java.math.BigInteger
      public signum(): number
      public mod(arg0: java.math.BigInteger): java.math.BigInteger
      public modPow(arg0: java.math.BigInteger, arg1: java.math.BigInteger): java.math.BigInteger
      static mulAdd(arg0: number[] | java.lang.Integer[], arg1: number[] | java.lang.Integer[], arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): number
      static addOne(arg0: number[] | java.lang.Integer[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): number
      public modInverse(arg0: java.math.BigInteger): java.math.BigInteger
      public shiftLeft(arg0: number | java.lang.Integer): java.math.BigInteger
      public shiftRight(arg0: number | java.lang.Integer): java.math.BigInteger
      javaIncrement(arg0: number[] | java.lang.Integer[]): number[]
      public and(arg0: java.math.BigInteger): java.math.BigInteger
      public or(arg0: java.math.BigInteger): java.math.BigInteger
      public xor(arg0: java.math.BigInteger): java.math.BigInteger
      public not(): java.math.BigInteger
      public andNot(arg0: java.math.BigInteger): java.math.BigInteger
      public testBit(arg0: number | java.lang.Integer): boolean
      public setBit(arg0: number | java.lang.Integer): java.math.BigInteger
      public clearBit(arg0: number | java.lang.Integer): java.math.BigInteger
      public flipBit(arg0: number | java.lang.Integer): java.math.BigInteger
      public getLowestSetBit(): number
      public bitLength(): number
      public bitCount(): number
      public isProbablePrime(arg0: number | java.lang.Integer): boolean
      public compareTo(arg0: java.math.BigInteger): number
      compareMagnitude(arg0: java.math.BigInteger): number
      compareMagnitude(arg0: number | java.lang.Long): number
      public equals(arg0: java.lang.Object | any): boolean
      public min(arg0: java.math.BigInteger): java.math.BigInteger
      public max(arg0: java.math.BigInteger): java.math.BigInteger
      public hashCode(): number
      public toString(arg0: number | java.lang.Integer): java.lang.String
      public toString(): java.lang.String
      public toByteArray(): number[]
      public intValue(): number
      public longValue(): number
      public floatValue(): number
      public doubleValue(): number
      public longValueExact(): number
      public intValueExact(): number
      public shortValueExact(): number
      public byteValueExact(): number
      public compareTo(arg0: java.lang.Object | any): number
    }

  }
}
