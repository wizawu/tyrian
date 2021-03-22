declare namespace java {
  namespace util {
    namespace concurrent {

      class SubmissionPublisher<T> implements java.util.concurrent.Flow$Publisher<T>, java.lang.AutoCloseable {
        static readonly BUFFER_CAPACITY_LIMIT: int
        static readonly INITIAL_CAPACITY: int
        clients: java.util.concurrent.SubmissionPublisher$BufferedSubscription<T>
        closed: boolean
        subscribed: boolean
        owner: java.lang.Thread
        closedException: java.lang.Throwable
        readonly executor: java.util.concurrent.Executor
        readonly onNextHandler: java.util.function$.BiConsumer<unknown,unknown>
        readonly maxBufferCapacity: int
        static roundCapacity(arg0: number | java.lang.Integer): number
        public constructor(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda, arg1: number | java.lang.Integer, arg2: java.util.function$.BiConsumer<unknown,unknown>)
        public constructor(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda, arg1: number | java.lang.Integer)
        public constructor()
        public subscribe(arg0: java.util.concurrent.Flow$Subscriber<unknown>): void
        public submit(arg0: T): number
        public offer(arg0: T, arg1: java.util.function$.BiPredicate<java.util.concurrent.Flow$Subscriber<unknown>,unknown>): number
        public offer(arg0: T, arg1: number | java.lang.Long, arg2: java.util.concurrent.TimeUnit, arg3: java.util.function$.BiPredicate<java.util.concurrent.Flow$Subscriber<unknown>,unknown>): number
        public close(): void
        public closeExceptionally(arg0: java.lang.Throwable): void
        public isClosed(): boolean
        public getClosedException(): java.lang.Throwable
        public hasSubscribers(): boolean
        public getNumberOfSubscribers(): number
        public getExecutor(): java.util.concurrent.Executor
        public getMaxBufferCapacity(): number
        public getSubscribers(): java.util.List<java.util.concurrent.Flow$Subscriber<unknown>>
        public isSubscribed(arg0: java.util.concurrent.Flow$Subscriber<unknown>): boolean
        public estimateMinimumDemand(): number
        public estimateMaximumLag(): number
        public consume(arg0: java.util.function$.Consumer<unknown> | java.util.function$.Consumer$$lambda<unknown>): java.util.concurrent.CompletableFuture<java.lang.Void>
      }

    }
  }
}
