declare namespace java {
  namespace util {
    namespace concurrent {

      abstract class RecursiveTask<V> extends java.util.concurrent.ForkJoinTask<V> {

        result: V
        public constructor()
        protected abstract compute(): V
        public readonly getRawResult(): V
        protected readonly setRawResult(arg0: V): void
        protected readonly exec(): boolean
      }

    }
  }
}
