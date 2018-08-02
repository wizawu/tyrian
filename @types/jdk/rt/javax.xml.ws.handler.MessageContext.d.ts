declare namespace javax {
    namespace xml {
        namespace ws {
            namespace handler {
                interface MessageContext extends java.util.Map<java.lang.String, java.lang.Object> {
                    MESSAGE_OUTBOUND_PROPERTY: string
                    INBOUND_MESSAGE_ATTACHMENTS: string
                    OUTBOUND_MESSAGE_ATTACHMENTS: string
                    WSDL_DESCRIPTION: string
                    WSDL_SERVICE: string
                    WSDL_PORT: string
                    WSDL_INTERFACE: string
                    WSDL_OPERATION: string
                    HTTP_RESPONSE_CODE: string
                    HTTP_REQUEST_HEADERS: string
                    HTTP_RESPONSE_HEADERS: string
                    HTTP_REQUEST_METHOD: string
                    SERVLET_REQUEST: string
                    SERVLET_RESPONSE: string
                    SERVLET_CONTEXT: string
                    QUERY_STRING: string
                    PATH_INFO: string
                    REFERENCE_PARAMETERS: string
                    setScope(arg0: java.lang.String | string, arg1: javax.xml.ws.handler.MessageContext$Scope): void
                    getScope(arg0: java.lang.String | string): javax.xml.ws.handler.MessageContext$Scope
                }
            }
        }
    }
}