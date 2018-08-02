declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace model {
                        namespace wsdl {
                            class WSDLServiceImpl extends com.sun.xml.internal.ws.model.wsdl.AbstractExtensibleImpl implements com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLService {
                                public constructor(arg0: javax.xml.stream.XMLStreamReader, arg1: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLModel, arg2: javax.xml.namespace.QName)
                                public getParent(): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLModel
                                public getName(): javax.xml.namespace.QName
                                public get(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPort
                                public getFirstPort(): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPort
                                public getPorts(): java.lang.Iterable<com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPort>
                                public getMatchingPort(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPort
                                public put(arg0: javax.xml.namespace.QName, arg1: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPort): void
                                public freeze(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLModel): void
                                public areRequiredExtensionsUnderstood(): boolean
                                public addNotUnderstoodExtension(arg0: javax.xml.namespace.QName, arg1: org.xml.sax.Locator): void
                                public getNotUnderstoodExtensions(): java.util.List
                                public addExtension(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension | com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension$$Lambda): void
                                public getExtension(arg0: java.lang.Class): com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension
                                public getMatchingPort(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.WSDLPort
                                public getFirstPort(): com.sun.xml.internal.ws.api.model.wsdl.WSDLPort
                                public get(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.WSDLPort
                                public getParent(): com.sun.xml.internal.ws.api.model.wsdl.WSDLModel
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}