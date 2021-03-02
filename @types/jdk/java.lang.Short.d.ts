declare namespace java {
  namespace lang {

    class Short extends java.lang.Number implements java.lang.Comparable<java.lang.Short> {
      public static readonly MIN_VALUE: short
      public static readonly MAX_VALUE: short
      public static readonly TYPE: java.lang.Class<java.lang.Short>
      public static readonly SIZE: int
      public static readonly BYTES: int
      public static toString(arg0: short): java.lang.String
      public static parseShort(arg0: java.lang.String, arg1: int): short
      public static parseShort(arg0: java.lang.String): short
      public static valueOf(arg0: java.lang.String, arg1: int): java.lang.Short
      public static valueOf(arg0: java.lang.String): java.lang.Short
      public static valueOf(arg0: short): java.lang.Short
      public static decode(arg0: java.lang.String): java.lang.Short
      public constructor(arg0: short)
      public constructor(arg0: java.lang.String)
      public byteValue(): byte
      public shortValue(): short
      public intValue(): int
      public longValue(): long
      public floatValue(): float
      public doubleValue(): double
      public toString(): java.lang.String
      public hashCode(): int
      public static hashCode(arg0: short): int
      public equals(arg0: java.lang.Object): boolean
      public compareTo(arg0: java.lang.Short): int
      public static compare(arg0: short, arg1: short): int
      public static compareUnsigned(arg0: short, arg1: short): int
      public static reverseBytes(arg0: short): short
      public static toUnsignedInt(arg0: short): int
      public static toUnsignedLong(arg0: short): long
      public compareTo(arg0: java.lang.Object): int
    }

  }
}
