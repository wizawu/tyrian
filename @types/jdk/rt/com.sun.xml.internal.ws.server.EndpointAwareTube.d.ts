declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace server {
                        interface EndpointAwareTube extends com.sun.xml.internal.ws.api.pipe.Tube {
                            setEndpoint(arg0: com.sun.xml.internal.ws.api.server.WSEndpoint<any>): void
                        }
                        interface EndpointAwareTube$$Lambda extends com.sun.xml.internal.ws.api.pipe.Tube {
                            (arg0: com.sun.xml.internal.ws.api.server.WSEndpoint<any>): void
                        }
                    }
                }
            }
        }
    }
}