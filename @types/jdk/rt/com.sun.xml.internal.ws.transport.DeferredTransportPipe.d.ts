declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace transport {
                        class DeferredTransportPipe extends com.sun.xml.internal.ws.api.pipe.helper.AbstractTubeImpl {
                            public constructor(arg0: java.lang.ClassLoader, arg1: com.sun.xml.internal.ws.api.pipe.ClientTubeAssemblerContext)
                            public constructor(arg0: com.sun.xml.internal.ws.transport.DeferredTransportPipe, arg1: com.sun.xml.internal.ws.api.pipe.TubeCloner)
                            public processException(arg0: java.lang.Throwable): com.sun.xml.internal.ws.api.pipe.NextAction
                            public processRequest(arg0: com.sun.xml.internal.ws.api.message.Packet): com.sun.xml.internal.ws.api.pipe.NextAction
                            public processResponse(arg0: com.sun.xml.internal.ws.api.message.Packet): com.sun.xml.internal.ws.api.pipe.NextAction
                            public preDestroy(): void
                            public copy(arg0: com.sun.xml.internal.ws.api.pipe.TubeCloner): com.sun.xml.internal.ws.transport.DeferredTransportPipe
                            public copy(arg0: com.sun.xml.internal.ws.api.pipe.TubeCloner): com.sun.xml.internal.ws.api.pipe.helper.AbstractTubeImpl
                            public copy(arg0: com.sun.xml.internal.ws.api.pipe.TubeCloner): com.sun.xml.internal.ws.api.pipe.Tube
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}