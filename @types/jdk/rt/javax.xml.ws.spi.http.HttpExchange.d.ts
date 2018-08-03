declare namespace javax {
    namespace xml {
        namespace ws {
            namespace spi {
                namespace http {
                    abstract class HttpExchange {
                        public static readonly REQUEST_CIPHER_SUITE: string
                        public static readonly REQUEST_KEY_SIZE: string
                        public static readonly REQUEST_X509CERTIFICATE: string
                        public constructor()
                        public abstract getRequestHeaders(): java.util.Map<java.lang.String, java.util.List<java.lang.String>>
                        public abstract getRequestHeader(arg0: java.lang.String | string): string
                        public abstract getResponseHeaders(): java.util.Map<java.lang.String, java.util.List<java.lang.String>>
                        public abstract addResponseHeader(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                        public abstract getRequestURI(): string
                        public abstract getContextPath(): string
                        public abstract getRequestMethod(): string
                        public abstract getHttpContext(): javax.xml.ws.spi.http.HttpContext
                        public abstract close(): void
                        public abstract getRequestBody(): java.io.InputStream
                        public abstract getResponseBody(): java.io.OutputStream
                        public abstract setStatus(arg0: int): void
                        public abstract getRemoteAddress(): java.net.InetSocketAddress
                        public abstract getLocalAddress(): java.net.InetSocketAddress
                        public abstract getProtocol(): string
                        public abstract getScheme(): string
                        public abstract getPathInfo(): string
                        public abstract getQueryString(): string
                        public abstract getAttribute(arg0: java.lang.String | string): java.lang.Object
                        public abstract getAttributeNames(): java.util.Set<java.lang.String>
                        public abstract getUserPrincipal(): java.security.Principal
                        public abstract isUserInRole(arg0: java.lang.String | string): boolean
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}