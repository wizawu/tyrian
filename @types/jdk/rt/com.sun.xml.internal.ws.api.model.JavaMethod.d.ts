declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace model {
                            interface JavaMethod {
                                getOwner(): com.sun.xml.internal.ws.api.model.SEIModel
                                getMethod(): java.lang.reflect.Method
                                getSEIMethod(): java.lang.reflect.Method
                                getMEP(): com.sun.xml.internal.ws.api.model.MEP
                                getBinding(): com.sun.xml.internal.ws.api.model.soap.SOAPBinding
                                getOperationName(): string
                                getRequestMessageName(): string
                                getResponseMessageName(): string
                                getRequestPayloadName(): javax.xml.namespace.QName
                                getResponsePayloadName(): javax.xml.namespace.QName
                            }
                        }
                    }
                }
            }
        }
    }
}