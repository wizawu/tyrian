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
        static readonly roundCapacity(arg0: int): int
        public constructor(arg0: java.util.concurrent.Executor, arg1: int, arg2: java.util.function$.BiConsumer<unknown,unknown>)
        public constructor(arg0: java.util.concurrent.Executor, arg1: int)
        public constructor()
        public subscribe(arg0: java.util.concurrent.Flow$Subscriber<unknown>): void
        public submit(arg0: T): int
        public offer(arg0: T, arg1: java.util.function$.BiPredicate<java.util.concurrent.Flow$Subscriber<unknown>,unknown>): int
        public offer(arg0: T, arg1: long, arg2: java.util.concurrent.TimeUnit, arg3: java.util.function$.BiPredicate<java.util.concurrent.Flow$Subscriber<unknown>,unknown>): int
        public close(): void
        public closeExceptionally(arg0: java.lang.Throwable): void
        public isClosed(): boolean
        public getClosedException(): java.lang.Throwable
        public hasSubscribers(): boolean
        public getNumberOfSubscribers(): int
        public getExecutor(): java.util.concurrent.Executor
        public getMaxBufferCapacity(): int
        public getSubscribers(): java.util.List<java.util.concurrent.Flow$Subscriber<unknown>>
        public isSubscribed(arg0: java.util.concurrent.Flow$Subscriber<unknown>): boolean
        public estimateMinimumDemand(): long
        public estimateMaximumLag(): int
        public consume(arg0: java.util.function$.Consumer<unknown>): java.util.concurrent.CompletableFuture<java.lang.Void>
      }

    }
  }
}
