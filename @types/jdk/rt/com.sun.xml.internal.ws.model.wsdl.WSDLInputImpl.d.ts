declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace model {
                        namespace wsdl {
class WSDLInputImpl extends com.sun.xml.internal.ws.model.wsdl.AbstractExtensibleImpl implements com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLInput {
    public constructor(arg0: javax.xml.stream.XMLStreamReader, arg1: java.lang.String | string, arg2: javax.xml.namespace.QName, arg3: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLOperation)
    public getName(): string
    public getMessage(): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLMessage
    public getAction(): string
    public getOperation(): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLOperation
    public getQName(): javax.xml.namespace.QName
    public setAction(arg0: java.lang.String | string): void
    public isDefaultAction(): boolean
    public setDefaultAction(arg0: boolean): void
    public freeze(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLModel): void
    public areRequiredExtensionsUnderstood(): boolean
    public addNotUnderstoodExtension(arg0: javax.xml.namespace.QName, arg1: org.xml.sax.Locator): void
    public getNotUnderstoodExtensions(): java.util.List
    public addExtension(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension | com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension$$Lambda): void
    public getExtension(arg0: java.lang.Class): com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension
    public getOperation(): com.sun.xml.internal.ws.api.model.wsdl.WSDLOperation
    public getMessage(): com.sun.xml.internal.ws.api.model.wsdl.WSDLMessage
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}