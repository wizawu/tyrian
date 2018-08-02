declare namespace javax {
    namespace xml {
        namespace ws {
            namespace handler {
                namespace soap {
interface SOAPMessageContext extends javax.xml.ws.handler.MessageContext {
    getMessage(): javax.xml.soap.SOAPMessage
    setMessage(arg0: javax.xml.soap.SOAPMessage): void
    getHeaders(arg0: javax.xml.namespace.QName, arg1: javax.xml.bind.JAXBContext, arg2: boolean): java.lang.Object[]
    getRoles(): java.util.Set<java.lang.String>
}

                }
            }
        }
    }
}