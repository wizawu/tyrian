declare namespace java {
  namespace net {
    namespace http {

      interface HttpClient$Builder {
        public static readonly NO_PROXY: java.net.ProxySelector
        cookieHandler(arg0: java.net.CookieHandler): java.net.http.HttpClient$Builder
        connectTimeout(arg0: java.time.Duration): java.net.http.HttpClient$Builder
        sslContext(arg0: javax.net.ssl.SSLContext): java.net.http.HttpClient$Builder
        sslParameters(arg0: javax.net.ssl.SSLParameters): java.net.http.HttpClient$Builder
        executor(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$lambda): java.net.http.HttpClient$Builder
        followRedirects(arg0: java.net.http.HttpClient$Redirect): java.net.http.HttpClient$Builder
        version(arg0: java.net.http.HttpClient$Version): java.net.http.HttpClient$Builder
        priority(arg0: number | java.lang.Integer): java.net.http.HttpClient$Builder
        proxy(arg0: java.net.ProxySelector): java.net.http.HttpClient$Builder
        authenticator(arg0: java.net.Authenticator): java.net.http.HttpClient$Builder
        build(): java.net.http.HttpClient
      }

    }
  }
}
