declare namespace java {
  namespace net {
    namespace http {
      interface WebSocket$Builder {
        header(arg0: java.lang.String | string, arg1: java.lang.String | string): java.net.http.WebSocket$Builder
        connectTimeout(arg0: java.time.Duration): java.net.http.WebSocket$Builder
        subprotocols(
          arg0: java.lang.String | string,
          ...vargs: (java.lang.String | string)[]
        ): java.net.http.WebSocket$Builder
        buildAsync(
          arg0: java.net.URI,
          arg1: java.net.http.WebSocket$Listener
        ): java.util.concurrent.CompletableFuture<java.net.http.WebSocket>
      }
    }
  }
}
