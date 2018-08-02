declare namespace javax {
    namespace xml {
        namespace ws {
interface WebServiceContext {
    getMessageContext(): javax.xml.ws.handler.MessageContext
    getUserPrincipal(): java.security.Principal
    isUserInRole(arg0: java.lang.String | string): boolean
    getEndpointReference(...arg0: org.w3c.dom.Element[]): javax.xml.ws.EndpointReference
    getEndpointReference<T extends javax.xml.ws.EndpointReference>(arg0: java.lang.Class<T>, ...arg1: org.w3c.dom.Element[]): T
}

        }
    }
}