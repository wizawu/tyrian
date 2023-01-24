declare namespace java {
  namespace lang {
    class Boolean implements java.io.Serializable, java.lang.Comparable<java.lang.Boolean> {
      public static readonly TRUE: java.lang.Boolean
      public static readonly FALSE: java.lang.Boolean
      public static readonly TYPE: java.lang.Class<java.lang.Boolean>
      public constructor(arg0: boolean | java.lang.Boolean)
      public constructor(arg0: java.lang.String | string)
      public static parseBoolean(arg0: java.lang.String | string): boolean
      public booleanValue(): boolean
      public static valueOf(arg0: boolean | java.lang.Boolean): boolean
      public static valueOf(arg0: java.lang.String | string): boolean
      public static toString(arg0: boolean | java.lang.Boolean): java.lang.String
      public toString(): java.lang.String
      public hashCode(): number
      public static hashCode(arg0: boolean | java.lang.Boolean): number
      public equals(arg0: java.lang.Object | any): boolean
      public static getBoolean(arg0: java.lang.String | string): boolean
      public compareTo(arg0: boolean | java.lang.Boolean): number
      public static compare(arg0: boolean | java.lang.Boolean, arg1: boolean | java.lang.Boolean): number
      public static logicalAnd(arg0: boolean | java.lang.Boolean, arg1: boolean | java.lang.Boolean): boolean
      public static logicalOr(arg0: boolean | java.lang.Boolean, arg1: boolean | java.lang.Boolean): boolean
      public static logicalXor(arg0: boolean | java.lang.Boolean, arg1: boolean | java.lang.Boolean): boolean
      public compareTo(arg0: java.lang.Object | any): number
    }
  }
}
