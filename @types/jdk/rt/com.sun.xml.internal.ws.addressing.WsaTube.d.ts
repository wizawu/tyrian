declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace addressing {
abstract class WsaTube extends com.sun.xml.internal.ws.api.pipe.helper.AbstractFilterTubeImpl {
    protected wsdlPort: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort
    protected binding: com.sun.xml.internal.ws.api.WSBinding
    protected addressingVersion: com.sun.xml.internal.ws.api.addressing.AddressingVersion
    protected soapVersion: com.sun.xml.internal.ws.api.SOAPVersion
    public constructor(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg1: com.sun.xml.internal.ws.api.WSBinding, arg2: com.sun.xml.internal.ws.api.pipe.Tube)
    public constructor(arg0: com.sun.xml.internal.ws.addressing.WsaTube, arg1: com.sun.xml.internal.ws.api.pipe.TubeCloner)
    public processException(arg0: java.lang.Throwable): com.sun.xml.internal.ws.api.pipe.NextAction
    protected getTubeHelper(): com.sun.xml.internal.ws.addressing.WsaTubeHelper
    protected validateInboundHeaders(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): com.sun.xml.internal.ws.api.message.Packet
    protected checkMessageAddressingProperties(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): void
    protected checkCardinality(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): void
    protected getWSDLBoundOperation(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundOperation
    protected validateSOAPAction(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): void
    protected validateAction(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): void
    protected checkMandatoryHeaders(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}