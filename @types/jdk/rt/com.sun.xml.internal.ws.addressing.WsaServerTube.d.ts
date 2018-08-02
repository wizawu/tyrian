declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace addressing {
class WsaServerTube extends com.sun.xml.internal.ws.addressing.WsaTube {
    protected isEarlyBackchannelCloseAllowed: boolean
    public static REQUEST_MESSAGE_ID: string
    public constructor(arg0: com.sun.xml.internal.ws.api.server.WSEndpoint, arg1: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg2: com.sun.xml.internal.ws.api.WSBinding, arg3: com.sun.xml.internal.ws.api.pipe.Tube)
    public constructor(arg0: com.sun.xml.internal.ws.addressing.WsaServerTube, arg1: com.sun.xml.internal.ws.api.pipe.TubeCloner)
    public copy(arg0: com.sun.xml.internal.ws.api.pipe.TubeCloner): com.sun.xml.internal.ws.addressing.WsaServerTube
    public processRequest(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): com.sun.xml.internal.ws.api.pipe.NextAction
    protected isAnonymousRequired(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundOperation): boolean
    protected checkAnonymousSemantics(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundOperation, arg1: com.sun.xml.internal.ws.api.addressing.WSEndpointReference | com.sun.xml.internal.ws.api.addressing.WSEndpointReference$$Lambda, arg2: com.sun.xml.internal.ws.api.addressing.WSEndpointReference | com.sun.xml.internal.ws.api.addressing.WSEndpointReference$$Lambda): void
    public processException(arg0: java.lang.Throwable): com.sun.xml.internal.ws.api.pipe.NextAction
    public processResponse(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): com.sun.xml.internal.ws.api.pipe.NextAction
    protected validateAction(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): void
    protected checkMessageAddressingProperties(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): void
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