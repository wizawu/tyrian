declare namespace java {
  namespace util {
    namespace concurrent {

      abstract class RecursiveAction extends java.util.concurrent.ForkJoinTask<java.lang.Void> {

        public constructor()
        protected abstract compute(): void
        public readonly getRawResult(): java.lang.Void
        protected readonly setRawResult(arg0: java.lang.Void): void
        protected readonly exec(): boolean
        protected setRawResult(arg0: java.lang.Object): void
        public getRawResult(): java.lang.Object
      }

    }
  }
}
