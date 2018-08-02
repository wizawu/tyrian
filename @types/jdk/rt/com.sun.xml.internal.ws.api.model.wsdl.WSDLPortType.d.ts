declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace model {
                            namespace wsdl {
interface WSDLPortType extends com.sun.xml.internal.ws.api.model.wsdl.WSDLObject , com.sun.xml.internal.ws.api.model.wsdl.WSDLExtensible {
    getName(): javax.xml.namespace.QName
    get(arg0: java.lang.String | string): com.sun.xml.internal.ws.api.model.wsdl.WSDLOperation
    getOperations(): java.lang.Iterable<com.sun.xml.internal.ws.api.model.wsdl.WSDLOperation>
}

                            }
                        }
                    }
                }
            }
        }
    }
}