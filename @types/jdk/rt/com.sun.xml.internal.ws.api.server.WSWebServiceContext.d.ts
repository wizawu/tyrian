declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace server {
                            interface WSWebServiceContext extends javax.xml.ws.WebServiceContext {
                                getRequestPacket(): com.sun.xml.internal.ws.api.message.Packet
                            }
                        }
                    }
                }
            }
        }
    }
}