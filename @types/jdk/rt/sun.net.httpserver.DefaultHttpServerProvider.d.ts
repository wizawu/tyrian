declare namespace sun {
    namespace net {
        namespace httpserver {
            class DefaultHttpServerProvider extends com.sun.net.httpserver.spi.HttpServerProvider {
                public constructor()
                public createHttpServer(arg0: java.net.InetSocketAddress, arg1: int): com.sun.net.httpserver.HttpServer
                public createHttpsServer(arg0: java.net.InetSocketAddress, arg1: int): com.sun.net.httpserver.HttpsServer
                public static class: java.lang.Class<any>
            }
        }
    }
}