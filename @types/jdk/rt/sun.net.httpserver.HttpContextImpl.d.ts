declare namespace sun {
    namespace net {
        namespace httpserver {
class HttpContextImpl extends com.sun.net.httpserver.HttpContext {
    public getHandler(): com.sun.net.httpserver.HttpHandler
    public setHandler(arg0: com.sun.net.httpserver.HttpHandler | com.sun.net.httpserver.HttpHandler$$Lambda): void
    public getPath(): string
    public getServer(): com.sun.net.httpserver.HttpServer
    public getProtocol(): string
    public getAttributes(): java.util.Map<java.lang.String, java.lang.Object>
    public getFilters(): java.util.List<com.sun.net.httpserver.Filter>
    public setAuthenticator(arg0: com.sun.net.httpserver.Authenticator): com.sun.net.httpserver.Authenticator
    public getAuthenticator(): com.sun.net.httpserver.Authenticator
    public static class: java.lang.Class<any>
}

        }
    }
}