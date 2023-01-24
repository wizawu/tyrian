declare namespace java {
  namespace lang {
    class Byte extends java.lang.Number implements java.lang.Comparable<java.lang.Byte> {
      public static readonly MIN_VALUE: byte
      public static readonly MAX_VALUE: byte
      public static readonly TYPE: java.lang.Class<java.lang.Byte>
      public static readonly SIZE: int
      public static readonly BYTES: int
      public static toString(arg0: number | java.lang.Byte): java.lang.String
      public static valueOf(arg0: number | java.lang.Byte): number
      public static parseByte(arg0: java.lang.String | string, arg1: number | java.lang.Integer): number
      public static parseByte(arg0: java.lang.String | string): number
      public static valueOf(arg0: java.lang.String | string, arg1: number | java.lang.Integer): number
      public static valueOf(arg0: java.lang.String | string): number
      public static decode(arg0: java.lang.String | string): number
      public constructor(arg0: number | java.lang.Byte)
      public constructor(arg0: java.lang.String | string)
      public byteValue(): number
      public shortValue(): number
      public intValue(): number
      public longValue(): number
      public floatValue(): number
      public doubleValue(): number
      public toString(): java.lang.String
      public hashCode(): number
      public static hashCode(arg0: number | java.lang.Byte): number
      public equals(arg0: java.lang.Object | any): boolean
      public compareTo(arg0: number | java.lang.Byte): number
      public static compare(arg0: number | java.lang.Byte, arg1: number | java.lang.Byte): number
      public static compareUnsigned(arg0: number | java.lang.Byte, arg1: number | java.lang.Byte): number
      public static toUnsignedInt(arg0: number | java.lang.Byte): number
      public static toUnsignedLong(arg0: number | java.lang.Byte): number
      public compareTo(arg0: java.lang.Object | any): number
    }
  }
}
