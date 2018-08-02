declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace transport {
                        namespace http {
                            class HttpAdapter$AsyncTransport extends com.sun.xml.internal.ws.api.server.AbstractServerAsyncTransport<com.sun.xml.internal.ws.transport.http.WSHTTPConnection> {
                                public constructor(arg0: com.sun.xml.internal.ws.transport.http.HttpAdapter)
                                public handleAsync(arg0: com.sun.xml.internal.ws.transport.http.WSHTTPConnection): void
                                protected encodePacket(arg0: com.sun.xml.internal.ws.transport.http.WSHTTPConnection, arg1: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg2: com.sun.xml.internal.ws.api.pipe.Codec): void
                                protected getAcceptableMimeTypes(arg0: com.sun.xml.internal.ws.transport.http.WSHTTPConnection): string
                                protected getTransportBackChannel(arg0: com.sun.xml.internal.ws.transport.http.WSHTTPConnection): com.sun.xml.internal.ws.api.server.TransportBackChannel
                                protected getPropertySet(arg0: com.sun.xml.internal.ws.transport.http.WSHTTPConnection): com.oracle.webservices.internal.api.message.PropertySet
                                protected getWebServiceContextDelegate(arg0: com.sun.xml.internal.ws.transport.http.WSHTTPConnection): com.sun.xml.internal.ws.api.server.WebServiceContextDelegate
                                protected getWebServiceContextDelegate(arg0: java.lang.Object): com.sun.xml.internal.ws.api.server.WebServiceContextDelegate
                                protected getPropertySet(arg0: java.lang.Object): com.oracle.webservices.internal.api.message.PropertySet
                                protected getTransportBackChannel(arg0: java.lang.Object): com.sun.xml.internal.ws.api.server.TransportBackChannel
                                protected getAcceptableMimeTypes(arg0: java.lang.Object): string
                                protected encodePacket(arg0: java.lang.Object, arg1: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg2: com.sun.xml.internal.ws.api.pipe.Codec): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}