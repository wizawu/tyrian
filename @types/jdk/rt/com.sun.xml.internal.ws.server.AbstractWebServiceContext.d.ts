declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace server {
                        abstract class AbstractWebServiceContext implements com.sun.xml.internal.ws.api.server.WSWebServiceContext {
                            public constructor(arg0: com.sun.xml.internal.ws.api.server.WSEndpoint)
                            public getMessageContext(): javax.xml.ws.handler.MessageContext
                            public getUserPrincipal(): java.security.Principal
                            public isUserInRole(arg0: java.lang.String | string): boolean
                            public getEndpointReference(...arg0: org.w3c.dom.Element[]): javax.xml.ws.EndpointReference
                            public getEndpointReference<T extends javax.xml.ws.EndpointReference>(arg0: java.lang.Class<T>, ...arg1: org.w3c.dom.Element[]): T
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}