declare namespace java {
  namespace util {

    interface ServiceLoader$Provider<S> extends java.util.function$.Supplier<S> {
      type(): java.lang.Class<S>
      get(): S
    }

  }
}
