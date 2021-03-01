declare namespace java {
  namespace lang {

    abstract class Enum<E extends java.lang.Enum<E>> implements java.lang.Comparable<E>, java.io.Serializable {

      public readonly name(): java.lang.String
      public readonly ordinal(): int
      protected constructor(arg0: java.lang.String, arg1: int)
      public toString(): java.lang.String
      public readonly equals(arg0: java.lang.Object): boolean
      public readonly hashCode(): int
      protected readonly clone(): java.lang.Object
      public readonly compareTo(arg0: E): int
      public readonly getDeclaringClass(): java.lang.Class<E>
      public static valueOf<T extends java.lang.Enum<T>>(arg0: java.lang.Class<T>, arg1: java.lang.String): T
      protected readonly finalize(): void
      public compareTo(arg0: java.lang.Object): int
    }

  }
}
