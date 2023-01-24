declare namespace java {
  namespace net {
    namespace http {
      interface HttpResponse$ResponseInfo {
        statusCode(): number
        headers(): java.net.http.HttpHeaders
        version(): java.net.http.HttpClient$Version
      }
    }
  }
}
