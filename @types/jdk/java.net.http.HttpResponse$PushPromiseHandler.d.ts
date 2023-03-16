declare namespace java {
  namespace net {
    namespace http {
      interface HttpResponse$PushPromiseHandler<T> {
        applyPushPromise(
          arg0: java.net.http.HttpRequest,
          arg1: java.net.http.HttpRequest,
          arg2: java.util.function$.Function<
            java.net.http.HttpResponse$BodyHandler<T>,
            java.util.concurrent.CompletableFuture<java.net.http.HttpResponse<T>>
          >
        ): void
        of?<T>(
          arg0: java.util.function$.Function<java.net.http.HttpRequest, java.net.http.HttpResponse$BodyHandler<T>>,
          arg1: java.util.concurrent.ConcurrentMap<
            java.net.http.HttpRequest,
            java.util.concurrent.CompletableFuture<java.net.http.HttpResponse<T>>
          >
        ): java.net.http.HttpResponse$PushPromiseHandler<T>
      }
    }
  }
}
