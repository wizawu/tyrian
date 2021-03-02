declare namespace java {
  namespace net {
    namespace http {

      abstract class HttpClient {
        protected constructor()
        public static newHttpClient(): java.net.http.HttpClient
        public static newBuilder(): java.net.http.HttpClient$Builder
        public abstract cookieHandler(): java.util.Optional<java.net.CookieHandler>
        public abstract connectTimeout(): java.util.Optional<java.time.Duration>
        public abstract followRedirects(): java.net.http.HttpClient$Redirect
        public abstract proxy(): java.util.Optional<java.net.ProxySelector>
        public abstract sslContext(): javax.net.ssl.SSLContext
        public abstract sslParameters(): javax.net.ssl.SSLParameters
        public abstract authenticator(): java.util.Optional<java.net.Authenticator>
        public abstract version(): java.net.http.HttpClient$Version
        public abstract executor(): java.util.Optional<java.util.concurrent.Executor>
        public abstract send<T>(arg0: java.net.http.HttpRequest, arg1: java.net.http.HttpResponse$BodyHandler<T>): java.net.http.HttpResponse<T>
        public abstract sendAsync<T>(arg0: java.net.http.HttpRequest, arg1: java.net.http.HttpResponse$BodyHandler<T>): java.util.concurrent.CompletableFuture<java.net.http.HttpResponse<T>>
        public abstract sendAsync<T>(arg0: java.net.http.HttpRequest, arg1: java.net.http.HttpResponse$BodyHandler<T>, arg2: java.net.http.HttpResponse$PushPromiseHandler<T>): java.util.concurrent.CompletableFuture<java.net.http.HttpResponse<T>>
        public newWebSocketBuilder(): java.net.http.WebSocket$Builder
      }

    }
  }
}
