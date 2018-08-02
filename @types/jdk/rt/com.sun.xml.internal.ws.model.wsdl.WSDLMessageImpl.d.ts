declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace model {
                        namespace wsdl {
                            class WSDLMessageImpl extends com.sun.xml.internal.ws.model.wsdl.AbstractExtensibleImpl implements com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLMessage {
                                public constructor(arg0: javax.xml.stream.XMLStreamReader, arg1: javax.xml.namespace.QName)
                                public getName(): javax.xml.namespace.QName
                                public add(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPart): void
                                public parts(): java.lang.Iterable<com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPart>
                                public areRequiredExtensionsUnderstood(): boolean
                                public addNotUnderstoodExtension(arg0: javax.xml.namespace.QName, arg1: org.xml.sax.Locator): void
                                public getNotUnderstoodExtensions(): java.util.List
                                public addExtension(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension | com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension$$Lambda): void
                                public getExtension(arg0: java.lang.Class): com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}