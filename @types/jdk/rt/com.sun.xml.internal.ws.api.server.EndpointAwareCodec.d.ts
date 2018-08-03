declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace server {
                            interface EndpointAwareCodec extends com.sun.xml.internal.ws.api.pipe.Codec {
                                setEndpoint(arg0: com.sun.xml.internal.ws.api.server.WSEndpoint): void
                            }
                            interface EndpointAwareCodec$$Lambda extends com.sun.xml.internal.ws.api.pipe.Codec {
                                (arg0: com.sun.xml.internal.ws.api.server.WSEndpoint): void
                            }
                        }
                    }
                }
            }
        }
    }
}