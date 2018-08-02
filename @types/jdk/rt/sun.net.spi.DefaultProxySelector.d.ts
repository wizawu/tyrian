declare namespace sun {
    namespace net {
        namespace spi {
            class DefaultProxySelector extends java.net.ProxySelector {
                public constructor()
                public select(arg0: java.net.URI): java.util.List<java.net.Proxy>
                public connectFailed(arg0: java.net.URI, arg1: java.net.SocketAddress, arg2: java.io.IOException): void
                public static class: java.lang.Class<any>
            }
        }
    }
}