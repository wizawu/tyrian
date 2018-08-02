declare namespace javax {
    namespace xml {
        namespace ws {
            namespace soap {
                interface SOAPBinding extends javax.xml.ws.Binding {
                    SOAP11HTTP_BINDING: string
                    SOAP12HTTP_BINDING: string
                    SOAP11HTTP_MTOM_BINDING: string
                    SOAP12HTTP_MTOM_BINDING: string
                    getRoles(): java.util.Set<java.lang.String>
                    setRoles(arg0: java.util.Set<java.lang.String>): void
                    isMTOMEnabled(): boolean
                    setMTOMEnabled(arg0: boolean): void
                    getSOAPFactory(): javax.xml.soap.SOAPFactory
                    getMessageFactory(): javax.xml.soap.MessageFactory
                }
            }
        }
    }
}