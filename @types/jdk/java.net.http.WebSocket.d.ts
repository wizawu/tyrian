declare namespace java {
  namespace net {
    namespace http {

      interface WebSocket {
        public static readonly NORMAL_CLOSURE: int
        sendText(arg0: java.lang.CharSequence, arg1: boolean): java.util.concurrent.CompletableFuture<java.net.http.WebSocket>
        sendBinary(arg0: java.nio.ByteBuffer, arg1: boolean): java.util.concurrent.CompletableFuture<java.net.http.WebSocket>
        sendPing(arg0: java.nio.ByteBuffer): java.util.concurrent.CompletableFuture<java.net.http.WebSocket>
        sendPong(arg0: java.nio.ByteBuffer): java.util.concurrent.CompletableFuture<java.net.http.WebSocket>
        sendClose(arg0: int, arg1: java.lang.String): java.util.concurrent.CompletableFuture<java.net.http.WebSocket>
        request(arg0: long): void
        getSubprotocol(): java.lang.String
        isOutputClosed(): boolean
        isInputClosed(): boolean
        abort(): void
      }

    }
  }
}
