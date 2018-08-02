declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace handler {
                        class MessageHandlerContextImpl extends com.sun.xml.internal.ws.handler.MessageUpdatableContext implements com.sun.xml.internal.ws.api.handler.MessageHandlerContext {
                            public constructor(arg0: com.sun.xml.internal.ws.api.model.SEIModel, arg1: com.sun.xml.internal.ws.api.WSBinding, arg2: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg3: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg4: java.util.Set<java.lang.String>)
                            public getMessage(): com.sun.xml.internal.ws.api.message.Message
                            public setMessage(arg0: com.sun.xml.internal.ws.api.message.Message): void
                            public getRoles(): java.util.Set<java.lang.String>
                            public getWSBinding(): com.sun.xml.internal.ws.api.WSBinding
                            public getSEIModel(): com.sun.xml.internal.ws.api.model.SEIModel
                            public getPort(): com.sun.xml.internal.ws.api.model.wsdl.WSDLPort
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}