declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace model {
                        namespace wsdl {
                            class WSDLPortTypeImpl extends com.sun.xml.internal.ws.model.wsdl.AbstractExtensibleImpl implements com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPortType {
                                public constructor(arg0: javax.xml.stream.XMLStreamReader, arg1: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLModel, arg2: javax.xml.namespace.QName)
                                public getName(): javax.xml.namespace.QName
                                public get(arg0: java.lang.String | string): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLOperation
                                public getOperations(): java.lang.Iterable<com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLOperation>
                                public put(arg0: java.lang.String | string, arg1: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLOperation): void
                                public freeze(): void
                                public areRequiredExtensionsUnderstood(): boolean
                                public addNotUnderstoodExtension(arg0: javax.xml.namespace.QName, arg1: org.xml.sax.Locator): void
                                public getNotUnderstoodExtensions(): java.util.List
                                public addExtension(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension | com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension$$Lambda): void
                                public getExtension(arg0: java.lang.Class): com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension
                                public get(arg0: java.lang.String | string): com.sun.xml.internal.ws.api.model.wsdl.WSDLOperation
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}