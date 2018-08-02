declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace model {
                            namespace wsdl {
                                namespace editable {
                                    interface EditableWSDLPortType extends com.sun.xml.internal.ws.api.model.wsdl.WSDLPortType {
                                        get(arg0: java.lang.String | string): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLOperation
                                        getOperations(): java.lang.Iterable<com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLOperation>
                                        put(arg0: java.lang.String | string, arg1: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLOperation): void
                                        freeze(): void
                                        get(arg0: java.lang.String | string): com.sun.xml.internal.ws.api.model.wsdl.WSDLOperation
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