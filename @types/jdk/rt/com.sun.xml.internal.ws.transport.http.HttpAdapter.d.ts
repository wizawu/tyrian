declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace transport {
                        namespace http {
                            class HttpAdapter extends com.sun.xml.internal.ws.api.server.Adapter<com.sun.xml.internal.ws.transport.http.HttpAdapter$HttpToolkit> {
                                protected wsdls: java.util.Map<java.lang.String, com.sun.xml.internal.ws.api.server.SDDocument>
                                public owner: com.sun.xml.internal.ws.transport.http.HttpAdapterList<com.sun.xml.internal.ws.transport.http.HttpAdapter>
                                public urlPattern: string
                                protected stickyCookie: boolean
                                protected disableJreplicaCookie: boolean
                                public static NO_OP_COMPLETION_CALLBACK: com.sun.xml.internal.ws.transport.http.HttpAdapter$CompletionCallback
                                public static dump: boolean
                                public static dump_threshold: int
                                public static publishStatusPage: boolean
                                public static createAlone(arg0: com.sun.xml.internal.ws.api.server.WSEndpoint): com.sun.xml.internal.ws.transport.http.HttpAdapter
                                protected constructor(arg0: com.sun.xml.internal.ws.api.server.WSEndpoint, arg1: com.sun.xml.internal.ws.transport.http.HttpAdapterList<com.sun.xml.internal.ws.transport.http.HttpAdapter>)
                                protected constructor(arg0: com.sun.xml.internal.ws.api.server.WSEndpoint, arg1: com.sun.xml.internal.ws.transport.http.HttpAdapterList<com.sun.xml.internal.ws.transport.http.HttpAdapter>, arg2: java.lang.String | string)
                                public getServiceDefinition(): com.sun.xml.internal.ws.api.server.ServiceDefinition
                                public initWSDLMap(arg0: com.sun.xml.internal.ws.api.server.ServiceDefinition): void
                                public getValidPath(): string
                                protected createToolkit(): com.sun.xml.internal.ws.transport.http.HttpAdapter$HttpToolkit
                                public handle(arg0: com.sun.xml.internal.ws.transport.http.WSHTTPConnection): void
                                public handleGet(arg0: com.sun.xml.internal.ws.transport.http.WSHTTPConnection): boolean
                                protected addSatellites(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): void
                                public static fixQuotesAroundSoapAction(arg0: java.lang.String | string): string
                                protected getNonAnonymousResponseProcessor(): com.sun.xml.internal.ws.api.addressing.NonAnonymousResponseProcessor
                                protected writeClientError(arg0: int, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): void
                                public invokeAsync(arg0: com.sun.xml.internal.ws.transport.http.WSHTTPConnection): void
                                public invokeAsync(arg0: com.sun.xml.internal.ws.transport.http.WSHTTPConnection, arg1: com.sun.xml.internal.ws.transport.http.HttpAdapter$CompletionCallback | com.sun.xml.internal.ws.transport.http.HttpAdapter$CompletionCallback$$Lambda): void
                                public publishWSDL(arg0: com.sun.xml.internal.ws.transport.http.WSHTTPConnection): void
                                public getPortAddressResolver(arg0: java.lang.String | string): com.sun.xml.internal.ws.api.server.PortAddressResolver
                                public getDocumentAddressResolver(arg0: com.sun.xml.internal.ws.api.server.PortAddressResolver): com.sun.xml.internal.ws.api.server.DocumentAddressResolver
                                public static setPublishStatus(arg0: boolean): void
                                public static setDump(arg0: boolean): void
                                protected createToolkit(): com.sun.xml.internal.ws.api.server.Adapter$Toolkit
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}