declare namespace java {
  namespace lang {

    class Boolean implements java.io.Serializable, java.lang.Comparable<java.lang.Boolean> {
      public static readonly TRUE: java.lang.Boolean
      public static readonly FALSE: java.lang.Boolean
      public static readonly TYPE: java.lang.Class<java.lang.Boolean>
      public constructor(arg0: boolean)
      public constructor(arg0: java.lang.String)
      public static parseBoolean(arg0: java.lang.String): boolean
      public booleanValue(): boolean
      public static valueOf(arg0: boolean): java.lang.Boolean
      public static valueOf(arg0: java.lang.String): java.lang.Boolean
      public static toString(arg0: boolean): java.lang.String
      public toString(): java.lang.String
      public hashCode(): int
      public static hashCode(arg0: boolean): int
      public equals(arg0: java.lang.Object): boolean
      public static getBoolean(arg0: java.lang.String): boolean
      public compareTo(arg0: java.lang.Boolean): int
      public static compare(arg0: boolean, arg1: boolean): int
      public static logicalAnd(arg0: boolean, arg1: boolean): boolean
      public static logicalOr(arg0: boolean, arg1: boolean): boolean
      public static logicalXor(arg0: boolean, arg1: boolean): boolean
      public compareTo(arg0: java.lang.Object): int
    }

  }
}
