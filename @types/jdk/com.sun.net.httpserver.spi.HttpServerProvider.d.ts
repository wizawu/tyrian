declare namespace com {
  namespace sun {
    namespace net {
      namespace httpserver {
        namespace spi {

          abstract class HttpServerProvider {
            public abstract createHttpServer(arg0: java.net.InetSocketAddress, arg1: int): com.sun.net.httpserver.HttpServer
            public abstract createHttpsServer(arg0: java.net.InetSocketAddress, arg1: int): com.sun.net.httpserver.HttpsServer
            protected constructor()
            public static provider(): com.sun.net.httpserver.spi.HttpServerProvider
          }

        }
      }
    }
  }
}
