declare namespace javax {
    namespace xml {
        namespace ws {
            namespace handler {
                namespace soap {
interface SOAPHandler<T extends javax.xml.ws.handler.soap.SOAPMessageContext> extends javax.xml.ws.handler.Handler<T> {
    getHeaders(): java.util.Set<javax.xml.namespace.QName>
}

                }
            }
        }
    }
}