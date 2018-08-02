declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace model {
                            namespace wsdl {
                                namespace editable {
interface EditableWSDLModel extends com.sun.xml.internal.ws.api.model.wsdl.WSDLModel {
    getPortType(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPortType
    addBinding(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundPortType): void
    getBinding(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundPortType
    getBinding(arg0: javax.xml.namespace.QName, arg1: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundPortType
    getService(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLService
    getMessages(): java.util.Map<javax.xml.namespace.QName, com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLMessage>
    addMessage(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLMessage): void
    getPortTypes(): java.util.Map<javax.xml.namespace.QName, com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPortType>
    addPortType(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPortType): void
    getBindings(): java.util.Map<javax.xml.namespace.QName, com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundPortType>
    getServices(): java.util.Map<javax.xml.namespace.QName, com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLService>
    addService(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLService): void
    getMessage(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLMessage
    setPolicyMap(arg0: com.sun.xml.internal.ws.policy.PolicyMap): void
    finalizeRpcLitBinding(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundPortType): void
    freeze(): void
    getMessage(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.WSDLMessage
    getService(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.WSDLService
    getBinding(arg0: javax.xml.namespace.QName, arg1: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundPortType
    getBinding(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundPortType
    getPortType(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.WSDLPortType
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