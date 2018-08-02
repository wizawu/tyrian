declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace server {
                        namespace sei {
                            class TieHandler implements com.sun.xml.internal.ws.api.databinding.EndpointCallBridge {
                                protected packetFactory: com.sun.xml.internal.ws.api.message.MessageContextFactory
                                public constructor(arg0: com.sun.xml.internal.ws.model.JavaMethodImpl, arg1: com.sun.xml.internal.ws.api.WSBinding, arg2: com.sun.xml.internal.ws.api.message.MessageContextFactory)
                                public readRequest(arg0: com.sun.xml.internal.ws.api.message.Message): java.lang.Object[]
                                public createResponse(arg0: com.oracle.webservices.internal.api.databinding.JavaCallInfo): com.sun.xml.internal.ws.api.message.Message
                                public getMethod(): java.lang.reflect.Method
                                public deserializeRequest(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): com.oracle.webservices.internal.api.databinding.JavaCallInfo
                                public serializeResponse(arg0: com.oracle.webservices.internal.api.databinding.JavaCallInfo): com.sun.xml.internal.ws.api.message.Packet
                                public getOperationModel(): com.sun.xml.internal.ws.api.model.JavaMethod
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}