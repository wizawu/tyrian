declare namespace java {
  namespace net {
    namespace http {

      class HttpRequest$BodyPublishers {

        public static fromPublisher(arg0: java.util.concurrent.Flow$Publisher<java.nio.ByteBuffer>): java.net.http.HttpRequest$BodyPublisher
        public static fromPublisher(arg0: java.util.concurrent.Flow$Publisher<java.nio.ByteBuffer>, arg1: long): java.net.http.HttpRequest$BodyPublisher
        public static ofString(arg0: java.lang.String): java.net.http.HttpRequest$BodyPublisher
        public static ofString(arg0: java.lang.String, arg1: java.nio.charset.Charset): java.net.http.HttpRequest$BodyPublisher
        public static ofInputStream(arg0: java.util.function$.Supplier<java.io.InputStream>): java.net.http.HttpRequest$BodyPublisher
        public static ofByteArray(arg0: byte[]): java.net.http.HttpRequest$BodyPublisher
        public static ofByteArray(arg0: byte[], arg1: int, arg2: int): java.net.http.HttpRequest$BodyPublisher
        public static ofFile(arg0: java.nio.file.Path): java.net.http.HttpRequest$BodyPublisher
        public static ofByteArrays(arg0: java.lang.Iterable<byte[]>): java.net.http.HttpRequest$BodyPublisher
        public static noBody(): java.net.http.HttpRequest$BodyPublisher
      }

    }
  }
}
