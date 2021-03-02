declare namespace java {
  namespace lang {

    abstract class Enum<E extends java.lang.Enum<E>> implements java.lang.Comparable<E>, java.io.Serializable {
      public name(): java.lang.String
      public ordinal(): int
      protected constructor(arg0: java.lang.String, arg1: int)
      public toString(): java.lang.String
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      protected clone(): java.lang.Object
      public compareTo(arg0: E): int
      public getDeclaringClass(): java.lang.Class<E>
      public static valueOf<T extends java.lang.Enum<T>>(arg0: java.lang.Class<T>, arg1: java.lang.String): T
      protected finalize(): void
      public compareTo(arg0: java.lang.Object): int
    }

  }
}
