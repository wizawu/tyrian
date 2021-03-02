declare namespace java {
  namespace util {

    class Objects {
      public static equals(arg0: java.lang.Object | any, arg1: java.lang.Object | any): boolean
      public static deepEquals(arg0: java.lang.Object | any, arg1: java.lang.Object | any): boolean
      public static hashCode(arg0: java.lang.Object | any): number
      public static hash(...vargs: (java.lang.Object | any)[]): number
      public static toString(arg0: java.lang.Object | any): java.lang.String
      public static toString(arg0: java.lang.Object | any, arg1: java.lang.String | string): java.lang.String
      public static compare<T>(arg0: T, arg1: T, arg2: java.util.Comparator<unknown>): number
      public static requireNonNull<T>(arg0: T): T
      public static requireNonNull<T>(arg0: T, arg1: java.lang.String | string): T
      public static isNull(arg0: java.lang.Object | any): boolean
      public static nonNull(arg0: java.lang.Object | any): boolean
      public static requireNonNullElse<T>(arg0: T, arg1: T): T
      public static requireNonNullElseGet<T>(arg0: T, arg1: java.util.function$.Supplier<T> | java.util.function$.Supplier$$lambda<T>): T
      public static requireNonNull<T>(arg0: T, arg1: java.util.function$.Supplier<java.lang.String> | java.util.function$.Supplier$$lambda<java.lang.String>): T
      public static checkIndex(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
      public static checkFromToIndex(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
      public static checkFromIndexSize(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
    }

  }
}
