declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace model {
                            namespace wsdl {
                                interface WSDLBoundFault extends com.sun.xml.internal.ws.api.model.wsdl.WSDLObject , com.sun.xml.internal.ws.api.model.wsdl.WSDLExtensible {
                                    getName(): string
                                    getQName(): javax.xml.namespace.QName
                                    getFault(): com.sun.xml.internal.ws.api.model.wsdl.WSDLFault
                                    getBoundOperation(): com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundOperation
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}