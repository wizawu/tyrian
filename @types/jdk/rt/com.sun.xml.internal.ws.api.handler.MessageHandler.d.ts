declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace handler {
                            interface MessageHandler<C extends com.sun.xml.internal.ws.api.handler.MessageHandlerContext> extends javax.xml.ws.handler.Handler<C> {
                                getHeaders(): java.util.Set<javax.xml.namespace.QName>
                            }
                            interface MessageHandler$$Lambda<C extends com.sun.xml.internal.ws.api.handler.MessageHandlerContext> extends javax.xml.ws.handler.Handler<C> {
                                (): java.util.Set<javax.xml.namespace.QName>
                            }
                        }
                    }
                }
            }
        }
    }
}