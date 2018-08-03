declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace wsdl {
                        abstract class WSDLOperationFinder {
                            protected readonly wsdlModel: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort
                            protected readonly binding: com.sun.xml.internal.ws.api.WSBinding
                            protected readonly seiModel: com.sun.xml.internal.ws.api.model.SEIModel
                            public constructor(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg1: com.sun.xml.internal.ws.api.WSBinding, arg2: com.sun.xml.internal.ws.api.model.SEIModel)
                            public getWSDLOperationQName(arg0: com.sun.xml.internal.ws.api.message.Packet): javax.xml.namespace.QName
                            public getWSDLOperationMapping(arg0: com.sun.xml.internal.ws.api.message.Packet): com.sun.xml.internal.ws.api.model.WSDLOperationMapping
                            protected wsdlOperationMapping(arg0: com.sun.xml.internal.ws.model.JavaMethodImpl): com.sun.xml.internal.ws.api.model.WSDLOperationMapping
                            protected wsdlOperationMapping(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundOperation): com.sun.xml.internal.ws.api.model.WSDLOperationMapping
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}