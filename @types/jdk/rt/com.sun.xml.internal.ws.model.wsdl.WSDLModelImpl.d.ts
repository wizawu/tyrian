declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace model {
                        namespace wsdl {
class WSDLModelImpl extends com.sun.xml.internal.ws.model.wsdl.AbstractExtensibleImpl implements com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLModel {
    public constructor(arg0: java.lang.String | string)
    public constructor()
    public addMessage(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLMessage): void
    public getMessage(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLMessage
    public addPortType(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPortType): void
    public getPortType(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPortType
    public addBinding(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundPortType): void
    public getBinding(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundPortType
    public addService(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLService): void
    public getService(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLService
    public getMessages(): java.util.Map<javax.xml.namespace.QName, com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLMessage>
    public getPortTypes(): java.util.Map<javax.xml.namespace.QName, com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPortType>
    public getBindings(): java.util.Map<javax.xml.namespace.QName, com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundPortType>
    public getServices(): java.util.Map<javax.xml.namespace.QName, com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLService>
    public getFirstServiceName(): javax.xml.namespace.QName
    public getBinding(arg0: javax.xml.namespace.QName, arg1: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundPortType
    public finalizeRpcLitBinding(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundPortType): void
    public getPolicyMap(): com.sun.xml.internal.ws.policy.PolicyMap
    public setPolicyMap(arg0: com.sun.xml.internal.ws.policy.PolicyMap): void
    public freeze(): void
    public areRequiredExtensionsUnderstood(): boolean
    public addNotUnderstoodExtension(arg0: javax.xml.namespace.QName, arg1: org.xml.sax.Locator): void
    public getNotUnderstoodExtensions(): java.util.List
    public addExtension(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension | com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension$$Lambda): void
    public getExtension(arg0: java.lang.Class): com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension
    public getMessage(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.WSDLMessage
    public getService(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.WSDLService
    public getBinding(arg0: javax.xml.namespace.QName, arg1: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundPortType
    public getBinding(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundPortType
    public getPortType(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.WSDLPortType
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}