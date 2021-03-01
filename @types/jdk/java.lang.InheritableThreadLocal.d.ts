declare namespace java {
  namespace lang {

    class InheritableThreadLocal<T> extends java.lang.ThreadLocal<T> {

      public constructor()
      protected childValue(arg0: T): T
      getMap(arg0: java.lang.Thread): java.lang.ThreadLocal$ThreadLocalMap
      createMap(arg0: java.lang.Thread, arg1: T): void
    }

  }
}
