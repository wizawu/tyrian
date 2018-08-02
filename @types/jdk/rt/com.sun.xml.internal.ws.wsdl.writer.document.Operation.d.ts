declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace wsdl {
                        namespace writer {
                            namespace document {
interface Operation extends com.sun.xml.internal.txw2.TypedXmlWriter , com.sun.xml.internal.ws.wsdl.writer.document.Documented {
    input(): com.sun.xml.internal.ws.wsdl.writer.document.ParamType
    output(): com.sun.xml.internal.ws.wsdl.writer.document.ParamType
    fault(): com.sun.xml.internal.ws.wsdl.writer.document.FaultType
    name(arg0: java.lang.String | string): com.sun.xml.internal.ws.wsdl.writer.document.Operation
    parameterOrder(arg0: java.lang.String | string): com.sun.xml.internal.ws.wsdl.writer.document.Operation
}

                            }
                        }
                    }
                }
            }
        }
    }
}