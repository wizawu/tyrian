declare namespace sun {
    namespace net {
        namespace httpserver {
class HttpsExchangeImpl extends com.sun.net.httpserver.HttpsExchange {
    public getRequestHeaders(): com.sun.net.httpserver.Headers
    public getResponseHeaders(): com.sun.net.httpserver.Headers
    public getRequestURI(): java.net.URI
    public getRequestMethod(): string
    public getHttpContext(): sun.net.httpserver.HttpContextImpl
    public close(): void
    public getRequestBody(): java.io.InputStream
    public getResponseCode(): int
    public getResponseBody(): java.io.OutputStream
    public sendResponseHeaders(arg0: int, arg1: long): void
    public getRemoteAddress(): java.net.InetSocketAddress
    public getLocalAddress(): java.net.InetSocketAddress
    public getProtocol(): string
    public getSSLSession(): javax.net.ssl.SSLSession
    public getAttribute(arg0: java.lang.String | string): java.lang.Object
    public setAttribute(arg0: java.lang.String | string, arg1: java.lang.Object): void
    public setStreams(arg0: java.io.InputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
    public getPrincipal(): com.sun.net.httpserver.HttpPrincipal
    public getHttpContext(): com.sun.net.httpserver.HttpContext
    public static class: java.lang.Class<any>
}

        }
    }
}