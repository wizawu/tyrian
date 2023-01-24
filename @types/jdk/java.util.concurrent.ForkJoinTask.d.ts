declare namespace java {
  namespace util {
    namespace concurrent {
      abstract class ForkJoinTask<V> implements java.util.concurrent.Future<V>, java.io.Serializable {
        status: int
        public constructor()
        static isExceptionalStatus(arg0: number | java.lang.Integer): boolean
        doExec(): number
        internalWait(arg0: number | java.lang.Long): void
        recordExceptionalCompletion(arg0: java.lang.Throwable): number
        internalPropagateException(arg0: java.lang.Throwable): void
        static cancelIgnoringExceptions(arg0: java.util.concurrent.ForkJoinTask<unknown>): void
        static helpExpungeStaleExceptions(): void
        static rethrow(arg0: java.lang.Throwable): void
        static uncheckedThrow<T extends java.lang.Throwable>(arg0: java.lang.Throwable): void
        public fork(): java.util.concurrent.ForkJoinTask<V>
        public join(): V
        public invoke(): V
        public static invokeAll(
          arg0: java.util.concurrent.ForkJoinTask<unknown>,
          arg1: java.util.concurrent.ForkJoinTask<unknown>
        ): void
        public static invokeAll(...vargs: java.util.concurrent.ForkJoinTask<unknown>[]): void
        public static invokeAll<T extends java.util.concurrent.ForkJoinTask<unknown>>(
          arg0: java.util.Collection<T>
        ): java.util.Collection<T>
        public cancel(arg0: boolean | java.lang.Boolean): boolean
        public isDone(): boolean
        public isCancelled(): boolean
        public isCompletedAbnormally(): boolean
        public isCompletedNormally(): boolean
        public getException(): java.lang.Throwable
        public completeExceptionally(arg0: java.lang.Throwable): void
        public complete(arg0: V): void
        public quietlyComplete(): void
        public get(): V
        public get(arg0: number | java.lang.Long, arg1: java.util.concurrent.TimeUnit): V
        public quietlyJoin(): void
        public quietlyInvoke(): void
        public static helpQuiesce(): void
        public reinitialize(): void
        public static getPool(): java.util.concurrent.ForkJoinPool
        public static inForkJoinPool(): boolean
        public tryUnfork(): boolean
        public static getQueuedTaskCount(): number
        public static getSurplusQueuedTaskCount(): number
        public abstract getRawResult(): V
        protected abstract setRawResult(arg0: V): void
        protected abstract exec(): boolean
        protected static peekNextLocalTask(): java.util.concurrent.ForkJoinTask<unknown>
        protected static pollNextLocalTask(): java.util.concurrent.ForkJoinTask<unknown>
        protected static pollTask(): java.util.concurrent.ForkJoinTask<unknown>
        protected static pollSubmission(): java.util.concurrent.ForkJoinTask<unknown>
        public getForkJoinTaskTag(): number
        public setForkJoinTaskTag(arg0: number | java.lang.Short): number
        public compareAndSetForkJoinTaskTag(arg0: number | java.lang.Short, arg1: number | java.lang.Short): boolean
        public static adapt(
          arg0: java.lang.Runnable | java.lang.Runnable$$lambda
        ): java.util.concurrent.ForkJoinTask<unknown>
        public static adapt<T>(
          arg0: java.lang.Runnable | java.lang.Runnable$$lambda,
          arg1: T
        ): java.util.concurrent.ForkJoinTask<T>
        public static adapt<T>(
          arg0: java.util.concurrent.Callable<T> | java.util.concurrent.Callable$$lambda<T>
        ): java.util.concurrent.ForkJoinTask<T>
      }
    }
  }
}
