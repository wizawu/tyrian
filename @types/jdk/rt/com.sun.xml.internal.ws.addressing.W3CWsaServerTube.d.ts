declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace addressing {
                        class W3CWsaServerTube extends com.sun.xml.internal.ws.addressing.WsaServerTube {
                            public constructor(arg0: com.sun.xml.internal.ws.api.server.WSEndpoint, arg1: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg2: com.sun.xml.internal.ws.api.WSBinding, arg3: com.sun.xml.internal.ws.api.pipe.Tube)
                            public constructor(arg0: com.sun.xml.internal.ws.addressing.W3CWsaServerTube, arg1: com.sun.xml.internal.ws.api.pipe.TubeCloner)
                            public copy(arg0: com.sun.xml.internal.ws.api.pipe.TubeCloner): com.sun.xml.internal.ws.addressing.W3CWsaServerTube
                            protected checkMandatoryHeaders(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean): void
                            protected isAnonymousRequired(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundOperation): boolean
                            protected checkAnonymousSemantics(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundOperation, arg1: com.sun.xml.internal.ws.api.addressing.WSEndpointReference | com.sun.xml.internal.ws.api.addressing.WSEndpointReference$$Lambda, arg2: com.sun.xml.internal.ws.api.addressing.WSEndpointReference | com.sun.xml.internal.ws.api.addressing.WSEndpointReference$$Lambda): void
                            public copy(arg0: com.sun.xml.internal.ws.api.pipe.TubeCloner): com.sun.xml.internal.ws.addressing.WsaServerTube
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