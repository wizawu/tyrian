declare namespace com {
    namespace sun {
        namespace net {
            namespace httpserver {
                abstract class HttpExchange {
                    protected constructor()
                    public getRequestHeaders(): com.sun.net.httpserver.Headers
                    public getResponseHeaders(): com.sun.net.httpserver.Headers
                    public getRequestURI(): java.net.URI
                    public getRequestMethod(): string
                    public getHttpContext(): com.sun.net.httpserver.HttpContext
                    public close(): void
                    public getRequestBody(): java.io.InputStream
                    public getResponseBody(): java.io.OutputStream
                    public sendResponseHeaders(arg0: int, arg1: long): void
                    public getRemoteAddress(): java.net.InetSocketAddress
                    public getResponseCode(): int
                    public getLocalAddress(): java.net.InetSocketAddress
                    public getProtocol(): string
                    public getAttribute(arg0: java.lang.String | string): java.lang.Object
                    public setAttribute(arg0: java.lang.String | string, arg1: java.lang.Object): void
                    public setStreams(arg0: java.io.InputStream, arg1: java.io.OutputStream): void
                    public getPrincipal(): com.sun.net.httpserver.HttpPrincipal
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}