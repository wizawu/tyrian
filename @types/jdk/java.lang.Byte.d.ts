declare namespace java {
  namespace lang {

    class Byte extends java.lang.Number implements java.lang.Comparable<java.lang.Byte> {
      public static readonly MIN_VALUE: byte
      public static readonly MAX_VALUE: byte
      public static readonly TYPE: java.lang.Class<java.lang.Byte>
      public static readonly SIZE: int
      public static readonly BYTES: int
      public static toString(arg0: byte): java.lang.String
      public static valueOf(arg0: byte): java.lang.Byte
      public static parseByte(arg0: java.lang.String, arg1: int): byte
      public static parseByte(arg0: java.lang.String): byte
      public static valueOf(arg0: java.lang.String, arg1: int): java.lang.Byte
      public static valueOf(arg0: java.lang.String): java.lang.Byte
      public static decode(arg0: java.lang.String): java.lang.Byte
      public constructor(arg0: byte)
      public constructor(arg0: java.lang.String)
      public byteValue(): byte
      public shortValue(): short
      public intValue(): int
      public longValue(): long
      public floatValue(): float
      public doubleValue(): double
      public toString(): java.lang.String
      public hashCode(): int
      public static hashCode(arg0: byte): int
      public equals(arg0: java.lang.Object): boolean
      public compareTo(arg0: java.lang.Byte): int
      public static compare(arg0: byte, arg1: byte): int
      public static compareUnsigned(arg0: byte, arg1: byte): int
      public static toUnsignedInt(arg0: byte): int
      public static toUnsignedLong(arg0: byte): long
      public compareTo(arg0: java.lang.Object): int
    }

  }
}
