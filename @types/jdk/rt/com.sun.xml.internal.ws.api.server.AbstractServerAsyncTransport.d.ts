declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace server {
                            abstract class AbstractServerAsyncTransport<T> {
                                public constructor(arg0: com.sun.xml.internal.ws.api.server.WSEndpoint)
                                protected decodePacket(arg0: T, arg1: com.sun.xml.internal.ws.api.pipe.Codec): com.sun.xml.internal.ws.api.message.Packet
                                protected abstract encodePacket(arg0: T, arg1: com.sun.xml.internal.ws.api.message.Packet, arg2: com.sun.xml.internal.ws.api.pipe.Codec): void
                                protected abstract getAcceptableMimeTypes(arg0: T): string
                                protected abstract getTransportBackChannel(arg0: T): com.sun.xml.internal.ws.api.server.TransportBackChannel
                                protected abstract getPropertySet(arg0: T): com.oracle.webservices.internal.api.message.PropertySet
                                protected abstract getWebServiceContextDelegate(arg0: T): com.sun.xml.internal.ws.api.server.WebServiceContextDelegate
                                protected handle(arg0: T): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}