declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace model {
                            namespace wsdl {
                                namespace editable {
interface EditableWSDLBoundFault extends com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundFault {
    getFault(): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLFault
    getBoundOperation(): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundOperation
    freeze(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundOperation): void
    getBoundOperation(): com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundOperation
    getFault(): com.sun.xml.internal.ws.api.model.wsdl.WSDLFault
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