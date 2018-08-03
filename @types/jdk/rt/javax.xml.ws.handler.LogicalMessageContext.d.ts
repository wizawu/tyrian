declare namespace javax {
    namespace xml {
        namespace ws {
            namespace handler {
                interface LogicalMessageContext extends javax.xml.ws.handler.MessageContext {
                    getMessage(): javax.xml.ws.LogicalMessage
                }
                interface LogicalMessageContext$$Lambda extends javax.xml.ws.handler.MessageContext {
                    (): javax.xml.ws.LogicalMessage
                }
            }
        }
    }
}