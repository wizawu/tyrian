declare namespace java {
    namespace util {
        namespace concurrent {
            class CompletableFuture<T> implements java.util.concurrent.Future<T> , java.util.concurrent.CompletionStage<T> {
                public constructor()
                public static supplyAsync<U>(arg0: java.util.function$.Supplier<U> | java.util.function$.Supplier$$Lambda<U>): java.util.concurrent.CompletableFuture<U>
                public static supplyAsync<U>(arg0: java.util.function$.Supplier<U> | java.util.function$.Supplier$$Lambda<U>, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletableFuture<U>
                public static runAsync(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): java.util.concurrent.CompletableFuture<java.lang.Void>
                public static runAsync(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletableFuture<java.lang.Void>
                public static completedFuture<U>(arg0: U): java.util.concurrent.CompletableFuture<U>
                public isDone(): boolean
                public get(): T
                public get(arg0: long, arg1: java.util.concurrent.TimeUnit): T
                public join(): T
                public getNow(arg0: T): T
                public complete(arg0: T): boolean
                public completeExceptionally(arg0: java.lang.Throwable): boolean
                public thenApply<U>(arg0: java.util.function$.Function<T, U>): java.util.concurrent.CompletableFuture<U>
                public thenApplyAsync<U>(arg0: java.util.function$.Function<T, U>): java.util.concurrent.CompletableFuture<U>
                public thenApplyAsync<U>(arg0: java.util.function$.Function<T, U>, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletableFuture<U>
                public thenAccept<U>(arg0: java.util.function$.Consumer$$Lambda<T>): java.util.concurrent.CompletableFuture<java.lang.Void>
                public thenAcceptAsync<U>(arg0: java.util.function$.Consumer$$Lambda<T>): java.util.concurrent.CompletableFuture<java.lang.Void>
                public thenAcceptAsync<U>(arg0: java.util.function$.Consumer$$Lambda<T>, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletableFuture<java.lang.Void>
                public thenRun<U>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): java.util.concurrent.CompletableFuture<java.lang.Void>
                public thenRunAsync<U>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): java.util.concurrent.CompletableFuture<java.lang.Void>
                public thenRunAsync<U>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletableFuture<java.lang.Void>
                public thenCombine<U, V>(arg0: java.util.concurrent.CompletionStage<U>, arg1: java.util.function$.BiFunction<T, U, V>): java.util.concurrent.CompletableFuture<V>
                public thenCombineAsync<U, V>(arg0: java.util.concurrent.CompletionStage<U>, arg1: java.util.function$.BiFunction<T, U, V>): java.util.concurrent.CompletableFuture<V>
                public thenCombineAsync<U, V>(arg0: java.util.concurrent.CompletionStage<U>, arg1: java.util.function$.BiFunction<T, U, V>, arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletableFuture<V>
                public thenAcceptBoth<U>(arg0: java.util.concurrent.CompletionStage<U>, arg1: java.util.function$.BiConsumer<T, U>): java.util.concurrent.CompletableFuture<java.lang.Void>
                public thenAcceptBothAsync<U>(arg0: java.util.concurrent.CompletionStage<U>, arg1: java.util.function$.BiConsumer<T, U>): java.util.concurrent.CompletableFuture<java.lang.Void>
                public thenAcceptBothAsync<U>(arg0: java.util.concurrent.CompletionStage<U>, arg1: java.util.function$.BiConsumer<T, U>, arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletableFuture<java.lang.Void>
                public runAfterBoth<U>(arg0: java.util.concurrent.CompletionStage<any>, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda): java.util.concurrent.CompletableFuture<java.lang.Void>
                public runAfterBothAsync<U>(arg0: java.util.concurrent.CompletionStage<any>, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda): java.util.concurrent.CompletableFuture<java.lang.Void>
                public runAfterBothAsync<U>(arg0: java.util.concurrent.CompletionStage<any>, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda, arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletableFuture<java.lang.Void>
                public applyToEither<U>(arg0: java.util.concurrent.CompletionStage<T>, arg1: java.util.function$.Function<T, U>): java.util.concurrent.CompletableFuture<U>
                public applyToEitherAsync<U>(arg0: java.util.concurrent.CompletionStage<T>, arg1: java.util.function$.Function<T, U>): java.util.concurrent.CompletableFuture<U>
                public applyToEitherAsync<U>(arg0: java.util.concurrent.CompletionStage<T>, arg1: java.util.function$.Function<T, U>, arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletableFuture<U>
                public acceptEither<U>(arg0: java.util.concurrent.CompletionStage<T>, arg1: java.util.function$.Consumer$$Lambda<T>): java.util.concurrent.CompletableFuture<java.lang.Void>
                public acceptEitherAsync<U>(arg0: java.util.concurrent.CompletionStage<T>, arg1: java.util.function$.Consumer$$Lambda<T>): java.util.concurrent.CompletableFuture<java.lang.Void>
                public acceptEitherAsync<U>(arg0: java.util.concurrent.CompletionStage<T>, arg1: java.util.function$.Consumer$$Lambda<T>, arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletableFuture<java.lang.Void>
                public runAfterEither<U>(arg0: java.util.concurrent.CompletionStage<any>, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda): java.util.concurrent.CompletableFuture<java.lang.Void>
                public runAfterEitherAsync<U>(arg0: java.util.concurrent.CompletionStage<any>, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda): java.util.concurrent.CompletableFuture<java.lang.Void>
                public runAfterEitherAsync<U>(arg0: java.util.concurrent.CompletionStage<any>, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda, arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletableFuture<java.lang.Void>
                public thenCompose<U>(arg0: java.util.function$.Function<T, java.util.concurrent.CompletionStage<U>>): java.util.concurrent.CompletableFuture<U>
                public thenComposeAsync<U>(arg0: java.util.function$.Function<T, java.util.concurrent.CompletionStage<U>>): java.util.concurrent.CompletableFuture<U>
                public thenComposeAsync<U>(arg0: java.util.function$.Function<T, java.util.concurrent.CompletionStage<U>>, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletableFuture<U>
                public whenComplete<U>(arg0: java.util.function$.BiConsumer<T, java.lang.Throwable>): java.util.concurrent.CompletableFuture<T>
                public whenCompleteAsync<U>(arg0: java.util.function$.BiConsumer<T, java.lang.Throwable>): java.util.concurrent.CompletableFuture<T>
                public whenCompleteAsync<U>(arg0: java.util.function$.BiConsumer<T, java.lang.Throwable>, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletableFuture<T>
                public handle<U>(arg0: java.util.function$.BiFunction<T, java.lang.Throwable, U>): java.util.concurrent.CompletableFuture<U>
                public handleAsync<U>(arg0: java.util.function$.BiFunction<T, java.lang.Throwable, U>): java.util.concurrent.CompletableFuture<U>
                public handleAsync<U>(arg0: java.util.function$.BiFunction<T, java.lang.Throwable, U>, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletableFuture<U>
                public toCompletableFuture<U>(): java.util.concurrent.CompletableFuture<T>
                public exceptionally<U>(arg0: java.util.function$.Function<java.lang.Throwable, T>): java.util.concurrent.CompletableFuture<T>
                public static allOf<U>(...arg0: java.util.concurrent.CompletableFuture<any>[]): java.util.concurrent.CompletableFuture<java.lang.Void>
                public static anyOf<U>(...arg0: java.util.concurrent.CompletableFuture<any>[]): java.util.concurrent.CompletableFuture<java.lang.Object>
                public cancel<U>(arg0: boolean): boolean
                public isCancelled<U>(): boolean
                public isCompletedExceptionally<U>(): boolean
                public obtrudeValue<U>(arg0: T): void
                public obtrudeException<U>(arg0: java.lang.Throwable): void
                public getNumberOfDependents<U>(): int
                public toString<U>(): string
                public handleAsync<U>(arg0: java.util.function$.BiFunction, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletionStage
                public handleAsync<U>(arg0: java.util.function$.BiFunction): java.util.concurrent.CompletionStage
                public handle<U>(arg0: java.util.function$.BiFunction): java.util.concurrent.CompletionStage
                public whenCompleteAsync<U>(arg0: java.util.function$.BiConsumer, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletionStage
                public whenCompleteAsync<U>(arg0: java.util.function$.BiConsumer): java.util.concurrent.CompletionStage
                public whenComplete<U>(arg0: java.util.function$.BiConsumer): java.util.concurrent.CompletionStage
                public exceptionally<U>(arg0: java.util.function$.Function): java.util.concurrent.CompletionStage
                public thenComposeAsync<U>(arg0: java.util.function$.Function, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletionStage
                public thenComposeAsync<U>(arg0: java.util.function$.Function): java.util.concurrent.CompletionStage
                public thenCompose<U>(arg0: java.util.function$.Function): java.util.concurrent.CompletionStage
                public runAfterEitherAsync<U>(arg0: java.util.concurrent.CompletionStage, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda, arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletionStage
                public runAfterEitherAsync<U>(arg0: java.util.concurrent.CompletionStage, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda): java.util.concurrent.CompletionStage
                public runAfterEither<U>(arg0: java.util.concurrent.CompletionStage, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda): java.util.concurrent.CompletionStage
                public acceptEitherAsync<U>(arg0: java.util.concurrent.CompletionStage, arg1: java.util.function$.Consumer, arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletionStage
                public acceptEitherAsync<U>(arg0: java.util.concurrent.CompletionStage, arg1: java.util.function$.Consumer): java.util.concurrent.CompletionStage
                public acceptEither<U>(arg0: java.util.concurrent.CompletionStage, arg1: java.util.function$.Consumer): java.util.concurrent.CompletionStage
                public applyToEitherAsync<U>(arg0: java.util.concurrent.CompletionStage, arg1: java.util.function$.Function, arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletionStage
                public applyToEitherAsync<U>(arg0: java.util.concurrent.CompletionStage, arg1: java.util.function$.Function): java.util.concurrent.CompletionStage
                public applyToEither<U>(arg0: java.util.concurrent.CompletionStage, arg1: java.util.function$.Function): java.util.concurrent.CompletionStage
                public runAfterBothAsync<U>(arg0: java.util.concurrent.CompletionStage, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda, arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletionStage
                public runAfterBothAsync<U>(arg0: java.util.concurrent.CompletionStage, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda): java.util.concurrent.CompletionStage
                public runAfterBoth<U>(arg0: java.util.concurrent.CompletionStage, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda): java.util.concurrent.CompletionStage
                public thenAcceptBothAsync<U>(arg0: java.util.concurrent.CompletionStage, arg1: java.util.function$.BiConsumer, arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletionStage
                public thenAcceptBothAsync<U>(arg0: java.util.concurrent.CompletionStage, arg1: java.util.function$.BiConsumer): java.util.concurrent.CompletionStage
                public thenAcceptBoth<U>(arg0: java.util.concurrent.CompletionStage, arg1: java.util.function$.BiConsumer): java.util.concurrent.CompletionStage
                public thenCombineAsync<U>(arg0: java.util.concurrent.CompletionStage, arg1: java.util.function$.BiFunction, arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletionStage
                public thenCombineAsync<U>(arg0: java.util.concurrent.CompletionStage, arg1: java.util.function$.BiFunction): java.util.concurrent.CompletionStage
                public thenCombine<U>(arg0: java.util.concurrent.CompletionStage, arg1: java.util.function$.BiFunction): java.util.concurrent.CompletionStage
                public thenRunAsync<U>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletionStage
                public thenRunAsync<U>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): java.util.concurrent.CompletionStage
                public thenRun<U>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): java.util.concurrent.CompletionStage
                public thenAcceptAsync<U>(arg0: java.util.function$.Consumer, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletionStage
                public thenAcceptAsync<U>(arg0: java.util.function$.Consumer): java.util.concurrent.CompletionStage
                public thenAccept<U>(arg0: java.util.function$.Consumer): java.util.concurrent.CompletionStage
                public thenApplyAsync<U>(arg0: java.util.function$.Function, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletionStage
                public thenApplyAsync<U>(arg0: java.util.function$.Function): java.util.concurrent.CompletionStage
                public thenApply<U>(arg0: java.util.function$.Function): java.util.concurrent.CompletionStage
                public static class: java.lang.Class<any>
            }
        }
    }
}