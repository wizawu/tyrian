declare namespace com {
    namespace sun {
        namespace net {
            namespace httpserver {
                abstract class HttpsServer extends com.sun.net.httpserver.HttpServer {
                    protected constructor()
                    public static create(): com.sun.net.httpserver.HttpsServer
                    public static create(arg0: java.net.InetSocketAddress, arg1: int): com.sun.net.httpserver.HttpsServer
                    public abstract setHttpsConfigurator(arg0: com.sun.net.httpserver.HttpsConfigurator): void
                    public abstract getHttpsConfigurator(): com.sun.net.httpserver.HttpsConfigurator
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}