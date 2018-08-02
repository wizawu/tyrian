declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace model {
                            namespace wsdl {
                                namespace editable {
                                    interface EditableWSDLPort extends com.sun.xml.internal.ws.api.model.wsdl.WSDLPort {
                                        getBinding(): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundPortType
                                        getOwner(): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLService
                                        setAddress(arg0: com.sun.xml.internal.ws.api.EndpointAddress): void
                                        setEPR(arg0: com.sun.xml.internal.ws.api.addressing.WSEndpointReference | com.sun.xml.internal.ws.api.addressing.WSEndpointReference$$Lambda): void
                                        freeze(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLModel): void
                                        getOwner(): com.sun.xml.internal.ws.api.model.wsdl.WSDLService
                                        getBinding(): com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundPortType
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}