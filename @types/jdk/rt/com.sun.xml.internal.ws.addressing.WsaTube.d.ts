declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace addressing {
                        abstract class WsaTube extends com.sun.xml.internal.ws.api.pipe.helper.AbstractFilterTubeImpl {
                            protected readonly wsdlPort: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort
                            protected readonly binding: com.sun.xml.internal.ws.api.WSBinding
                            protected readonly addressingVersion: com.sun.xml.internal.ws.api.addressing.AddressingVersion
                            protected readonly soapVersion: com.sun.xml.internal.ws.api.SOAPVersion
                            public constructor(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg1: com.sun.xml.internal.ws.api.WSBinding, arg2: com.sun.xml.internal.ws.api.pipe.Tube)
                            public constructor(arg0: com.sun.xml.internal.ws.addressing.WsaTube | com.sun.xml.internal.ws.addressing.WsaTube$$Lambda, arg1: com.sun.xml.internal.ws.api.pipe.TubeCloner)
                            public processException(arg0: java.lang.Throwable): com.sun.xml.internal.ws.api.pipe.NextAction
                            protected getTubeHelper(): com.sun.xml.internal.ws.addressing.WsaTubeHelper
                            protected validateInboundHeaders(arg0: com.sun.xml.internal.ws.api.message.Packet): com.sun.xml.internal.ws.api.message.Packet
                            protected checkMessageAddressingProperties(arg0: com.sun.xml.internal.ws.api.message.Packet): void
                            protected checkCardinality(arg0: com.sun.xml.internal.ws.api.message.Packet): void
                            protected getWSDLBoundOperation(arg0: com.sun.xml.internal.ws.api.message.Packet): com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundOperation
                            protected validateSOAPAction(arg0: com.sun.xml.internal.ws.api.message.Packet): void
                            protected abstract validateAction(arg0: com.sun.xml.internal.ws.api.message.Packet): void
                            protected checkMandatoryHeaders(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean): void
                            public static class: java.lang.Class<any>
                        }
                        interface WsaTube$$Lambda extends com.sun.xml.internal.ws.api.pipe.helper.AbstractFilterTubeImpl {
                            (arg0: com.sun.xml.internal.ws.api.message.Packet): void
                        }
                    }
                }
            }
        }
    }
}