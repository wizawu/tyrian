declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace addressing {
class WsaClientTube extends com.sun.xml.internal.ws.addressing.WsaTube {
    protected expectReply: boolean
    public constructor(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg1: com.sun.xml.internal.ws.api.WSBinding, arg2: com.sun.xml.internal.ws.api.pipe.Tube)
    public constructor(arg0: com.sun.xml.internal.ws.addressing.WsaClientTube, arg1: com.sun.xml.internal.ws.api.pipe.TubeCloner)
    public copy(arg0: com.sun.xml.internal.ws.api.pipe.TubeCloner): com.sun.xml.internal.ws.addressing.WsaClientTube
    public processRequest(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): com.sun.xml.internal.ws.api.pipe.NextAction
    public processResponse(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): com.sun.xml.internal.ws.api.pipe.NextAction
    protected validateAction(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): void
    public processException(arg0: java.lang.Throwable): com.sun.xml.internal.ws.api.pipe.NextAction
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