declare namespace java {
  namespace util {

    class Objects {
      public static equals(arg0: java.lang.Object, arg1: java.lang.Object): boolean
      public static deepEquals(arg0: java.lang.Object, arg1: java.lang.Object): boolean
      public static hashCode(arg0: java.lang.Object): int
      public static hash(...arg0: java.lang.Object[]): int
      public static toString(arg0: java.lang.Object): java.lang.String
      public static toString(arg0: java.lang.Object, arg1: java.lang.String): java.lang.String
      public static compare<T>(arg0: T, arg1: T, arg2: java.util.Comparator<unknown>): int
      public static requireNonNull<T>(arg0: T): T
      public static requireNonNull<T>(arg0: T, arg1: java.lang.String): T
      public static isNull(arg0: java.lang.Object): boolean
      public static nonNull(arg0: java.lang.Object): boolean
      public static requireNonNullElse<T>(arg0: T, arg1: T): T
      public static requireNonNullElseGet<T>(arg0: T, arg1: java.util.function$.Supplier<T>): T
      public static requireNonNull<T>(arg0: T, arg1: java.util.function$.Supplier<java.lang.String>): T
      public static checkIndex(arg0: int, arg1: int): int
      public static checkFromToIndex(arg0: int, arg1: int, arg2: int): int
      public static checkFromIndexSize(arg0: int, arg1: int, arg2: int): int
    }

  }
}
