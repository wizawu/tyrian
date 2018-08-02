declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace model {
                            namespace wsdl {
                                interface WSDLPort extends com.sun.xml.internal.ws.api.model.wsdl.WSDLFeaturedObject , com.sun.xml.internal.ws.api.model.wsdl.WSDLExtensible {
                                    getName(): javax.xml.namespace.QName
                                    getBinding(): com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundPortType
                                    getAddress(): com.sun.xml.internal.ws.api.EndpointAddress
                                    getOwner(): com.sun.xml.internal.ws.api.model.wsdl.WSDLService
                                    getEPR(): com.sun.xml.internal.ws.api.addressing.WSEndpointReference
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}