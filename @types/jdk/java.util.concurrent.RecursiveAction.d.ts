declare namespace java {
  namespace util {
    namespace concurrent {

      abstract class RecursiveAction extends java.util.concurrent.ForkJoinTask<java.lang.Void> {
        public constructor()
        protected abstract compute(): void
        public getRawResult(): java.lang.Void
        protected setRawResult(arg0: java.lang.Void): void
        protected exec(): boolean
        protected setRawResult(arg0: java.lang.Object): void
        public getRawResult(): java.lang.Object
      }

    }
  }
}
