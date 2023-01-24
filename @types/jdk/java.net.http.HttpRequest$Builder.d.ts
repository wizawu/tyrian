declare namespace java {
  namespace net {
    namespace http {
      interface HttpRequest$Builder {
        uri(arg0: java.net.URI): java.net.http.HttpRequest$Builder
        expectContinue(arg0: boolean | java.lang.Boolean): java.net.http.HttpRequest$Builder
        version(arg0: java.net.http.HttpClient$Version): java.net.http.HttpRequest$Builder
        header(arg0: java.lang.String | string, arg1: java.lang.String | string): java.net.http.HttpRequest$Builder
        headers(...vargs: (java.lang.String | string)[]): java.net.http.HttpRequest$Builder
        timeout(arg0: java.time.Duration): java.net.http.HttpRequest$Builder
        setHeader(arg0: java.lang.String | string, arg1: java.lang.String | string): java.net.http.HttpRequest$Builder
        GET(): java.net.http.HttpRequest$Builder
        POST(arg0: java.net.http.HttpRequest$BodyPublisher): java.net.http.HttpRequest$Builder
        PUT(arg0: java.net.http.HttpRequest$BodyPublisher): java.net.http.HttpRequest$Builder
        DELETE(): java.net.http.HttpRequest$Builder
        method(
          arg0: java.lang.String | string,
          arg1: java.net.http.HttpRequest$BodyPublisher
        ): java.net.http.HttpRequest$Builder
        build(): java.net.http.HttpRequest
        copy(): java.net.http.HttpRequest$Builder
      }
    }
  }
}
