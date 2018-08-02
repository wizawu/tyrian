declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace model {
                            namespace wsdl {
                                namespace editable {
                                    interface EditableWSDLInput extends com.sun.xml.internal.ws.api.model.wsdl.WSDLInput {
                                        getMessage(): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLMessage
                                        getOperation(): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLOperation
                                        setAction(arg0: java.lang.String | string): void
                                        setDefaultAction(arg0: boolean): void
                                        freeze(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLModel): void
                                        getOperation(): com.sun.xml.internal.ws.api.model.wsdl.WSDLOperation
                                        getMessage(): com.sun.xml.internal.ws.api.model.wsdl.WSDLMessage
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