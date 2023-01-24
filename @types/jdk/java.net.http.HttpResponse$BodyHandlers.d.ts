declare namespace java {
  namespace net {
    namespace http {
      class HttpResponse$BodyHandlers {
        public static fromSubscriber(
          arg0: java.util.concurrent.Flow$Subscriber<unknown>
        ): java.net.http.HttpResponse$BodyHandler<java.lang.Void>
        public static fromSubscriber<S extends java.util.concurrent.Flow$Subscriber<unknown>, T>(
          arg0: S,
          arg1: java.util.function$.Function<unknown, T>
        ): java.net.http.HttpResponse$BodyHandler<T>
        public static fromLineSubscriber(
          arg0: java.util.concurrent.Flow$Subscriber<unknown>
        ): java.net.http.HttpResponse$BodyHandler<java.lang.Void>
        public static fromLineSubscriber<S extends java.util.concurrent.Flow$Subscriber<unknown>, T>(
          arg0: S,
          arg1: java.util.function$.Function<unknown, T>,
          arg2: java.lang.String | string
        ): java.net.http.HttpResponse$BodyHandler<T>
        public static discarding(): java.net.http.HttpResponse$BodyHandler<java.lang.Void>
        public static replacing<U>(arg0: U): java.net.http.HttpResponse$BodyHandler<U>
        public static ofString(arg0: java.nio.charset.Charset): java.net.http.HttpResponse$BodyHandler<java.lang.String>
        public static ofFile(
          arg0: java.nio.file.Path,
          ...vargs: java.nio.file.OpenOption[]
        ): java.net.http.HttpResponse$BodyHandler<java.nio.file.Path>
        public static ofFile(arg0: java.nio.file.Path): java.net.http.HttpResponse$BodyHandler<java.nio.file.Path>
        public static ofFileDownload(
          arg0: java.nio.file.Path,
          ...vargs: java.nio.file.OpenOption[]
        ): java.net.http.HttpResponse$BodyHandler<java.nio.file.Path>
        public static ofInputStream(): java.net.http.HttpResponse$BodyHandler<java.io.InputStream>
        public static ofLines(): java.net.http.HttpResponse$BodyHandler<java.util.stream.Stream<java.lang.String>>
        public static ofByteArrayConsumer(
          arg0:
            | java.util.function$.Consumer<java.util.Optional<byte[]>>
            | java.util.function$.Consumer$$lambda<java.util.Optional<byte[]>>
        ): java.net.http.HttpResponse$BodyHandler<java.lang.Void>
        public static ofByteArray(): java.net.http.HttpResponse$BodyHandler<byte[]>
        public static ofString(): java.net.http.HttpResponse$BodyHandler<java.lang.String>
        public static ofPublisher(): java.net.http.HttpResponse$BodyHandler<
          java.util.concurrent.Flow$Publisher<java.util.List<java.nio.ByteBuffer>>
        >
        public static buffering<T>(
          arg0: java.net.http.HttpResponse$BodyHandler<T> | java.net.http.HttpResponse$BodyHandler$$lambda<T>,
          arg1: number | java.lang.Integer
        ): java.net.http.HttpResponse$BodyHandler<T>
      }
    }
  }
}
