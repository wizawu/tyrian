declare namespace java {
    namespace util {
        namespace concurrent {
            interface CompletionStage<T> {
                thenApply<U>(arg0: java.util.function$.Function<T, U>): java.util.concurrent.CompletionStage<U>
                thenApplyAsync<U>(arg0: java.util.function$.Function<T, U>): java.util.concurrent.CompletionStage<U>
                thenApplyAsync<U>(arg0: java.util.function$.Function<T, U>, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletionStage<U>
                thenAccept<U>(arg0: java.util.function$.Consumer$$Lambda<T>): java.util.concurrent.CompletionStage<java.lang.Void>
                thenAcceptAsync<U>(arg0: java.util.function$.Consumer$$Lambda<T>): java.util.concurrent.CompletionStage<java.lang.Void>
                thenAcceptAsync<U>(arg0: java.util.function$.Consumer$$Lambda<T>, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletionStage<java.lang.Void>
                thenRun<U>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): java.util.concurrent.CompletionStage<java.lang.Void>
                thenRunAsync<U>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): java.util.concurrent.CompletionStage<java.lang.Void>
                thenRunAsync<U>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletionStage<java.lang.Void>
                thenCombine<U, V>(arg0: java.util.concurrent.CompletionStage<U>, arg1: java.util.function$.BiFunction<T, U, V>): java.util.concurrent.CompletionStage<V>
                thenCombineAsync<U, V>(arg0: java.util.concurrent.CompletionStage<U>, arg1: java.util.function$.BiFunction<T, U, V>): java.util.concurrent.CompletionStage<V>
                thenCombineAsync<U, V>(arg0: java.util.concurrent.CompletionStage<U>, arg1: java.util.function$.BiFunction<T, U, V>, arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletionStage<V>
                thenAcceptBoth<U>(arg0: java.util.concurrent.CompletionStage<U>, arg1: java.util.function$.BiConsumer<T, U>): java.util.concurrent.CompletionStage<java.lang.Void>
                thenAcceptBothAsync<U>(arg0: java.util.concurrent.CompletionStage<U>, arg1: java.util.function$.BiConsumer<T, U>): java.util.concurrent.CompletionStage<java.lang.Void>
                thenAcceptBothAsync<U>(arg0: java.util.concurrent.CompletionStage<U>, arg1: java.util.function$.BiConsumer<T, U>, arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletionStage<java.lang.Void>
                runAfterBoth<U>(arg0: java.util.concurrent.CompletionStage<any>, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda): java.util.concurrent.CompletionStage<java.lang.Void>
                runAfterBothAsync<U>(arg0: java.util.concurrent.CompletionStage<any>, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda): java.util.concurrent.CompletionStage<java.lang.Void>
                runAfterBothAsync<U>(arg0: java.util.concurrent.CompletionStage<any>, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda, arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletionStage<java.lang.Void>
                applyToEither<U>(arg0: java.util.concurrent.CompletionStage<T>, arg1: java.util.function$.Function<T, U>): java.util.concurrent.CompletionStage<U>
                applyToEitherAsync<U>(arg0: java.util.concurrent.CompletionStage<T>, arg1: java.util.function$.Function<T, U>): java.util.concurrent.CompletionStage<U>
                applyToEitherAsync<U>(arg0: java.util.concurrent.CompletionStage<T>, arg1: java.util.function$.Function<T, U>, arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletionStage<U>
                acceptEither<U>(arg0: java.util.concurrent.CompletionStage<T>, arg1: java.util.function$.Consumer$$Lambda<T>): java.util.concurrent.CompletionStage<java.lang.Void>
                acceptEitherAsync<U>(arg0: java.util.concurrent.CompletionStage<T>, arg1: java.util.function$.Consumer$$Lambda<T>): java.util.concurrent.CompletionStage<java.lang.Void>
                acceptEitherAsync<U>(arg0: java.util.concurrent.CompletionStage<T>, arg1: java.util.function$.Consumer$$Lambda<T>, arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletionStage<java.lang.Void>
                runAfterEither<U>(arg0: java.util.concurrent.CompletionStage<any>, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda): java.util.concurrent.CompletionStage<java.lang.Void>
                runAfterEitherAsync<U>(arg0: java.util.concurrent.CompletionStage<any>, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda): java.util.concurrent.CompletionStage<java.lang.Void>
                runAfterEitherAsync<U>(arg0: java.util.concurrent.CompletionStage<any>, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda, arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletionStage<java.lang.Void>
                thenCompose<U>(arg0: java.util.function$.Function<T, java.util.concurrent.CompletionStage<U>>): java.util.concurrent.CompletionStage<U>
                thenComposeAsync<U>(arg0: java.util.function$.Function<T, java.util.concurrent.CompletionStage<U>>): java.util.concurrent.CompletionStage<U>
                thenComposeAsync<U>(arg0: java.util.function$.Function<T, java.util.concurrent.CompletionStage<U>>, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletionStage<U>
                exceptionally<U>(arg0: java.util.function$.Function<java.lang.Throwable, T>): java.util.concurrent.CompletionStage<T>
                whenComplete<U>(arg0: java.util.function$.BiConsumer<T, java.lang.Throwable>): java.util.concurrent.CompletionStage<T>
                whenCompleteAsync<U>(arg0: java.util.function$.BiConsumer<T, java.lang.Throwable>): java.util.concurrent.CompletionStage<T>
                whenCompleteAsync<U>(arg0: java.util.function$.BiConsumer<T, java.lang.Throwable>, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletionStage<T>
                handle<U>(arg0: java.util.function$.BiFunction<T, java.lang.Throwable, U>): java.util.concurrent.CompletionStage<U>
                handleAsync<U>(arg0: java.util.function$.BiFunction<T, java.lang.Throwable, U>): java.util.concurrent.CompletionStage<U>
                handleAsync<U>(arg0: java.util.function$.BiFunction<T, java.lang.Throwable, U>, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.CompletionStage<U>
                toCompletableFuture<U>(): java.util.concurrent.CompletableFuture<T>
            }
        }
    }
}