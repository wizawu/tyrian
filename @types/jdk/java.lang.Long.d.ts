declare namespace java {
  namespace lang {

    class Long extends java.lang.Number implements java.lang.Comparable<java.lang.Long> {
      public static readonly MIN_VALUE: long
      public static readonly MAX_VALUE: long
      public static readonly TYPE: java.lang.Class<java.lang.Long>
      public static readonly SIZE: int
      public static readonly BYTES: int
      public static toString(arg0: long, arg1: int): java.lang.String
      public static toUnsignedString(arg0: long, arg1: int): java.lang.String
      public static toHexString(arg0: long): java.lang.String
      public static toOctalString(arg0: long): java.lang.String
      public static toBinaryString(arg0: long): java.lang.String
      static toUnsignedString0(arg0: long, arg1: int): java.lang.String
      static formatUnsignedLong0(arg0: long, arg1: int, arg2: byte[], arg3: int, arg4: int): void
      static fastUUID(arg0: long, arg1: long): java.lang.String
      public static toString(arg0: long): java.lang.String
      public static toUnsignedString(arg0: long): java.lang.String
      static getChars(arg0: long, arg1: int, arg2: byte[]): int
      static stringSize(arg0: long): int
      public static parseLong(arg0: java.lang.String, arg1: int): long
      public static parseLong(arg0: java.lang.CharSequence, arg1: int, arg2: int, arg3: int): long
      public static parseLong(arg0: java.lang.String): long
      public static parseUnsignedLong(arg0: java.lang.String, arg1: int): long
      public static parseUnsignedLong(arg0: java.lang.CharSequence, arg1: int, arg2: int, arg3: int): long
      public static parseUnsignedLong(arg0: java.lang.String): long
      public static valueOf(arg0: java.lang.String, arg1: int): java.lang.Long
      public static valueOf(arg0: java.lang.String): java.lang.Long
      public static valueOf(arg0: long): java.lang.Long
      public static decode(arg0: java.lang.String): java.lang.Long
      public constructor(arg0: long)
      public constructor(arg0: java.lang.String)
      public byteValue(): byte
      public shortValue(): short
      public intValue(): int
      public longValue(): long
      public floatValue(): float
      public doubleValue(): double
      public toString(): java.lang.String
      public hashCode(): int
      public static hashCode(arg0: long): int
      public equals(arg0: java.lang.Object): boolean
      public static getLong(arg0: java.lang.String): java.lang.Long
      public static getLong(arg0: java.lang.String, arg1: long): java.lang.Long
      public static getLong(arg0: java.lang.String, arg1: java.lang.Long): java.lang.Long
      public compareTo(arg0: java.lang.Long): int
      public static compare(arg0: long, arg1: long): int
      public static compareUnsigned(arg0: long, arg1: long): int
      public static divideUnsigned(arg0: long, arg1: long): long
      public static remainderUnsigned(arg0: long, arg1: long): long
      public static highestOneBit(arg0: long): long
      public static lowestOneBit(arg0: long): long
      public static numberOfLeadingZeros(arg0: long): int
      public static numberOfTrailingZeros(arg0: long): int
      public static bitCount(arg0: long): int
      public static rotateLeft(arg0: long, arg1: int): long
      public static rotateRight(arg0: long, arg1: int): long
      public static reverse(arg0: long): long
      public static signum(arg0: long): int
      public static reverseBytes(arg0: long): long
      public static sum(arg0: long, arg1: long): long
      public static max(arg0: long, arg1: long): long
      public static min(arg0: long, arg1: long): long
      public compareTo(arg0: java.lang.Object): int
    }

  }
}
