declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace transport {
                        namespace http {
                            abstract class WSHTTPConnection extends com.oracle.webservices.internal.api.message.BasePropertySet {
                                public static readonly OK: int
                                public static readonly ONEWAY: int
                                public static readonly UNSUPPORTED_MEDIA: int
                                public static readonly MALFORMED_XML: int
                                public static readonly INTERNAL_ERR: int
                                public constructor()
                                public abstract setResponseHeaders(arg0: java.util.Map<java.lang.String, java.util.List<java.lang.String>>): void
                                public setResponseHeader(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public abstract setResponseHeader(arg0: java.lang.String | string, arg1: java.util.List<java.lang.String>): void
                                public abstract setContentTypeResponseHeader(arg0: java.lang.String | string): void
                                public abstract setStatus(arg0: int): void
                                public abstract getStatus(): int
                                public abstract getInput(): java.io.InputStream
                                public abstract getOutput(): java.io.OutputStream
                                public abstract getWebServiceContextDelegate(): com.sun.xml.internal.ws.api.server.WebServiceContextDelegate
                                public abstract getRequestMethod(): string
                                public abstract getRequestHeaders(): java.util.Map<java.lang.String, java.util.List<java.lang.String>>
                                public abstract getRequestHeaderNames(): java.util.Set<java.lang.String>
                                public abstract getResponseHeaders(): java.util.Map<java.lang.String, java.util.List<java.lang.String>>
                                public abstract getRequestHeader(arg0: java.lang.String | string): string
                                public abstract getRequestHeaderValues(arg0: java.lang.String | string): java.util.List<java.lang.String>
                                public abstract getQueryString(): string
                                public abstract getPathInfo(): string
                                public abstract getRequestURI(): string
                                public abstract getRequestScheme(): string
                                public abstract getServerName(): string
                                public abstract getServerPort(): int
                                public getContextPath(): string
                                public getContext(): java.lang.Object
                                public getBaseAddress(): string
                                public abstract isSecure(): boolean
                                public getUserPrincipal(): java.security.Principal
                                public isUserInRole(arg0: java.lang.String | string): boolean
                                public getRequestAttribute(arg0: java.lang.String | string): java.lang.Object
                                public close(): void
                                public isClosed(): boolean
                                public getProtocol(): string
                                public getCookie(arg0: java.lang.String | string): string
                                public setCookie(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public setContentLengthResponseHeader(arg0: int): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}