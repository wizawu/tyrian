declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace wsdl {
                        namespace writer {
                            namespace document {
interface Binding extends com.sun.xml.internal.txw2.TypedXmlWriter , com.sun.xml.internal.ws.wsdl.writer.document.StartWithExtensionsType {
    type(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.wsdl.writer.document.Binding
    name(arg0: java.lang.String | string): com.sun.xml.internal.ws.wsdl.writer.document.Binding
    operation(): com.sun.xml.internal.ws.wsdl.writer.document.BindingOperationType
    soapBinding(): com.sun.xml.internal.ws.wsdl.writer.document.soap.SOAPBinding
    soap12Binding(): com.sun.xml.internal.ws.wsdl.writer.document.soap12.SOAPBinding
}

                            }
                        }
                    }
                }
            }
        }
    }
}