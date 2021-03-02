declare namespace java {
  namespace util {
    namespace concurrent {

      abstract class CountedCompleter<T> extends java.util.concurrent.ForkJoinTask<T> {
        readonly completer: java.util.concurrent.CountedCompleter<unknown>
        pending: int
        protected constructor(arg0: java.util.concurrent.CountedCompleter<unknown>, arg1: int)
        protected constructor(arg0: java.util.concurrent.CountedCompleter<unknown>)
        protected constructor()
        public abstract compute(): void
        public onCompletion(arg0: java.util.concurrent.CountedCompleter<unknown>): void
        public onExceptionalCompletion(arg0: java.lang.Throwable, arg1: java.util.concurrent.CountedCompleter<unknown>): boolean
        public getCompleter(): java.util.concurrent.CountedCompleter<unknown>
        public getPendingCount(): int
        public setPendingCount(arg0: int): void
        public addToPendingCount(arg0: int): void
        public compareAndSetPendingCount(arg0: int, arg1: int): boolean
        public decrementPendingCountUnlessZero(): int
        public getRoot(): java.util.concurrent.CountedCompleter<unknown>
        public tryComplete(): void
        public propagateCompletion(): void
        public complete(arg0: T): void
        public firstComplete(): java.util.concurrent.CountedCompleter<unknown>
        public nextComplete(): java.util.concurrent.CountedCompleter<unknown>
        public quietlyCompleteRoot(): void
        public helpComplete(arg0: int): void
        internalPropagateException(arg0: java.lang.Throwable): void
        protected exec(): boolean
        public getRawResult(): T
        protected setRawResult(arg0: T): void
      }

    }
  }
}
