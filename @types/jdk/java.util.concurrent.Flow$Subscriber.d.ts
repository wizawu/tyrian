declare namespace java {
  namespace util {
    namespace concurrent {

      interface Flow$Subscriber<T> {
        onSubscribe(arg0: java.util.concurrent.Flow$Subscription): void
        onNext(arg0: T): void
        onError(arg0: java.lang.Throwable): void
        onComplete(): void
      }

    }
  }
}
