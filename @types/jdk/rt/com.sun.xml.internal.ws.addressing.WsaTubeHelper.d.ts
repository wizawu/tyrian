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
                            protected soapVer: com.sun.xml.internal.ws.api.SOAPVersion
                            protected addVer: com.sun.xml.internal.ws.api.addressing.AddressingVersion
                            public constructor(arg0: com.sun.xml.internal.ws.api.WSBinding, arg1: com.sun.xml.internal.ws.api.model.SEIModel, arg2: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort)
                            public getFaultAction(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg1: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): string
                            public getInputAction(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): string
                            public getEffectiveInputAction(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): string
                            public isInputActionDefault(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): boolean
                            public getSOAPAction(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): string
                            public getOutputAction(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): string
                            public createInvalidAddressingHeaderFault(arg0: com.sun.xml.internal.ws.addressing.model.InvalidAddressingHeaderException, arg1: com.sun.xml.internal.ws.api.addressing.AddressingVersion): javax.xml.soap.SOAPFault
                            public newMapRequiredFault(arg0: com.sun.xml.internal.ws.addressing.model.MissingAddressingHeaderException): javax.xml.soap.SOAPFault
                            public getProblemActionDetail(arg0: java.lang.String | string, arg1: org.w3c.dom.Element): void
                            public getInvalidMapDetail(arg0: javax.xml.namespace.QName, arg1: org.w3c.dom.Element): void
                            public getMapRequiredDetail(arg0: javax.xml.namespace.QName, arg1: org.w3c.dom.Element): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}