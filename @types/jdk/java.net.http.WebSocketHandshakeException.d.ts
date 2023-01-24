declare namespace java {
  namespace net {
    namespace http {
      class WebSocketHandshakeException extends java.io.IOException {
        public constructor(arg0: java.net.http.HttpResponse<unknown>)
        public getResponse(): java.net.http.HttpResponse<unknown>
        public initCause(arg0: java.lang.Throwable): java.net.http.WebSocketHandshakeException
        public initCause(arg0: java.lang.Throwable): java.lang.Throwable
      }
    }
  }
}
