declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace model {
                            namespace wsdl {
                                interface WSDLService extends com.sun.xml.internal.ws.api.model.wsdl.WSDLObject , com.sun.xml.internal.ws.api.model.wsdl.WSDLExtensible {
                                    getParent(): com.sun.xml.internal.ws.api.model.wsdl.WSDLModel
                                    getName(): javax.xml.namespace.QName
                                    get(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.WSDLPort
                                    getFirstPort(): com.sun.xml.internal.ws.api.model.wsdl.WSDLPort
                                    getMatchingPort(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.WSDLPort
                                    getPorts(): java.lang.Iterable<com.sun.xml.internal.ws.api.model.wsdl.WSDLPort>
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}