declare namespace com {
    namespace sun {
        namespace net {
            namespace httpserver {
                abstract class HttpExchange {
                    protected constructor()
                    public abstract getRequestHeaders(): com.sun.net.httpserver.Headers
                    public abstract getResponseHeaders(): com.sun.net.httpserver.Headers
                    public abstract getRequestURI(): java.net.URI
                    public abstract getRequestMethod(): string
                    public abstract getHttpContext(): com.sun.net.httpserver.HttpContext
                    public abstract close(): void
                    public abstract getRequestBody(): java.io.InputStream
                    public abstract getResponseBody(): java.io.OutputStream
                    public abstract sendResponseHeaders(arg0: int, arg1: long): void
                    public abstract getRemoteAddress(): java.net.InetSocketAddress
                    public abstract getResponseCode(): int
                    public abstract getLocalAddress(): java.net.InetSocketAddress
                    public abstract getProtocol(): string
                    public abstract getAttribute(arg0: java.lang.String | string): java.lang.Object
                    public abstract setAttribute(arg0: java.lang.String | string, arg1: java.lang.Object): void
                    public abstract setStreams(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                    public abstract getPrincipal(): com.sun.net.httpserver.HttpPrincipal
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}