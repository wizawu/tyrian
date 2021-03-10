declare namespace java {
  namespace net {
    namespace http {

      class HttpRequest$BodyPublishers {
        public static fromPublisher(arg0: java.util.concurrent.Flow$Publisher<java.nio.ByteBuffer> | java.util.concurrent.Flow$Publisher$$lambda<java.nio.ByteBuffer>): java.net.http.HttpRequest$BodyPublisher
        public static fromPublisher(arg0: java.util.concurrent.Flow$Publisher<java.nio.ByteBuffer> | java.util.concurrent.Flow$Publisher$$lambda<java.nio.ByteBuffer>, arg1: number | java.lang.Long): java.net.http.HttpRequest$BodyPublisher
        public static ofString(arg0: java.lang.String | string): java.net.http.HttpRequest$BodyPublisher
        public static ofString(arg0: java.lang.String | string, arg1: java.nio.charset.Charset): java.net.http.HttpRequest$BodyPublisher
        public static ofInputStream(arg0: java.util.function$.Supplier<java.io.InputStream> | java.util.function$.Supplier$$lambda<java.io.InputStream>): java.net.http.HttpRequest$BodyPublisher
        public static ofByteArray(arg0: number[] | java.lang.Byte[]): java.net.http.HttpRequest$BodyPublisher
        public static ofByteArray(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.net.http.HttpRequest$BodyPublisher
        public static ofFile(arg0: java.nio.file.Path): java.net.http.HttpRequest$BodyPublisher
        public static ofByteArrays(arg0: java.lang.Iterable<byte[]>): java.net.http.HttpRequest$BodyPublisher
        public static noBody(): java.net.http.HttpRequest$BodyPublisher
      }

    }
  }
}
