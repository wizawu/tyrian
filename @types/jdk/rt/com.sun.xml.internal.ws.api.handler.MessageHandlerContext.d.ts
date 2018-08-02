declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace handler {
                            interface MessageHandlerContext extends javax.xml.ws.handler.MessageContext {
                                getMessage(): com.sun.xml.internal.ws.api.message.Message
                                setMessage(arg0: com.sun.xml.internal.ws.api.message.Message): void
                                getRoles(): java.util.Set<java.lang.String>
                                getWSBinding(): com.sun.xml.internal.ws.api.WSBinding
                                getSEIModel(): com.sun.xml.internal.ws.api.model.SEIModel
                                getPort(): com.sun.xml.internal.ws.api.model.wsdl.WSDLPort
                            }
                        }
                    }
                }
            }
        }
    }
}