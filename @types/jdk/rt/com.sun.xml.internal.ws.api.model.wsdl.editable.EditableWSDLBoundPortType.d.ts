declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace model {
                            namespace wsdl {
                                namespace editable {
                                    interface EditableWSDLBoundPortType extends com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundPortType {
                                        getOwner(): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLModel
                                        get(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundOperation
                                        getPortType(): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPortType
                                        getBindingOperations(): java.lang.Iterable<com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundOperation>
                                        getOperation(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundOperation
                                        put(arg0: javax.xml.namespace.QName, arg1: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundOperation): void
                                        setBindingId(arg0: com.sun.xml.internal.ws.api.BindingID): void
                                        setStyle(arg0: javax.jws.soap.SOAPBinding$Style): void
                                        freeze(): void
                                        getOperation(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundOperation
                                        getPortType(): com.sun.xml.internal.ws.api.model.wsdl.WSDLPortType
                                        get(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundOperation
                                        getOwner(): com.sun.xml.internal.ws.api.model.wsdl.WSDLModel
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