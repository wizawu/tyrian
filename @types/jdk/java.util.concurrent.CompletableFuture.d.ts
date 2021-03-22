declare namespace java {
  namespace util {
    namespace concurrent {

      class CompletableFuture<T> implements java.util.concurrent.Future<T>, java.util.concurrent.CompletionStage<T> {
        result: java.lang.Object
        stack: java.util.concurrent.CompletableFuture$Completion
        static readonly NIL: java.util.concurrent.CompletableFuture$AltResult
        static readonly SYNC: int
        static readonly ASYNC: int
        static readonly NESTED: int
        internalComplete(arg0: java.lang.Object | any): boolean
        tryPushStack(arg0: java.util.concurrent.CompletableFuture$Completion): boolean
        pushStack(arg0: java.util.concurrent.CompletableFuture$Completion): void
        completeNull(): boolean
        encodeValue(arg0: T): java.lang.Object
        completeValue(arg0: T): boolean
        static encodeThrowable(arg0: java.lang.Throwable): java.util.concurrent.CompletableFuture$AltResult
        completeThrowable(arg0: java.lang.Throwable): boolean
        static encodeThrowable(arg0: java.lang.Throwable, arg1: java.lang.Object | any): java.lang.Object
        completeThrowable(arg0: java.lang.Throwable, arg1: java.lang.Object | any): boolean
        encodeOutcome(arg0: T, arg1: java.lang.Throwable): java.lang.Object
        static encodeRelay(arg0: java.lang.Object | any): java.lang.Object
        completeRelay(arg0: java.lang.Object | any): boolean
        static screenExecutor(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda): java.util.concurrent.Executor
        postComplete(): void
        cleanStack(): void
        unipush(arg0: java.util.concurrent.CompletableFuture$Completion): void
        postFire(arg0: java.util.concurrent.CompletableFuture<unknown>, arg1: number | java.lang.Integer): java.util.concurrent.CompletableFuture<T>
        uniWhenComplete(arg0: java.lang.Object | any, arg1: java.util.function$.BiConsumer<unknown,unknown>, arg2: java.util.concurrent.CompletableFuture$UniWhenComplete<T>): boolean
        uniHandle<S>(arg0: java.lang.Object | any, arg1: java.util.function$.BiFunction<unknown,java.lang.Throwable,T>, arg2: java.util.concurrent.CompletableFuture$UniHandle<S,T>): boolean
        uniExceptionally(arg0: java.lang.Object | any, arg1: java.util.function$.Function<unknown,T>, arg2: java.util.concurrent.CompletableFuture$UniExceptionally<T>): boolean
        bipush(arg0: java.util.concurrent.CompletableFuture<unknown>, arg1: java.util.concurrent.CompletableFuture$BiCompletion<unknown,unknown,unknown>): void
        postFire(arg0: java.util.concurrent.CompletableFuture<unknown>, arg1: java.util.concurrent.CompletableFuture<unknown>, arg2: number | java.lang.Integer): java.util.concurrent.CompletableFuture<T>
        biApply<R,S>(arg0: java.lang.Object | any, arg1: java.lang.Object | any, arg2: java.util.function$.BiFunction<unknown,unknown,T>, arg3: java.util.concurrent.CompletableFuture$BiApply<R,S,T>): boolean
        biAccept<R,S>(arg0: java.lang.Object | any, arg1: java.lang.Object | any, arg2: java.util.function$.BiConsumer<unknown,unknown>, arg3: java.util.concurrent.CompletableFuture$BiAccept<R,S>): boolean
        biRun(arg0: java.lang.Object | any, arg1: java.lang.Object | any, arg2: java.lang.Runnable | java.lang.Runnable$$lambda, arg3: java.util.concurrent.CompletableFuture$BiRun<unknown,unknown>): boolean
        static andTree(arg0: java.util.concurrent.CompletableFuture<unknown>[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.util.concurrent.CompletableFuture<java.lang.Void>
        orpush(arg0: java.util.concurrent.CompletableFuture<unknown>, arg1: java.util.concurrent.CompletableFuture$BiCompletion<unknown,unknown,unknown>): void
        static asyncSupplyStage<U>(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda, arg1: java.util.function$.Supplier<U> | java.util.function$.Supplier$$lambda<U>): java.util.concurrent.CompletableFuture<U>
        static asyncRunStage(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda, arg1: java.lang.Runnable | java.lang.Runnable$$lambda): java.util.concurrent.CompletableFuture<java.lang.Void>
        public constructor()
        constructor(arg0: java.lang.Object | any)
        public static supplyAsync<U>(arg0: java.util.function$.Supplier<U> | java.util.function$.Supplier$$lambda<U>): java.util.concurrent.CompletableFuture<U>
        public static supplyAsync<U>(arg0: java.util.function$.Supplier<U> | java.util.function$.Supplier$$lambda<U>, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda): java.util.concurrent.CompletableFuture<U>
        public static runAsync(arg0: java.lang.Runnable | java.lang.Runnable$$lambda): java.util.concurrent.CompletableFuture<java.lang.Void>
        public static runAsync(arg0: java.lang.Runnable | java.lang.Runnable$$lambda, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda): java.util.concurrent.CompletableFuture<java.lang.Void>
        public static completedFuture<U>(arg0: U): java.util.concurrent.CompletableFuture<U>
        public isDone(): boolean
        public get(): T
        public get(arg0: number | java.lang.Long, arg1: java.util.concurrent.TimeUnit): T
        public join(): T
        public getNow(arg0: T): T
        public complete(arg0: T): boolean
        public completeExceptionally(arg0: java.lang.Throwable): boolean
        public thenApply<U>(arg0: java.util.function$.Function<unknown,U>): java.util.concurrent.CompletableFuture<U>
        public thenApplyAsync<U>(arg0: java.util.function$.Function<unknown,U>): java.util.concurrent.CompletableFuture<U>
        public thenApplyAsync<U>(arg0: java.util.function$.Function<unknown,U>, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda): java.util.concurrent.CompletableFuture<U>
        public thenAccept(arg0: java.util.function$.Consumer<unknown> | java.util.function$.Consumer$$lambda<unknown>): java.util.concurrent.CompletableFuture<java.lang.Void>
        public thenAcceptAsync(arg0: java.util.function$.Consumer<unknown> | java.util.function$.Consumer$$lambda<unknown>): java.util.concurrent.CompletableFuture<java.lang.Void>
        public thenAcceptAsync(arg0: java.util.function$.Consumer<unknown> | java.util.function$.Consumer$$lambda<unknown>, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda): java.util.concurrent.CompletableFuture<java.lang.Void>
        public thenRun(arg0: java.lang.Runnable | java.lang.Runnable$$lambda): java.util.concurrent.CompletableFuture<java.lang.Void>
        public thenRunAsync(arg0: java.lang.Runnable | java.lang.Runnable$$lambda): java.util.concurrent.CompletableFuture<java.lang.Void>
        public thenRunAsync(arg0: java.lang.Runnable | java.lang.Runnable$$lambda, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda): java.util.concurrent.CompletableFuture<java.lang.Void>
        public thenCombine<U,V>(arg0: java.util.concurrent.CompletionStage<U>, arg1: java.util.function$.BiFunction<unknown,unknown,V>): java.util.concurrent.CompletableFuture<V>
        public thenCombineAsync<U,V>(arg0: java.util.concurrent.CompletionStage<U>, arg1: java.util.function$.BiFunction<unknown,unknown,V>): java.util.concurrent.CompletableFuture<V>
        public thenCombineAsync<U,V>(arg0: java.util.concurrent.CompletionStage<U>, arg1: java.util.function$.BiFunction<unknown,unknown,V>, arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda): java.util.concurrent.CompletableFuture<V>
        public thenAcceptBoth<U>(arg0: java.util.concurrent.CompletionStage<U>, arg1: java.util.function$.BiConsumer<unknown,unknown>): java.util.concurrent.CompletableFuture<java.lang.Void>
        public thenAcceptBothAsync<U>(arg0: java.util.concurrent.CompletionStage<U>, arg1: java.util.function$.BiConsumer<unknown,unknown>): java.util.concurrent.CompletableFuture<java.lang.Void>
        public thenAcceptBothAsync<U>(arg0: java.util.concurrent.CompletionStage<U>, arg1: java.util.function$.BiConsumer<unknown,unknown>, arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda): java.util.concurrent.CompletableFuture<java.lang.Void>
        public runAfterBoth(arg0: java.util.concurrent.CompletionStage<unknown>, arg1: java.lang.Runnable | java.lang.Runnable$$lambda): java.util.concurrent.CompletableFuture<java.lang.Void>
        public runAfterBothAsync(arg0: java.util.concurrent.CompletionStage<unknown>, arg1: java.lang.Runnable | java.lang.Runnable$$lambda): java.util.concurrent.CompletableFuture<java.lang.Void>
        public runAfterBothAsync(arg0: java.util.concurrent.CompletionStage<unknown>, arg1: java.lang.Runnable | java.lang.Runnable$$lambda, arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda): java.util.concurrent.CompletableFuture<java.lang.Void>
        public applyToEither<U>(arg0: java.util.concurrent.CompletionStage<T>, arg1: java.util.function$.Function<unknown,U>): java.util.concurrent.CompletableFuture<U>
        public applyToEitherAsync<U>(arg0: java.util.concurrent.CompletionStage<T>, arg1: java.util.function$.Function<unknown,U>): java.util.concurrent.CompletableFuture<U>
        public applyToEitherAsync<U>(arg0: java.util.concurrent.CompletionStage<T>, arg1: java.util.function$.Function<unknown,U>, arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda): java.util.concurrent.CompletableFuture<U>
        public acceptEither(arg0: java.util.concurrent.CompletionStage<T>, arg1: java.util.function$.Consumer<unknown> | java.util.function$.Consumer$$lambda<unknown>): java.util.concurrent.CompletableFuture<java.lang.Void>
        public acceptEitherAsync(arg0: java.util.concurrent.CompletionStage<T>, arg1: java.util.function$.Consumer<unknown> | java.util.function$.Consumer$$lambda<unknown>): java.util.concurrent.CompletableFuture<java.lang.Void>
        public acceptEitherAsync(arg0: java.util.concurrent.CompletionStage<T>, arg1: java.util.function$.Consumer<unknown> | java.util.function$.Consumer$$lambda<unknown>, arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda): java.util.concurrent.CompletableFuture<java.lang.Void>
        public runAfterEither(arg0: java.util.concurrent.CompletionStage<unknown>, arg1: java.lang.Runnable | java.lang.Runnable$$lambda): java.util.concurrent.CompletableFuture<java.lang.Void>
        public runAfterEitherAsync(arg0: java.util.concurrent.CompletionStage<unknown>, arg1: java.lang.Runnable | java.lang.Runnable$$lambda): java.util.concurrent.CompletableFuture<java.lang.Void>
        public runAfterEitherAsync(arg0: java.util.concurrent.CompletionStage<unknown>, arg1: java.lang.Runnable | java.lang.Runnable$$lambda, arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda): java.util.concurrent.CompletableFuture<java.lang.Void>
        public thenCompose<U>(arg0: java.util.function$.Function<unknown,java.util.concurrent.CompletionStage<U>>): java.util.concurrent.CompletableFuture<U>
        public thenComposeAsync<U>(arg0: java.util.function$.Function<unknown,java.util.concurrent.CompletionStage<U>>): java.util.concurrent.CompletableFuture<U>
        public thenComposeAsync<U>(arg0: java.util.function$.Function<unknown,java.util.concurrent.CompletionStage<U>>, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda): java.util.concurrent.CompletableFuture<U>
        public whenComplete(arg0: java.util.function$.BiConsumer<unknown,unknown>): java.util.concurrent.CompletableFuture<T>
        public whenCompleteAsync(arg0: java.util.function$.BiConsumer<unknown,unknown>): java.util.concurrent.CompletableFuture<T>
        public whenCompleteAsync(arg0: java.util.function$.BiConsumer<unknown,unknown>, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda): java.util.concurrent.CompletableFuture<T>
        public handle<U>(arg0: java.util.function$.BiFunction<unknown,java.lang.Throwable,U>): java.util.concurrent.CompletableFuture<U>
        public handleAsync<U>(arg0: java.util.function$.BiFunction<unknown,java.lang.Throwable,U>): java.util.concurrent.CompletableFuture<U>
        public handleAsync<U>(arg0: java.util.function$.BiFunction<unknown,java.lang.Throwable,U>, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda): java.util.concurrent.CompletableFuture<U>
        public toCompletableFuture(): java.util.concurrent.CompletableFuture<T>
        public exceptionally(arg0: java.util.function$.Function<java.lang.Throwable,T>): java.util.concurrent.CompletableFuture<T>
        public static allOf(...vargs: (java.util.concurrent.CompletableFuture<unknown>)[]): java.util.concurrent.CompletableFuture<java.lang.Void>
        public static anyOf(...vargs: (java.util.concurrent.CompletableFuture<unknown>)[]): java.util.concurrent.CompletableFuture<java.lang.Object>
        public cancel(arg0: boolean | java.lang.Boolean): boolean
        public isCancelled(): boolean
        public isCompletedExceptionally(): boolean
        public obtrudeValue(arg0: T): void
        public obtrudeException(arg0: java.lang.Throwable): void
        public getNumberOfDependents(): number
        public toString(): java.lang.String
        public newIncompleteFuture<U>(): java.util.concurrent.CompletableFuture<U>
        public defaultExecutor(): java.util.concurrent.Executor
        public copy(): java.util.concurrent.CompletableFuture<T>
        public minimalCompletionStage(): java.util.concurrent.CompletionStage<T>
        public completeAsync(arg0: java.util.function$.Supplier<T> | java.util.function$.Supplier$$lambda<T>, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda): java.util.concurrent.CompletableFuture<T>
        public completeAsync(arg0: java.util.function$.Supplier<T> | java.util.function$.Supplier$$lambda<T>): java.util.concurrent.CompletableFuture<T>
        public orTimeout(arg0: number | java.lang.Long, arg1: java.util.concurrent.TimeUnit): java.util.concurrent.CompletableFuture<T>
        public completeOnTimeout(arg0: T, arg1: number | java.lang.Long, arg2: java.util.concurrent.TimeUnit): java.util.concurrent.CompletableFuture<T>
        public static delayedExecutor(arg0: number | java.lang.Long, arg1: java.util.concurrent.TimeUnit, arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda): java.util.concurrent.Executor
        public static delayedExecutor(arg0: number | java.lang.Long, arg1: java.util.concurrent.TimeUnit): java.util.concurrent.Executor
        public static completedStage<U>(arg0: U): java.util.concurrent.CompletionStage<U>
        public static failedFuture<U>(arg0: java.lang.Throwable): java.util.concurrent.CompletableFuture<U>
        public static failedStage<U>(arg0: java.lang.Throwable): java.util.concurrent.CompletionStage<U>
        public exceptionally(arg0: java.util.function$.Function): java.util.concurrent.CompletionStage
        public whenCompleteAsync(arg0: java.util.function$.BiConsumer, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda): java.util.concurrent.CompletionStage
        public whenCompleteAsync(arg0: java.util.function$.BiConsumer): java.util.concurrent.CompletionStage
        public whenComplete(arg0: java.util.function$.BiConsumer): java.util.concurrent.CompletionStage
        public handleAsync(arg0: java.util.function$.BiFunction, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda): java.util.concurrent.CompletionStage
        public handleAsync(arg0: java.util.function$.BiFunction): java.util.concurrent.CompletionStage
        public handle(arg0: java.util.function$.BiFunction): java.util.concurrent.CompletionStage
        public thenComposeAsync(arg0: java.util.function$.Function, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda): java.util.concurrent.CompletionStage
        public thenComposeAsync(arg0: java.util.function$.Function): java.util.concurrent.CompletionStage
        public thenCompose(arg0: java.util.function$.Function): java.util.concurrent.CompletionStage
        public runAfterEitherAsync(arg0: java.util.concurrent.CompletionStage, arg1: java.lang.Runnable | java.lang.Runnable$$lambda, arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda): java.util.concurrent.CompletionStage
        public runAfterEitherAsync(arg0: java.util.concurrent.CompletionStage, arg1: java.lang.Runnable | java.lang.Runnable$$lambda): java.util.concurrent.CompletionStage
        public runAfterEither(arg0: java.util.concurrent.CompletionStage, arg1: java.lang.Runnable | java.lang.Runnable$$lambda): java.util.concurrent.CompletionStage
        public acceptEitherAsync(arg0: java.util.concurrent.CompletionStage, arg1: java.util.function$.Consumer | java.util.function$.Consumer$$lambda, arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda): java.util.concurrent.CompletionStage
        public acceptEitherAsync(arg0: java.util.concurrent.CompletionStage, arg1: java.util.function$.Consumer | java.util.function$.Consumer$$lambda): java.util.concurrent.CompletionStage
        public acceptEither(arg0: java.util.concurrent.CompletionStage, arg1: java.util.function$.Consumer | java.util.function$.Consumer$$lambda): java.util.concurrent.CompletionStage
        public applyToEitherAsync(arg0: java.util.concurrent.CompletionStage, arg1: java.util.function$.Function, arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda): java.util.concurrent.CompletionStage
        public applyToEitherAsync(arg0: java.util.concurrent.CompletionStage, arg1: java.util.function$.Function): java.util.concurrent.CompletionStage
        public applyToEither(arg0: java.util.concurrent.CompletionStage, arg1: java.util.function$.Function): java.util.concurrent.CompletionStage
        public runAfterBothAsync(arg0: java.util.concurrent.CompletionStage, arg1: java.lang.Runnable | java.lang.Runnable$$lambda, arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda): java.util.concurrent.CompletionStage
        public runAfterBothAsync(arg0: java.util.concurrent.CompletionStage, arg1: java.lang.Runnable | java.lang.Runnable$$lambda): java.util.concurrent.CompletionStage
        public runAfterBoth(arg0: java.util.concurrent.CompletionStage, arg1: java.lang.Runnable | java.lang.Runnable$$lambda): java.util.concurrent.CompletionStage
        public thenAcceptBothAsync(arg0: java.util.concurrent.CompletionStage, arg1: java.util.function$.BiConsumer, arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda): java.util.concurrent.CompletionStage
        public thenAcceptBothAsync(arg0: java.util.concurrent.CompletionStage, arg1: java.util.function$.BiConsumer): java.util.concurrent.CompletionStage
        public thenAcceptBoth(arg0: java.util.concurrent.CompletionStage, arg1: java.util.function$.BiConsumer): java.util.concurrent.CompletionStage
        public thenCombineAsync(arg0: java.util.concurrent.CompletionStage, arg1: java.util.function$.BiFunction, arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda): java.util.concurrent.CompletionStage
        public thenCombineAsync(arg0: java.util.concurrent.CompletionStage, arg1: java.util.function$.BiFunction): java.util.concurrent.CompletionStage
        public thenCombine(arg0: java.util.concurrent.CompletionStage, arg1: java.util.function$.BiFunction): java.util.concurrent.CompletionStage
        public thenRunAsync(arg0: java.lang.Runnable | java.lang.Runnable$$lambda, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda): java.util.concurrent.CompletionStage
        public thenRunAsync(arg0: java.lang.Runnable | java.lang.Runnable$$lambda): java.util.concurrent.CompletionStage
        public thenRun(arg0: java.lang.Runnable | java.lang.Runnable$$lambda): java.util.concurrent.CompletionStage
        public thenAcceptAsync(arg0: java.util.function$.Consumer | java.util.function$.Consumer$$lambda, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda): java.util.concurrent.CompletionStage
        public thenAcceptAsync(arg0: java.util.function$.Consumer | java.util.function$.Consumer$$lambda): java.util.concurrent.CompletionStage
        public thenAccept(arg0: java.util.function$.Consumer | java.util.function$.Consumer$$lambda): java.util.concurrent.CompletionStage
        public thenApplyAsync(arg0: java.util.function$.Function, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda): java.util.concurrent.CompletionStage
        public thenApplyAsync(arg0: java.util.function$.Function): java.util.concurrent.CompletionStage
        public thenApply(arg0: java.util.function$.Function): java.util.concurrent.CompletionStage
      }

    }
  }
}
