declare namespace com {
    namespace sun {
        namespace net {
            namespace httpserver {
abstract class HttpServer {
    protected constructor()
    public static create(): com.sun.net.httpserver.HttpServer
    public static create(arg0: java.net.InetSocketAddress, arg1: int): com.sun.net.httpserver.HttpServer
    public bind(arg0: java.net.InetSocketAddress, arg1: int): void
    public start(): void
    public setExecutor(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): void
    public getExecutor(): java.util.concurrent.Executor
    public stop(arg0: int): void
    public createContext(arg0: java.lang.String | string, arg1: com.sun.net.httpserver.HttpHandler | com.sun.net.httpserver.HttpHandler$$Lambda): com.sun.net.httpserver.HttpContext
    public createContext(arg0: java.lang.String | string): com.sun.net.httpserver.HttpContext
    public removeContext(arg0: java.lang.String | string): void
    public removeContext(arg0: com.sun.net.httpserver.HttpContext): void
    public getAddress(): java.net.InetSocketAddress
    public static class: java.lang.Class<any>
}

            }
        }
    }
}