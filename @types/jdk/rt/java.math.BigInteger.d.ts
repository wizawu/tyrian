declare namespace java {
    namespace math {
class BigInteger extends java.lang.Number implements java.lang.Comparable<java.math.BigInteger> {
    public static ZERO: java.math.BigInteger
    public static ONE: java.math.BigInteger
    public static TEN: java.math.BigInteger
    public constructor(arg0: byte[])
    public constructor(arg0: int, arg1: byte[])
    public constructor(arg0: java.lang.String | string, arg1: int)
    public constructor(arg0: java.lang.String | string)
    public constructor(arg0: int, arg1: java.util.Random)
    public constructor(arg0: int, arg1: int, arg2: java.util.Random)
    public static probablePrime(arg0: int, arg1: java.util.Random): java.math.BigInteger
    public nextProbablePrime(): java.math.BigInteger
    public static valueOf(arg0: long): java.math.BigInteger
    public add(arg0: java.math.BigInteger): java.math.BigInteger
    public subtract(arg0: java.math.BigInteger): java.math.BigInteger
    public multiply(arg0: java.math.BigInteger): java.math.BigInteger
    public divide(arg0: java.math.BigInteger): java.math.BigInteger
    public divideAndRemainder(arg0: java.math.BigInteger): java.math.BigInteger[]
    public remainder(arg0: java.math.BigInteger): java.math.BigInteger
    public pow(arg0: int): java.math.BigInteger
    public gcd(arg0: java.math.BigInteger): java.math.BigInteger
    public abs(): java.math.BigInteger
    public negate(): java.math.BigInteger
    public signum(): int
    public mod(arg0: java.math.BigInteger): java.math.BigInteger
    public modPow(arg0: java.math.BigInteger, arg1: java.math.BigInteger): java.math.BigInteger
    public modInverse(arg0: java.math.BigInteger): java.math.BigInteger
    public shiftLeft(arg0: int): java.math.BigInteger
    public shiftRight(arg0: int): java.math.BigInteger
    public and(arg0: java.math.BigInteger): java.math.BigInteger
    public or(arg0: java.math.BigInteger): java.math.BigInteger
    public xor(arg0: java.math.BigInteger): java.math.BigInteger
    public not(): java.math.BigInteger
    public andNot(arg0: java.math.BigInteger): java.math.BigInteger
    public testBit(arg0: int): boolean
    public setBit(arg0: int): java.math.BigInteger
    public clearBit(arg0: int): java.math.BigInteger
    public flipBit(arg0: int): java.math.BigInteger
    public getLowestSetBit(): int
    public bitLength(): int
    public bitCount(): int
    public isProbablePrime(arg0: int): boolean
    public compareTo(arg0: java.math.BigInteger): int
    public equals(arg0: java.lang.Object): boolean
    public min(arg0: java.math.BigInteger): java.math.BigInteger
    public max(arg0: java.math.BigInteger): java.math.BigInteger
    public hashCode(): int
    public toString(arg0: int): string
    public toString(): string
    public toByteArray(): byte[]
    public intValue(): int
    public longValue(): long
    public floatValue(): float
    public doubleValue(): double
    public longValueExact(): long
    public intValueExact(): int
    public shortValueExact(): short
    public byteValueExact(): byte
    public compareTo(arg0: java.lang.Object): int
    public static class: java.lang.Class<any>
}

    }
}