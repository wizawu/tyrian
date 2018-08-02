declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace databinding {
                            interface EndpointCallBridge {
                                deserializeRequest(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): com.oracle.webservices.internal.api.databinding.JavaCallInfo
                                serializeResponse(arg0: com.oracle.webservices.internal.api.databinding.JavaCallInfo): com.sun.xml.internal.ws.api.message.Packet
                                getOperationModel(): com.sun.xml.internal.ws.api.model.JavaMethod
                            }
                        }
                    }
                }
            }
        }
    }
}