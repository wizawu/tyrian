declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace model {
                            namespace wsdl {
                                namespace editable {
                                    interface EditableWSDLOperation extends com.sun.xml.internal.ws.api.model.wsdl.WSDLOperation {
                                        getInput(): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLInput
                                        setInput(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLInput): void
                                        getOutput(): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLOutput
                                        setOutput(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLOutput): void
                                        getFaults(): java.lang.Iterable<com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLFault>
                                        addFault(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLFault): void
                                        getFault(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLFault
                                        setParameterOrder(arg0: java.lang.String | string): void
                                        freeze(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLModel): void
                                        getFault(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.WSDLFault
                                        getOutput(): com.sun.xml.internal.ws.api.model.wsdl.WSDLOutput
                                        getInput(): com.sun.xml.internal.ws.api.model.wsdl.WSDLInput
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