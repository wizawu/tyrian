declare namespace java {
  namespace net {
    namespace http {
      interface HttpResponse$BodyHandler$$lambda<T> {
        (arg0: java.net.http.HttpResponse$ResponseInfo): java.net.http.HttpResponse$BodySubscriber<T>
      }

      interface HttpResponse$BodyHandler<T> {
        apply(arg0: java.net.http.HttpResponse$ResponseInfo): java.net.http.HttpResponse$BodySubscriber<T>
      }
    }
  }
}
