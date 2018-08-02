declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace server {
                            interface WSEndpoint$PipeHead {
                                process(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg1: com.sun.xml.internal.ws.api.server.WebServiceContextDelegate, arg2: com.sun.xml.internal.ws.api.server.TransportBackChannel | com.sun.xml.internal.ws.api.server.TransportBackChannel$$Lambda): com.sun.xml.internal.ws.api.message.Packet
                            }
                            interface WSEndpoint$PipeHead$$Lambda {
                                (arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg1: com.sun.xml.internal.ws.api.server.WebServiceContextDelegate, arg2: com.sun.xml.internal.ws.api.server.TransportBackChannel | com.sun.xml.internal.ws.api.server.TransportBackChannel$$Lambda): com.sun.xml.internal.ws.api.message.Packet
                            }
                        }
                    }
                }
            }
        }
    }
}