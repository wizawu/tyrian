declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace handler {
abstract class HandlerTube extends com.sun.xml.internal.ws.api.pipe.helper.AbstractFilterTubeImpl {
    protected handlers: java.util.List<javax.xml.ws.handler.Handler>
    protected port: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort
    public constructor(arg0: com.sun.xml.internal.ws.api.pipe.Tube, arg1: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg2: com.sun.xml.internal.ws.api.WSBinding)
    public constructor(arg0: com.sun.xml.internal.ws.api.pipe.Tube, arg1: com.sun.xml.internal.ws.handler.HandlerTube, arg2: com.sun.xml.internal.ws.api.WSBinding)
    protected constructor(arg0: com.sun.xml.internal.ws.handler.HandlerTube, arg1: com.sun.xml.internal.ws.api.pipe.TubeCloner)
    protected getBinding(): com.sun.xml.internal.ws.api.WSBinding
    public processRequest(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): com.sun.xml.internal.ws.api.pipe.NextAction
    public processResponse(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): com.sun.xml.internal.ws.api.pipe.NextAction
    public processException(arg0: java.lang.Throwable): com.sun.xml.internal.ws.api.pipe.NextAction
    protected initiateClosing(arg0: javax.xml.ws.handler.MessageContext): void
    public close(arg0: javax.xml.ws.handler.MessageContext): void
    protected closeClientsideHandlers(arg0: javax.xml.ws.handler.MessageContext): void
    protected closeServersideHandlers(arg0: javax.xml.ws.handler.MessageContext): void
    protected resetProcessor(): void
    public isHandlerChainEmpty(): boolean
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}