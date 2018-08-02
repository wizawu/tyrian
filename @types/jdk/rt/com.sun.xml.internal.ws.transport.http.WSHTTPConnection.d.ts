declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace transport {
                        namespace http {
                            abstract class WSHTTPConnection extends com.oracle.webservices.internal.api.message.BasePropertySet {
                                public static OK: int
                                public static ONEWAY: int
                                public static UNSUPPORTED_MEDIA: int
                                public static MALFORMED_XML: int
                                public static INTERNAL_ERR: int
                                public constructor()
                                public setResponseHeaders(arg0: java.util.Map<java.lang.String, java.util.List<java.lang.String>>): void
                                public setResponseHeader(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public setResponseHeader(arg0: java.lang.String | string, arg1: java.util.List<java.lang.String>): void
                                public setContentTypeResponseHeader(arg0: java.lang.String | string): void
                                public setStatus(arg0: int): void
                                public getStatus(): int
                                public getInput(): java.io.InputStream
                                public getOutput(): java.io.OutputStream
                                public getWebServiceContextDelegate(): com.sun.xml.internal.ws.api.server.WebServiceContextDelegate
                                public getRequestMethod(): string
                                public getRequestHeaders(): java.util.Map<java.lang.String, java.util.List<java.lang.String>>
                                public getRequestHeaderNames(): java.util.Set<java.lang.String>
                                public getResponseHeaders(): java.util.Map<java.lang.String, java.util.List<java.lang.String>>
                                public getRequestHeader(arg0: java.lang.String | string): string
                                public getRequestHeaderValues(arg0: java.lang.String | string): java.util.List<java.lang.String>
                                public getQueryString(): string
                                public getPathInfo(): string
                                public getRequestURI(): string
                                public getRequestScheme(): string
                                public getServerName(): string
                                public getServerPort(): int
                                public getContextPath(): string
                                public getContext(): java.lang.Object
                                public getBaseAddress(): string
                                public isSecure(): boolean
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