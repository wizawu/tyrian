declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace wsdl {
                        namespace writer {
                            namespace document {
                                namespace soap12 {
                                    interface Header extends com.sun.xml.internal.txw2.TypedXmlWriter , com.sun.xml.internal.ws.wsdl.writer.document.soap12.BodyType {
                                        message(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.wsdl.writer.document.soap12.Header
                                        headerFault(): com.sun.xml.internal.ws.wsdl.writer.document.soap12.HeaderFault
                                        part(arg0: java.lang.String | string): com.sun.xml.internal.ws.wsdl.writer.document.soap12.BodyType
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