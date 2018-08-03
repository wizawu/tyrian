declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace server {
                            interface WebServiceContextDelegate {
                                getUserPrincipal(arg0: com.sun.xml.internal.ws.api.message.Packet): java.security.Principal
                                isUserInRole(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: java.lang.String | string): boolean
                                getEPRAddress(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: com.sun.xml.internal.ws.api.server.WSEndpoint): string
                                getWSDLAddress(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: com.sun.xml.internal.ws.api.server.WSEndpoint): string
                            }
                        }
                    }
                }
            }
        }
    }
}