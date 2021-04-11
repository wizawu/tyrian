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
      public static toString(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.lang.String
      public static toUnsignedString(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.lang.String
      public static toHexString(arg0: number | java.lang.Integer): java.lang.String
      public static toOctalString(arg0: number | java.lang.Integer): java.lang.String
      public static toBinaryString(arg0: number | java.lang.Integer): java.lang.String
      static formatUnsignedInt(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: string[] | java.lang.Character[], arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): void
      static formatUnsignedInt(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number[] | java.lang.Byte[], arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): void
      public static toString(arg0: number | java.lang.Integer): java.lang.String
      public static toUnsignedString(arg0: number | java.lang.Integer): java.lang.String
      static getChars(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number[] | java.lang.Byte[]): number
      static stringSize(arg0: number | java.lang.Integer): number
      public static parseInt(arg0: java.lang.String | string, arg1: number | java.lang.Integer): number
      public static parseInt(arg0: string | java.lang.CharSequence, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): number
      public static parseInt(arg0: java.lang.String | string): number
      public static parseUnsignedInt(arg0: java.lang.String | string, arg1: number | java.lang.Integer): number
      public static parseUnsignedInt(arg0: string | java.lang.CharSequence, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): number
      public static parseUnsignedInt(arg0: java.lang.String | string): number
      public static valueOf(arg0: java.lang.String | string, arg1: number | java.lang.Integer): number
      public static valueOf(arg0: java.lang.String | string): number
      public static valueOf(arg0: number | java.lang.Integer): number
      public constructor(arg0: number | java.lang.Integer)
      public constructor(arg0: java.lang.String | string)
      public byteValue(): number
      public shortValue(): number
      public intValue(): number
      public longValue(): number
      public floatValue(): number
      public doubleValue(): number
      public toString(): java.lang.String
      public hashCode(): number
      public static hashCode(arg0: number | java.lang.Integer): number
      public equals(arg0: java.lang.Object | any): boolean
      public static getInteger(arg0: java.lang.String | string): number
      public static getInteger(arg0: java.lang.String | string, arg1: number | java.lang.Integer): number
      public static getInteger(arg0: java.lang.String | string, arg1: number | java.lang.Integer): number
      public static decode(arg0: java.lang.String | string): number
      public compareTo(arg0: number | java.lang.Integer): number
      public static compare(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
      public static compareUnsigned(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
      public static toUnsignedLong(arg0: number | java.lang.Integer): number
      public static divideUnsigned(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
      public static remainderUnsigned(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
      public static highestOneBit(arg0: number | java.lang.Integer): number
      public static lowestOneBit(arg0: number | java.lang.Integer): number
      public static numberOfLeadingZeros(arg0: number | java.lang.Integer): number
      public static numberOfTrailingZeros(arg0: number | java.lang.Integer): number
      public static bitCount(arg0: number | java.lang.Integer): number
      public static rotateLeft(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
      public static rotateRight(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
      public static reverse(arg0: number | java.lang.Integer): number
      public static signum(arg0: number | java.lang.Integer): number
      public static reverseBytes(arg0: number | java.lang.Integer): number
      public static sum(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
      public static max(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
      public static min(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
      public compareTo(arg0: java.lang.Object | any): number
    }

  }
}
