declare namespace java {
  namespace net {
    namespace http {

      class HttpResponse$BodySubscribers {
        public static fromSubscriber(arg0: java.util.concurrent.Flow$Subscriber<unknown>): java.net.http.HttpResponse$BodySubscriber<java.lang.Void>
        public static fromSubscriber<S extends java.util.concurrent.Flow$Subscriber<unknown>,T>(arg0: S, arg1: java.util.function$.Function<unknown,T>): java.net.http.HttpResponse$BodySubscriber<T>
        public static fromLineSubscriber(arg0: java.util.concurrent.Flow$Subscriber<unknown>): java.net.http.HttpResponse$BodySubscriber<java.lang.Void>
        public static fromLineSubscriber<S extends java.util.concurrent.Flow$Subscriber<unknown>,T>(arg0: S, arg1: java.util.function$.Function<unknown,T>, arg2: java.nio.charset.Charset, arg3: java.lang.String): java.net.http.HttpResponse$BodySubscriber<T>
        public static ofString(arg0: java.nio.charset.Charset): java.net.http.HttpResponse$BodySubscriber<java.lang.String>
        public static ofByteArray(): java.net.http.HttpResponse$BodySubscriber<byte[]>
        public static ofFile(arg0: java.nio.file.Path, ...arg1: java.nio.file.OpenOption[]): java.net.http.HttpResponse$BodySubscriber<java.nio.file.Path>
        public static ofFile(arg0: java.nio.file.Path): java.net.http.HttpResponse$BodySubscriber<java.nio.file.Path>
        public static ofByteArrayConsumer(arg0: java.util.function$.Consumer<java.util.Optional<byte[]>>): java.net.http.HttpResponse$BodySubscriber<java.lang.Void>
        public static ofInputStream(): java.net.http.HttpResponse$BodySubscriber<java.io.InputStream>
        public static ofLines(arg0: java.nio.charset.Charset): java.net.http.HttpResponse$BodySubscriber<java.util.stream.Stream<java.lang.String>>
        public static ofPublisher(): java.net.http.HttpResponse$BodySubscriber<java.util.concurrent.Flow$Publisher<java.util.List<java.nio.ByteBuffer>>>
        public static replacing<U>(arg0: U): java.net.http.HttpResponse$BodySubscriber<U>
        public static discarding(): java.net.http.HttpResponse$BodySubscriber<java.lang.Void>
        public static buffering<T>(arg0: java.net.http.HttpResponse$BodySubscriber<T>, arg1: int): java.net.http.HttpResponse$BodySubscriber<T>
        public static mapping<T,U>(arg0: java.net.http.HttpResponse$BodySubscriber<T>, arg1: java.util.function$.Function<unknown,U>): java.net.http.HttpResponse$BodySubscriber<U>
      }

    }
  }
}
