declare namespace javax {
    namespace xml {
        namespace ws {
            interface BindingProvider {
                USERNAME_PROPERTY: string
                PASSWORD_PROPERTY: string
                ENDPOINT_ADDRESS_PROPERTY: string
                SESSION_MAINTAIN_PROPERTY: string
                SOAPACTION_USE_PROPERTY: string
                SOAPACTION_URI_PROPERTY: string
                getRequestContext(): java.util.Map<java.lang.String, java.lang.Object>
                getResponseContext(): java.util.Map<java.lang.String, java.lang.Object>
                getBinding(): javax.xml.ws.Binding
                getEndpointReference(): javax.xml.ws.EndpointReference
                getEndpointReference<T extends javax.xml.ws.EndpointReference>(arg0: java.lang.Class<T>): T
            }
        }
    }
}