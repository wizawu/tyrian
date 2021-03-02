declare namespace java {
  namespace net {
    namespace http {

      interface HttpResponse<T> {
        statusCode(): int
        request(): java.net.http.HttpRequest
        previousResponse(): java.util.Optional<java.net.http.HttpResponse<T>>
        headers(): java.net.http.HttpHeaders
        body(): T
        sslSession(): java.util.Optional<javax.net.ssl.SSLSession>
        uri(): java.net.URI
        version(): java.net.http.HttpClient$Version
      }

    }
  }
}
