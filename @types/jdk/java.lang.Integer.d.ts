declare namespace java {
  namespace lang {

    class Integer extends java.lang.Number implements java.lang.Comparable<java.lang.Integer> {
      public static readonly MIN_VALUE: int
      public static readonly MAX_VALUE: int
      public static readonly TYPE: java.lang.Class<java.lang.Integer>
      static readonly digits: char[]
      static readonly DigitTens: byte[]
      static readonly DigitOnes: byte[]
      static readonly sizeTable: int[]
      public static readonly SIZE: int
      public static readonly BYTES: int
      public static toString(arg0: int, arg1: int): java.lang.String
      public static toUnsignedString(arg0: int, arg1: int): java.lang.String
      public static toHexString(arg0: int): java.lang.String
      public static toOctalString(arg0: int): java.lang.String
      public static toBinaryString(arg0: int): java.lang.String
      static formatUnsignedInt(arg0: int, arg1: int, arg2: char[], arg3: int, arg4: int): void
      static formatUnsignedInt(arg0: int, arg1: int, arg2: byte[], arg3: int, arg4: int): void
      public static toString(arg0: int): java.lang.String
      public static toUnsignedString(arg0: int): java.lang.String
      static getChars(arg0: int, arg1: int, arg2: byte[]): int
      static stringSize(arg0: int): int
      public static parseInt(arg0: java.lang.String, arg1: int): int
      public static parseInt(arg0: java.lang.CharSequence, arg1: int, arg2: int, arg3: int): int
      public static parseInt(arg0: java.lang.String): int
      public static parseUnsignedInt(arg0: java.lang.String, arg1: int): int
      public static parseUnsignedInt(arg0: java.lang.CharSequence, arg1: int, arg2: int, arg3: int): int
      public static parseUnsignedInt(arg0: java.lang.String): int
      public static valueOf(arg0: java.lang.String, arg1: int): java.lang.Integer
      public static valueOf(arg0: java.lang.String): java.lang.Integer
      public static valueOf(arg0: int): java.lang.Integer
      public constructor(arg0: int)
      public constructor(arg0: java.lang.String)
      public byteValue(): byte
      public shortValue(): short
      public intValue(): int
      public longValue(): long
      public floatValue(): float
      public doubleValue(): double
      public toString(): java.lang.String
      public hashCode(): int
      public static hashCode(arg0: int): int
      public equals(arg0: java.lang.Object): boolean
      public static getInteger(arg0: java.lang.String): java.lang.Integer
      public static getInteger(arg0: java.lang.String, arg1: int): java.lang.Integer
      public static getInteger(arg0: java.lang.String, arg1: java.lang.Integer): java.lang.Integer
      public static decode(arg0: java.lang.String): java.lang.Integer
      public compareTo(arg0: java.lang.Integer): int
      public static compare(arg0: int, arg1: int): int
      public static compareUnsigned(arg0: int, arg1: int): int
      public static toUnsignedLong(arg0: int): long
      public static divideUnsigned(arg0: int, arg1: int): int
      public static remainderUnsigned(arg0: int, arg1: int): int
      public static highestOneBit(arg0: int): int
      public static lowestOneBit(arg0: int): int
      public static numberOfLeadingZeros(arg0: int): int
      public static numberOfTrailingZeros(arg0: int): int
      public static bitCount(arg0: int): int
      public static rotateLeft(arg0: int, arg1: int): int
      public static rotateRight(arg0: int, arg1: int): int
      public static reverse(arg0: int): int
      public static signum(arg0: int): int
      public static reverseBytes(arg0: int): int
      public static sum(arg0: int, arg1: int): int
      public static max(arg0: int, arg1: int): int
      public static min(arg0: int, arg1: int): int
      public compareTo(arg0: java.lang.Object): int
    }

  }
}
