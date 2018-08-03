declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace transport {
                        namespace http {
                            namespace server {
                                class PortableConnectionImpl extends com.sun.xml.internal.ws.transport.http.WSHTTPConnection implements com.sun.xml.internal.ws.api.server.WebServiceContextDelegate {
                                    public constructor(arg0: com.sun.xml.internal.ws.transport.http.HttpAdapter, arg1: javax.xml.ws.spi.http.HttpExchange)
                                    public getRequestHeaders(): java.util.Map<java.lang.String, java.util.List<java.lang.String>>
                                    public getRequestHeader(arg0: java.lang.String | string): string
                                    public setResponseHeaders(arg0: java.util.Map<java.lang.String, java.util.List<java.lang.String>>): void
                                    public setResponseHeader(arg0: java.lang.String | string, arg1: java.util.List<java.lang.String>): void
                                    public getRequestHeaderNames(): java.util.Set<java.lang.String>
                                    public getRequestHeaderValues(arg0: java.lang.String | string): java.util.List<java.lang.String>
                                    public getResponseHeaders(): java.util.Map<java.lang.String, java.util.List<java.lang.String>>
                                    public setContentTypeResponseHeader(arg0: java.lang.String | string): void
                                    public setStatus(arg0: int): void
                                    public getStatus(): int
                                    public getInput(): java.io.InputStream
                                    public getOutput(): java.io.OutputStream
                                    public getWebServiceContextDelegate(): com.sun.xml.internal.ws.api.server.WebServiceContextDelegate
                                    public getUserPrincipal(arg0: com.sun.xml.internal.ws.api.message.Packet): java.security.Principal
                                    public isUserInRole(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: java.lang.String | string): boolean
                                    public getEPRAddress(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: com.sun.xml.internal.ws.api.server.WSEndpoint): string
                                    public getServletContext(): java.lang.Object
                                    public getServletResponse(): java.lang.Object
                                    public getServletRequest(): java.lang.Object
                                    public getWSDLAddress(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: com.sun.xml.internal.ws.api.server.WSEndpoint): string
                                    public isSecure(): boolean
                                    public getRequestMethod(): string
                                    public getQueryString(): string
                                    public getPathInfo(): string
                                    public getExchange(): javax.xml.ws.spi.http.HttpExchange
                                    public getBaseAddress(): string
                                    public getProtocol(): string
                                    public setContentLengthResponseHeader(arg0: int): void
                                    public getRequestURI(): string
                                    public getRequestScheme(): string
                                    public getServerName(): string
                                    public getServerPort(): int
                                    protected getPropertyMap(): com.oracle.webservices.internal.api.message.BasePropertySet$PropertyMap
                                    public static class: java.lang.Class<any>
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}