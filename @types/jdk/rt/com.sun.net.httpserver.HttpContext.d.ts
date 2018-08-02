declare namespace com {
    namespace sun {
        namespace net {
            namespace httpserver {
abstract class HttpContext {
    protected constructor()
    public getHandler(): com.sun.net.httpserver.HttpHandler
    public setHandler(arg0: com.sun.net.httpserver.HttpHandler | com.sun.net.httpserver.HttpHandler$$Lambda): void
    public getPath(): string
    public getServer(): com.sun.net.httpserver.HttpServer
    public getAttributes(): java.util.Map<java.lang.String, java.lang.Object>
    public getFilters(): java.util.List<com.sun.net.httpserver.Filter>
    public setAuthenticator(arg0: com.sun.net.httpserver.Authenticator): com.sun.net.httpserver.Authenticator
    public getAuthenticator(): com.sun.net.httpserver.Authenticator
    public static class: java.lang.Class<any>
}

            }
        }
    }
}