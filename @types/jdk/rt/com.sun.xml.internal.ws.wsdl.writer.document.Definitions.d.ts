declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace wsdl {
                        namespace writer {
                            namespace document {
interface Definitions extends com.sun.xml.internal.txw2.TypedXmlWriter , com.sun.xml.internal.ws.wsdl.writer.document.Documented {
    name(arg0: java.lang.String | string): com.sun.xml.internal.ws.wsdl.writer.document.Definitions
    targetNamespace(arg0: java.lang.String | string): com.sun.xml.internal.ws.wsdl.writer.document.Definitions
    service(): com.sun.xml.internal.ws.wsdl.writer.document.Service
    binding(): com.sun.xml.internal.ws.wsdl.writer.document.Binding
    portType(): com.sun.xml.internal.ws.wsdl.writer.document.PortType
    message(): com.sun.xml.internal.ws.wsdl.writer.document.Message
    types(): com.sun.xml.internal.ws.wsdl.writer.document.Types
    _import(): com.sun.xml.internal.ws.wsdl.writer.document.Import
}

                            }
                        }
                    }
                }
            }
        }
    }
}