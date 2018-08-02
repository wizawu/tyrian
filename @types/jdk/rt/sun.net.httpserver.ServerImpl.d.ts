declare namespace sun {
    namespace net {
        namespace httpserver {
            class ServerImpl implements sun.net.httpserver.TimeSource {
                public bind(arg0: java.net.InetSocketAddress, arg1: int): void
                public start(): void
                public setExecutor(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): void
                public getExecutor(): java.util.concurrent.Executor
                public setHttpsConfigurator(arg0: com.sun.net.httpserver.HttpsConfigurator): void
                public getHttpsConfigurator(): com.sun.net.httpserver.HttpsConfigurator
                public stop(arg0: int): void
                public createContext(arg0: java.lang.String | string, arg1: com.sun.net.httpserver.HttpHandler | com.sun.net.httpserver.HttpHandler$$Lambda): sun.net.httpserver.HttpContextImpl
                public createContext(arg0: java.lang.String | string): sun.net.httpserver.HttpContextImpl
                public removeContext(arg0: java.lang.String | string): void
                public removeContext(arg0: com.sun.net.httpserver.HttpContext): void
                public getAddress(): java.net.InetSocketAddress
                public getTime(): long
                public static class: java.lang.Class<any>
            }
            class ServerImpl$$Lambda implements sun.net.httpserver.TimeSource {
                public (arg0: java.net.InetSocketAddress, arg1: int): void
            }
        }
    }
}