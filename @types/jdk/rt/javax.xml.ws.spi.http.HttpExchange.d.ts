declare namespace javax {
    namespace xml {
        namespace ws {
            namespace spi {
                namespace http {
abstract class HttpExchange {
    public static REQUEST_CIPHER_SUITE: string
    public static REQUEST_KEY_SIZE: string
    public static REQUEST_X509CERTIFICATE: string
    public constructor()
    public getRequestHeaders(): java.util.Map<java.lang.String, java.util.List<java.lang.String>>
    public getRequestHeader(arg0: java.lang.String | string): string
    public getResponseHeaders(): java.util.Map<java.lang.String, java.util.List<java.lang.String>>
    public addResponseHeader(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public getRequestURI(): string
    public getContextPath(): string
    public getRequestMethod(): string
    public getHttpContext(): javax.xml.ws.spi.http.HttpContext
    public close(): void
    public getRequestBody(): java.io.InputStream
    public getResponseBody(): java.io.OutputStream
    public setStatus(arg0: int): void
    public getRemoteAddress(): java.net.InetSocketAddress
    public getLocalAddress(): java.net.InetSocketAddress
    public getProtocol(): string
    public getScheme(): string
    public getPathInfo(): string
    public getQueryString(): string
    public getAttribute(arg0: java.lang.String | string): java.lang.Object
    public getAttributeNames(): java.util.Set<java.lang.String>
    public getUserPrincipal(): java.security.Principal
    public isUserInRole(arg0: java.lang.String | string): boolean
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}