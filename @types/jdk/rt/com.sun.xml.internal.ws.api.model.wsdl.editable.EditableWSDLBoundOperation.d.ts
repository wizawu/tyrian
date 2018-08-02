declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace model {
                            namespace wsdl {
                                namespace editable {
                                    interface EditableWSDLBoundOperation extends com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundOperation {
                                        getOperation(): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLOperation
                                        getBoundPortType(): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundPortType
                                        getPart(arg0: java.lang.String | string, arg1: javax.jws.WebParam$Mode): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPart
                                        getInParts(): java.util.Map<java.lang.String, com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPart>
                                        getOutParts(): java.util.Map<java.lang.String, com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPart>
                                        getFaults(): java.lang.Iterable<com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundFault>
                                        addPart(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPart, arg1: javax.jws.WebParam$Mode): void
                                        addFault(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundFault): void
                                        setAnonymous(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundOperation$ANONYMOUS): void
                                        setInputExplicitBodyParts(arg0: boolean): void
                                        setOutputExplicitBodyParts(arg0: boolean): void
                                        setFaultExplicitBodyParts(arg0: boolean): void
                                        setRequestNamespace(arg0: java.lang.String | string): void
                                        setResponseNamespace(arg0: java.lang.String | string): void
                                        setSoapAction(arg0: java.lang.String | string): void
                                        setStyle(arg0: javax.jws.soap.SOAPBinding$Style): void
                                        freeze(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLModel): void
                                        getPart(arg0: java.lang.String | string, arg1: javax.jws.WebParam$Mode): com.sun.xml.internal.ws.api.model.wsdl.WSDLPart
                                        getBoundPortType(): com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundPortType
                                        getOperation(): com.sun.xml.internal.ws.api.model.wsdl.WSDLOperation
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