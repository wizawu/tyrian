declare namespace java {
  namespace util {

    class Optional<T> {
      public static empty<T>(): java.util.Optional<T>
      public static of<T>(arg0: T): java.util.Optional<T>
      public static ofNullable<T>(arg0: T): java.util.Optional<T>
      public get(): T
      public isPresent(): boolean
      public isEmpty(): boolean
      public ifPresent(arg0: java.util.function$.Consumer<unknown>): void
      public ifPresentOrElse(arg0: java.util.function$.Consumer<unknown>, arg1: java.lang.Runnable | java.lang.Runnable$$lambda): void
      public filter(arg0: java.util.function$.Predicate<unknown>): java.util.Optional<T>
      public map<U>(arg0: java.util.function$.Function<unknown,U>): java.util.Optional<U>
      public flatMap<U>(arg0: java.util.function$.Function<unknown,java.util.Optional<U>>): java.util.Optional<U>
      public or(arg0: java.util.function$.Supplier<java.util.Optional<T>> | java.util.function$.Supplier$$lambda<java.util.Optional<T>>): java.util.Optional<T>
      public stream(): java.util.stream.Stream<T>
      public orElse(arg0: T): T
      public orElseGet(arg0: java.util.function$.Supplier<T> | java.util.function$.Supplier$$lambda<T>): T
      public orElseThrow(): T
      public orElseThrow<X extends java.lang.Throwable>(arg0: java.util.function$.Supplier<X> | java.util.function$.Supplier$$lambda<X>): T
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public toString(): java.lang.String
    }

  }
}
