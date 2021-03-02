declare namespace com {
  namespace sun {
    namespace net {
      namespace httpserver {

        abstract class HttpExchange {
          protected constructor()
          public abstract getRequestHeaders(): com.sun.net.httpserver.Headers
          public abstract getResponseHeaders(): com.sun.net.httpserver.Headers
          public abstract getRequestURI(): java.net.URI
          public abstract getRequestMethod(): java.lang.String
          public abstract getHttpContext(): com.sun.net.httpserver.HttpContext
          public abstract close(): void
          public abstract getRequestBody(): java.io.InputStream
          public abstract getResponseBody(): java.io.OutputStream
          public abstract sendResponseHeaders(arg0: number | java.lang.Integer, arg1: number | java.lang.Long): void
          public abstract getRemoteAddress(): java.net.InetSocketAddress
          public abstract getResponseCode(): number
          public abstract getLocalAddress(): java.net.InetSocketAddress
          public abstract getProtocol(): java.lang.String
          public abstract getAttribute(arg0: java.lang.String | string): java.lang.Object
          public abstract setAttribute(arg0: java.lang.String | string, arg1: java.lang.Object | any): void
          public abstract setStreams(arg0: java.io.InputStream, arg1: java.io.OutputStream): void
          public abstract getPrincipal(): com.sun.net.httpserver.HttpPrincipal
        }

      }
    }
  }
}
