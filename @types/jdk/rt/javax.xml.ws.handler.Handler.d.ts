declare namespace javax {
    namespace xml {
        namespace ws {
            namespace handler {
interface Handler<C extends javax.xml.ws.handler.MessageContext> {
    handleMessage(arg0: C): boolean
    handleFault(arg0: C): boolean
    close(arg0: javax.xml.ws.handler.MessageContext): void
}

            }
        }
    }
}