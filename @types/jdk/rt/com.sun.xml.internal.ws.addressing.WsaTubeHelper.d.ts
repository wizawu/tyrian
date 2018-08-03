declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace addressing {
                        abstract class WsaTubeHelper {
                            protected seiModel: com.sun.xml.internal.ws.api.model.SEIModel
                            protected wsdlPort: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort
                            protected binding: com.sun.xml.internal.ws.api.WSBinding
                            protected readonly soapVer: com.sun.xml.internal.ws.api.SOAPVersion
                            protected readonly addVer: com.sun.xml.internal.ws.api.addressing.AddressingVersion
                            public constructor(arg0: com.sun.xml.internal.ws.api.WSBinding, arg1: com.sun.xml.internal.ws.api.model.SEIModel, arg2: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort)
                            public getFaultAction(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: com.sun.xml.internal.ws.api.message.Packet): string
                            public getInputAction(arg0: com.sun.xml.internal.ws.api.message.Packet): string
                            public getEffectiveInputAction(arg0: com.sun.xml.internal.ws.api.message.Packet): string
                            public isInputActionDefault(arg0: com.sun.xml.internal.ws.api.message.Packet): boolean
                            public getSOAPAction(arg0: com.sun.xml.internal.ws.api.message.Packet): string
                            public getOutputAction(arg0: com.sun.xml.internal.ws.api.message.Packet): string
                            public createInvalidAddressingHeaderFault(arg0: com.sun.xml.internal.ws.addressing.model.InvalidAddressingHeaderException, arg1: com.sun.xml.internal.ws.api.addressing.AddressingVersion): javax.xml.soap.SOAPFault
                            public newMapRequiredFault(arg0: com.sun.xml.internal.ws.addressing.model.MissingAddressingHeaderException): javax.xml.soap.SOAPFault
                            public abstract getProblemActionDetail(arg0: java.lang.String | string, arg1: org.w3c.dom.Element): void
                            public abstract getInvalidMapDetail(arg0: javax.xml.namespace.QName, arg1: org.w3c.dom.Element): void
                            public abstract getMapRequiredDetail(arg0: javax.xml.namespace.QName, arg1: org.w3c.dom.Element): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}