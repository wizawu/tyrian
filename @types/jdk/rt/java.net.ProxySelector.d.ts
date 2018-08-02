declare namespace java {
    namespace net {
        abstract class ProxySelector {
            public constructor()
            public static getDefault(): java.net.ProxySelector
            public static setDefault(arg0: java.net.ProxySelector): void
            public select(arg0: java.net.URI): java.util.List<java.net.Proxy>
            public connectFailed(arg0: java.net.URI, arg1: java.net.SocketAddress, arg2: java.io.IOException): void
            public static class: java.lang.Class<any>
        }
    }
}