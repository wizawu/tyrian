declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace model {
                        namespace wsdl {
                            abstract class AbstractExtensibleImpl extends com.sun.xml.internal.ws.model.wsdl.AbstractObjectImpl implements com.sun.xml.internal.ws.api.model.wsdl.WSDLExtensible {
                                protected readonly extensions: java.util.Set<com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension>
                                protected notUnderstoodExtensions: java.util.List<com.sun.xml.internal.ws.model.wsdl.AbstractExtensibleImpl$UnknownWSDLExtension>
                                protected constructor(arg0: javax.xml.stream.XMLStreamReader)
                                protected constructor(arg0: java.lang.String | string, arg1: int)
                                public getExtensions(): java.lang.Iterable<com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension>
                                public getExtensions<T extends com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension>(arg0: java.lang.Class<T>): java.lang.Iterable<T>
                                public getExtension<T extends com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension>(arg0: java.lang.Class<T>): T
                                public addExtension<T extends com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension>(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension | com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension$$Lambda): void
                                public getNotUnderstoodExtensions<T extends com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension>(): java.util.List<com.sun.xml.internal.ws.model.wsdl.AbstractExtensibleImpl$UnknownWSDLExtension>
                                public addNotUnderstoodExtension<T extends com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension>(arg0: javax.xml.namespace.QName, arg1: org.xml.sax.Locator): void
                                public areRequiredExtensionsUnderstood<T extends com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension>(): boolean
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}