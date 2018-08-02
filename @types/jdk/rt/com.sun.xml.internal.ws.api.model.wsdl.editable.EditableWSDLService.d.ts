declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace model {
                            namespace wsdl {
                                namespace editable {
interface EditableWSDLService extends com.sun.xml.internal.ws.api.model.wsdl.WSDLService {
    getParent(): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLModel
    get(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPort
    getFirstPort(): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPort
    getMatchingPort(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPort
    getPorts(): java.lang.Iterable<com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPort>
    put(arg0: javax.xml.namespace.QName, arg1: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPort): void
    freeze(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLModel): void
    getMatchingPort(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.WSDLPort
    getFirstPort(): com.sun.xml.internal.ws.api.model.wsdl.WSDLPort
    get(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.WSDLPort
    getParent(): com.sun.xml.internal.ws.api.model.wsdl.WSDLModel
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