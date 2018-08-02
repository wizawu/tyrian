declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace model {
                            namespace wsdl {
                                interface WSDLBoundPortType extends com.sun.xml.internal.ws.api.model.wsdl.WSDLFeaturedObject , com.sun.xml.internal.ws.api.model.wsdl.WSDLExtensible {
                                    getName(): javax.xml.namespace.QName
                                    getOwner(): com.sun.xml.internal.ws.api.model.wsdl.WSDLModel
                                    get(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundOperation
                                    getPortTypeName(): javax.xml.namespace.QName
                                    getPortType(): com.sun.xml.internal.ws.api.model.wsdl.WSDLPortType
                                    getBindingOperations(): java.lang.Iterable<com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundOperation>
                                    getStyle(): javax.jws.soap.SOAPBinding$Style
                                    getBindingId(): com.sun.xml.internal.ws.api.BindingID
                                    getOperation(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundOperation
                                    getBinding(arg0: javax.xml.namespace.QName, arg1: java.lang.String | string, arg2: javax.jws.WebParam$Mode): com.sun.xml.internal.ws.api.model.ParameterBinding
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}