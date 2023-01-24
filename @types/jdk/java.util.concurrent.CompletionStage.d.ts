declare namespace java {
  namespace util {
    namespace concurrent {
      interface CompletionStage<T> {
        thenApply<U>(arg0: java.util.function$.Function<unknown, U>): java.util.concurrent.CompletionStage<U>
        thenApplyAsync<U>(arg0: java.util.function$.Function<unknown, U>): java.util.concurrent.CompletionStage<U>
        thenApplyAsync<U>(
          arg0: java.util.function$.Function<unknown, U>,
          arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda
        ): java.util.concurrent.CompletionStage<U>
        thenAccept(
          arg0: java.util.function$.Consumer<unknown> | java.util.function$.Consumer$$lambda<unknown>
        ): java.util.concurrent.CompletionStage<java.lang.Void>
        thenAcceptAsync(
          arg0: java.util.function$.Consumer<unknown> | java.util.function$.Consumer$$lambda<unknown>
        ): java.util.concurrent.CompletionStage<java.lang.Void>
        thenAcceptAsync(
          arg0: java.util.function$.Consumer<unknown> | java.util.function$.Consumer$$lambda<unknown>,
          arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda
        ): java.util.concurrent.CompletionStage<java.lang.Void>
        thenRun(
          arg0: java.lang.Runnable | java.lang.Runnable$$lambda
        ): java.util.concurrent.CompletionStage<java.lang.Void>
        thenRunAsync(
          arg0: java.lang.Runnable | java.lang.Runnable$$lambda
        ): java.util.concurrent.CompletionStage<java.lang.Void>
        thenRunAsync(
          arg0: java.lang.Runnable | java.lang.Runnable$$lambda,
          arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda
        ): java.util.concurrent.CompletionStage<java.lang.Void>
        thenCombine<U, V>(
          arg0: java.util.concurrent.CompletionStage<U>,
          arg1: java.util.function$.BiFunction<unknown, unknown, V>
        ): java.util.concurrent.CompletionStage<V>
        thenCombineAsync<U, V>(
          arg0: java.util.concurrent.CompletionStage<U>,
          arg1: java.util.function$.BiFunction<unknown, unknown, V>
        ): java.util.concurrent.CompletionStage<V>
        thenCombineAsync<U, V>(
          arg0: java.util.concurrent.CompletionStage<U>,
          arg1: java.util.function$.BiFunction<unknown, unknown, V>,
          arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda
        ): java.util.concurrent.CompletionStage<V>
        thenAcceptBoth<U>(
          arg0: java.util.concurrent.CompletionStage<U>,
          arg1: java.util.function$.BiConsumer<unknown, unknown>
        ): java.util.concurrent.CompletionStage<java.lang.Void>
        thenAcceptBothAsync<U>(
          arg0: java.util.concurrent.CompletionStage<U>,
          arg1: java.util.function$.BiConsumer<unknown, unknown>
        ): java.util.concurrent.CompletionStage<java.lang.Void>
        thenAcceptBothAsync<U>(
          arg0: java.util.concurrent.CompletionStage<U>,
          arg1: java.util.function$.BiConsumer<unknown, unknown>,
          arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda
        ): java.util.concurrent.CompletionStage<java.lang.Void>
        runAfterBoth(
          arg0: java.util.concurrent.CompletionStage<unknown>,
          arg1: java.lang.Runnable | java.lang.Runnable$$lambda
        ): java.util.concurrent.CompletionStage<java.lang.Void>
        runAfterBothAsync(
          arg0: java.util.concurrent.CompletionStage<unknown>,
          arg1: java.lang.Runnable | java.lang.Runnable$$lambda
        ): java.util.concurrent.CompletionStage<java.lang.Void>
        runAfterBothAsync(
          arg0: java.util.concurrent.CompletionStage<unknown>,
          arg1: java.lang.Runnable | java.lang.Runnable$$lambda,
          arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda
        ): java.util.concurrent.CompletionStage<java.lang.Void>
        applyToEither<U>(
          arg0: java.util.concurrent.CompletionStage<T>,
          arg1: java.util.function$.Function<unknown, U>
        ): java.util.concurrent.CompletionStage<U>
        applyToEitherAsync<U>(
          arg0: java.util.concurrent.CompletionStage<T>,
          arg1: java.util.function$.Function<unknown, U>
        ): java.util.concurrent.CompletionStage<U>
        applyToEitherAsync<U>(
          arg0: java.util.concurrent.CompletionStage<T>,
          arg1: java.util.function$.Function<unknown, U>,
          arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda
        ): java.util.concurrent.CompletionStage<U>
        acceptEither(
          arg0: java.util.concurrent.CompletionStage<T>,
          arg1: java.util.function$.Consumer<unknown> | java.util.function$.Consumer$$lambda<unknown>
        ): java.util.concurrent.CompletionStage<java.lang.Void>
        acceptEitherAsync(
          arg0: java.util.concurrent.CompletionStage<T>,
          arg1: java.util.function$.Consumer<unknown> | java.util.function$.Consumer$$lambda<unknown>
        ): java.util.concurrent.CompletionStage<java.lang.Void>
        acceptEitherAsync(
          arg0: java.util.concurrent.CompletionStage<T>,
          arg1: java.util.function$.Consumer<unknown> | java.util.function$.Consumer$$lambda<unknown>,
          arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda
        ): java.util.concurrent.CompletionStage<java.lang.Void>
        runAfterEither(
          arg0: java.util.concurrent.CompletionStage<unknown>,
          arg1: java.lang.Runnable | java.lang.Runnable$$lambda
        ): java.util.concurrent.CompletionStage<java.lang.Void>
        runAfterEitherAsync(
          arg0: java.util.concurrent.CompletionStage<unknown>,
          arg1: java.lang.Runnable | java.lang.Runnable$$lambda
        ): java.util.concurrent.CompletionStage<java.lang.Void>
        runAfterEitherAsync(
          arg0: java.util.concurrent.CompletionStage<unknown>,
          arg1: java.lang.Runnable | java.lang.Runnable$$lambda,
          arg2: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda
        ): java.util.concurrent.CompletionStage<java.lang.Void>
        thenCompose<U>(
          arg0: java.util.function$.Function<unknown, java.util.concurrent.CompletionStage<U>>
        ): java.util.concurrent.CompletionStage<U>
        thenComposeAsync<U>(
          arg0: java.util.function$.Function<unknown, java.util.concurrent.CompletionStage<U>>
        ): java.util.concurrent.CompletionStage<U>
        thenComposeAsync<U>(
          arg0: java.util.function$.Function<unknown, java.util.concurrent.CompletionStage<U>>,
          arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda
        ): java.util.concurrent.CompletionStage<U>
        handle<U>(
          arg0: java.util.function$.BiFunction<unknown, java.lang.Throwable, U>
        ): java.util.concurrent.CompletionStage<U>
        handleAsync<U>(
          arg0: java.util.function$.BiFunction<unknown, java.lang.Throwable, U>
        ): java.util.concurrent.CompletionStage<U>
        handleAsync<U>(
          arg0: java.util.function$.BiFunction<unknown, java.lang.Throwable, U>,
          arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda
        ): java.util.concurrent.CompletionStage<U>
        whenComplete(arg0: java.util.function$.BiConsumer<unknown, unknown>): java.util.concurrent.CompletionStage<T>
        whenCompleteAsync(
          arg0: java.util.function$.BiConsumer<unknown, unknown>
        ): java.util.concurrent.CompletionStage<T>
        whenCompleteAsync(
          arg0: java.util.function$.BiConsumer<unknown, unknown>,
          arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda
        ): java.util.concurrent.CompletionStage<T>
        exceptionally(
          arg0: java.util.function$.Function<java.lang.Throwable, T>
        ): java.util.concurrent.CompletionStage<T>
        toCompletableFuture(): java.util.concurrent.CompletableFuture<T>
      }
    }
  }
}
