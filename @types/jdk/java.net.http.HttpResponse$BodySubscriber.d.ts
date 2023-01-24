declare namespace java {
  namespace net {
    namespace http {
      interface HttpResponse$BodySubscriber<T>
        extends java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>> {
        getBody(): java.util.concurrent.CompletionStage<T>
      }
    }
  }
}
