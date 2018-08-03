declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace databinding {
                            interface Databinding extends com.oracle.webservices.internal.api.databinding.Databinding {
                                getEndpointBridge(arg0: com.sun.xml.internal.ws.api.message.Packet): com.sun.xml.internal.ws.api.databinding.EndpointCallBridge
                                getClientBridge(arg0: java.lang.reflect.Method): com.sun.xml.internal.ws.api.databinding.ClientCallBridge
                                generateWSDL(arg0: com.sun.xml.internal.ws.api.databinding.WSDLGenInfo): void
                                encode(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: java.io.OutputStream): com.sun.xml.internal.ws.api.pipe.ContentType
                                decode(arg0: java.io.InputStream, arg1: java.lang.String | string, arg2: com.sun.xml.internal.ws.api.message.Packet): void
                                getMessageContextFactory(): com.sun.xml.internal.ws.api.message.MessageContextFactory
                            }
                        }
                    }
                }
            }
        }
    }
}