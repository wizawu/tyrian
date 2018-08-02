declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace server {
                        abstract class InvokerTube<T> extends com.sun.xml.internal.ws.server.sei.InvokerTube<com.sun.xml.internal.ws.api.server.Invoker> implements com.sun.xml.internal.ws.server.EndpointAwareTube {
                            protected constructor(arg0: com.sun.xml.internal.ws.api.server.Invoker)
                            public setEndpoint(arg0: com.sun.xml.internal.ws.api.server.WSEndpoint): void
                            protected getEndpoint(): com.sun.xml.internal.ws.api.server.WSEndpoint
                            public getInvoker(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): com.sun.xml.internal.ws.api.server.Invoker
                            public copy(arg0: com.sun.xml.internal.ws.api.pipe.TubeCloner): com.sun.xml.internal.ws.api.pipe.helper.AbstractTubeImpl
                            public preDestroy(): void
                            public static getCurrentPacket(): com.sun.xml.internal.ws.api.message.Packet
                            public getInvoker(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): com.sun.xml.internal.ws.server.sei.Invoker
                            public copy(arg0: com.sun.xml.internal.ws.api.pipe.TubeCloner): com.sun.xml.internal.ws.api.pipe.Tube
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}