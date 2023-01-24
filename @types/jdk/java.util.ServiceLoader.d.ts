declare namespace java {
  namespace util {
    class ServiceLoader<S> implements java.lang.Iterable<S> {
      static readonly $assertionsDisabled: boolean
      public iterator(): java.util.Iterator<S>
      public stream(): java.util.stream.Stream<java.util.ServiceLoader$Provider<S>>
      static load<S>(
        arg0: java.lang.Class<S>,
        arg1: java.lang.ClassLoader,
        arg2: java.lang.Module
      ): java.util.ServiceLoader<S>
      public static load<S>(arg0: java.lang.Class<S>, arg1: java.lang.ClassLoader): java.util.ServiceLoader<S>
      public static load<S>(arg0: java.lang.Class<S>): java.util.ServiceLoader<S>
      public static loadInstalled<S>(arg0: java.lang.Class<S>): java.util.ServiceLoader<S>
      public static load<S>(arg0: java.lang.ModuleLayer, arg1: java.lang.Class<S>): java.util.ServiceLoader<S>
      public findFirst(): java.util.Optional<S>
      public reload(): void
      public toString(): java.lang.String
    }
  }
}
