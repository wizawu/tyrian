declare namespace java {
  namespace lang {

    class ThreadLocal<T> {

      protected initialValue(): T
      public static withInitial<S>(arg0: java.util.function$.Supplier<S>): java.lang.ThreadLocal<S>
      public constructor()
      public get(): T
      isPresent(): boolean
      public set(arg0: T): void
      public remove(): void
      getMap(arg0: java.lang.Thread): java.lang.ThreadLocal$ThreadLocalMap
      createMap(arg0: java.lang.Thread, arg1: T): void
      static createInheritedMap(arg0: java.lang.ThreadLocal$ThreadLocalMap): java.lang.ThreadLocal$ThreadLocalMap
      childValue(arg0: T): T
    }

  }
}
