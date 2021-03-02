declare namespace java {
  namespace util {
    namespace concurrent {

      class Exchanger<V> {
        static readonly FULL: int
        public constructor()
        public exchange(arg0: V): V
        public exchange(arg0: V, arg1: number | java.lang.Long, arg2: java.util.concurrent.TimeUnit): V
      }

    }
  }
}
