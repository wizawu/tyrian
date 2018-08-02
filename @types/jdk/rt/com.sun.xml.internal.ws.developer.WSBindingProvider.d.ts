declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace developer {
interface WSBindingProvider extends javax.xml.ws.BindingProvider , java.io.Closeable , com.sun.xml.internal.ws.api.ComponentRegistry {
    setOutboundHeaders(arg0: java.util.List<com.sun.xml.internal.ws.api.message.Header>): void
    setOutboundHeaders(...arg0: com.sun.xml.internal.ws.api.message.Header[]): void
    setOutboundHeaders(...arg0: java.lang.Object[]): void
    getInboundHeaders(): java.util.List<com.sun.xml.internal.ws.api.message.Header>
    setAddress(arg0: java.lang.String | string): void
    getWSEndpointReference(): com.sun.xml.internal.ws.api.addressing.WSEndpointReference
    getPortInfo(): com.sun.xml.internal.ws.api.client.WSPortInfo
    getManagedObjectManager(): com.sun.org.glassfish.gmbal.ManagedObjectManager
}

                    }
                }
            }
        }
    }
}