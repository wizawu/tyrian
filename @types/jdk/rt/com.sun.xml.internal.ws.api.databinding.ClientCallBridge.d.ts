declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace databinding {
interface ClientCallBridge {
    createRequestPacket(arg0: com.oracle.webservices.internal.api.databinding.JavaCallInfo): com.sun.xml.internal.ws.api.message.Packet
    readResponse(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg1: com.oracle.webservices.internal.api.databinding.JavaCallInfo): com.oracle.webservices.internal.api.databinding.JavaCallInfo
    getMethod(): java.lang.reflect.Method
    getOperationModel(): com.sun.xml.internal.ws.api.model.JavaMethod
}

                        }
                    }
                }
            }
        }
    }
}