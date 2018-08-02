declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace model {
                        namespace wsdl {
                            class WSDLBoundFaultImpl extends com.sun.xml.internal.ws.model.wsdl.AbstractExtensibleImpl implements com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundFault {
                                public constructor(arg0: javax.xml.stream.XMLStreamReader, arg1: java.lang.String | string, arg2: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundOperation)
                                public getName(): string
                                public getQName(): javax.xml.namespace.QName
                                public getFault(): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLFault
                                public getBoundOperation(): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundOperation
                                public freeze(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundOperation): void
                                public areRequiredExtensionsUnderstood(): boolean
                                public addNotUnderstoodExtension(arg0: javax.xml.namespace.QName, arg1: org.xml.sax.Locator): void
                                public getNotUnderstoodExtensions(): java.util.List
                                public addExtension(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension | com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension$$Lambda): void
                                public getExtension(arg0: java.lang.Class): com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension
                                public getBoundOperation(): com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundOperation
                                public getFault(): com.sun.xml.internal.ws.api.model.wsdl.WSDLFault
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}