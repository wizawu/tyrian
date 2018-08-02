declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace model {
                            namespace wsdl {
                                interface WSDLModel extends com.sun.xml.internal.ws.api.model.wsdl.WSDLExtensible {
                                    getPortType(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.WSDLPortType
                                    getBinding(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundPortType
                                    getBinding(arg0: javax.xml.namespace.QName, arg1: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundPortType
                                    getService(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.WSDLService
                                    getPortTypes(): java.util.Map<javax.xml.namespace.QName, com.sun.xml.internal.ws.api.model.wsdl.WSDLPortType>
                                    getBindings(): java.util.Map<javax.xml.namespace.QName, com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundPortType>
                                    getServices(): java.util.Map<javax.xml.namespace.QName, com.sun.xml.internal.ws.api.model.wsdl.WSDLService>
                                    getFirstServiceName(): javax.xml.namespace.QName
                                    getMessage(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.WSDLMessage
                                    getMessages(): java.util.Map<javax.xml.namespace.QName, com.sun.xml.internal.ws.api.model.wsdl.WSDLMessage>
                                    getPolicyMap(): com.sun.xml.internal.ws.policy.PolicyMap
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}