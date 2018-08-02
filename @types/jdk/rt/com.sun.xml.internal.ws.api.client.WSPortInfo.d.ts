declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace client {
interface WSPortInfo extends javax.xml.ws.handler.PortInfo {
    getOwner(): com.sun.xml.internal.ws.api.WSService
    getBindingId(): com.sun.xml.internal.ws.api.BindingID
    getEndpointAddress(): com.sun.xml.internal.ws.api.EndpointAddress
    getPort(): com.sun.xml.internal.ws.api.model.wsdl.WSDLPort
    getPolicyMap(): com.sun.xml.internal.ws.policy.PolicyMap
}

                        }
                    }
                }
            }
        }
    }
}