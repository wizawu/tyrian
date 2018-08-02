declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace model {
                            namespace wsdl {
interface WSDLOperation extends com.sun.xml.internal.ws.api.model.wsdl.WSDLObject , com.sun.xml.internal.ws.api.model.wsdl.WSDLExtensible {
    getName(): javax.xml.namespace.QName
    getInput(): com.sun.xml.internal.ws.api.model.wsdl.WSDLInput
    getOutput(): com.sun.xml.internal.ws.api.model.wsdl.WSDLOutput
    isOneWay(): boolean
    getFaults(): java.lang.Iterable<com.sun.xml.internal.ws.api.model.wsdl.WSDLFault>
    getFault(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.WSDLFault
    getPortTypeName(): javax.xml.namespace.QName
    getParameterOrder(): string
}

                            }
                        }
                    }
                }
            }
        }
    }
}