declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace model {
                        namespace wsdl {
class WSDLBoundPortTypeImpl extends com.sun.xml.internal.ws.model.wsdl.AbstractFeaturedObjectImpl implements com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundPortType {
    public constructor(arg0: javax.xml.stream.XMLStreamReader, arg1: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLModel, arg2: javax.xml.namespace.QName, arg3: javax.xml.namespace.QName)
    public getName(): javax.xml.namespace.QName
    public getOwner(): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLModel
    public get(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundOperation
    public put(arg0: javax.xml.namespace.QName, arg1: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundOperation): void
    public getPortTypeName(): javax.xml.namespace.QName
    public getPortType(): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPortType
    public getBindingOperations(): java.lang.Iterable<com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundOperation>
    public getBindingId(): com.sun.xml.internal.ws.api.BindingID
    public setBindingId(arg0: com.sun.xml.internal.ws.api.BindingID): void
    public setStyle(arg0: javax.jws.soap.SOAPBinding$Style): void
    public getStyle(): javax.jws.soap.SOAPBinding$Style
    public isRpcLit(): boolean
    public isDoclit(): boolean
    public getBinding(arg0: javax.xml.namespace.QName, arg1: java.lang.String | string, arg2: javax.jws.WebParam$Mode): com.sun.xml.internal.ws.api.model.ParameterBinding
    public getOperation(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundOperation
    public freeze(): void
    public getFeature(arg0: java.lang.Class): javax.xml.ws.WebServiceFeature
    public getFeatures(): com.sun.xml.internal.ws.binding.WebServiceFeatureList
    public areRequiredExtensionsUnderstood(): boolean
    public addNotUnderstoodExtension(arg0: javax.xml.namespace.QName, arg1: org.xml.sax.Locator): void
    public getNotUnderstoodExtensions(): java.util.List
    public addExtension(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension | com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension$$Lambda): void
    public getExtension(arg0: java.lang.Class): com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension
    public getOperation(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundOperation
    public getPortType(): com.sun.xml.internal.ws.api.model.wsdl.WSDLPortType
    public get(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundOperation
    public getOwner(): com.sun.xml.internal.ws.api.model.wsdl.WSDLModel
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}