declare namespace java {
  namespace util {
    abstract class EnumSet<E extends java.lang.Enum<E>>
      extends java.util.AbstractSet<E>
      implements java.lang.Cloneable, java.io.Serializable
    {
      readonly elementType: java.lang.Class<E>
      readonly universe: java.lang.Enum<unknown>[]
      static access$000(): java.lang.Enum<unknown>[]
      constructor(arg0: java.lang.Class<E>, arg1: java.lang.Enum<unknown>[])
      public static noneOf<E extends java.lang.Enum<E>>(arg0: java.lang.Class<E>): java.util.EnumSet<E>
      public static allOf<E extends java.lang.Enum<E>>(arg0: java.lang.Class<E>): java.util.EnumSet<E>
      abstract addAll(): void
      public static copyOf<E extends java.lang.Enum<E>>(arg0: java.util.EnumSet<E>): java.util.EnumSet<E>
      public static copyOf<E extends java.lang.Enum<E>>(arg0: java.util.Collection<E>): java.util.EnumSet<E>
      public static complementOf<E extends java.lang.Enum<E>>(arg0: java.util.EnumSet<E>): java.util.EnumSet<E>
      public static of<E extends java.lang.Enum<E>>(arg0: E): java.util.EnumSet<E>
      public static of<E extends java.lang.Enum<E>>(arg0: E, arg1: E): java.util.EnumSet<E>
      public static of<E extends java.lang.Enum<E>>(arg0: E, arg1: E, arg2: E): java.util.EnumSet<E>
      public static of<E extends java.lang.Enum<E>>(arg0: E, arg1: E, arg2: E, arg3: E): java.util.EnumSet<E>
      public static of<E extends java.lang.Enum<E>>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): java.util.EnumSet<E>
      public static of<E extends java.lang.Enum<E>>(arg0: E, ...vargs: E[]): java.util.EnumSet<E>
      public static range<E extends java.lang.Enum<E>>(arg0: E, arg1: E): java.util.EnumSet<E>
      abstract addRange(arg0: E, arg1: E): void
      public clone(): java.util.EnumSet<E>
      abstract complement(): void
      typeCheck(arg0: E): void
      writeReplace(): java.lang.Object
      public clone(): java.lang.Object
    }
  }
}
