declare namespace java {
  namespace net {
    namespace http {

      interface WebSocket$Listener {
        onOpen(arg0: java.net.http.WebSocket): void
        onText(arg0: java.net.http.WebSocket, arg1: java.lang.CharSequence, arg2: boolean): java.util.concurrent.CompletionStage<unknown>
        onBinary(arg0: java.net.http.WebSocket, arg1: java.nio.ByteBuffer, arg2: boolean): java.util.concurrent.CompletionStage<unknown>
        onPing(arg0: java.net.http.WebSocket, arg1: java.nio.ByteBuffer): java.util.concurrent.CompletionStage<unknown>
        onPong(arg0: java.net.http.WebSocket, arg1: java.nio.ByteBuffer): java.util.concurrent.CompletionStage<unknown>
        onClose(arg0: java.net.http.WebSocket, arg1: int, arg2: java.lang.String): java.util.concurrent.CompletionStage<unknown>
        onError(arg0: java.net.http.WebSocket, arg1: java.lang.Throwable): void
      }

    }
  }
}
