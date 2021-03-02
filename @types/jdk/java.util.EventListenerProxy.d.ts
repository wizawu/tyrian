declare namespace java {
  namespace util {

    abstract class EventListenerProxy<T extends java.util.EventListener> implements java.util.EventListener {
      public constructor(arg0: T)
      public getListener(): T
    }

  }
}
