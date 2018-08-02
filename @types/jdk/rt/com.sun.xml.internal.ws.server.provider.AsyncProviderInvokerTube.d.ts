declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace server {
                        namespace provider {
                            class AsyncProviderInvokerTube<T> extends com.sun.xml.internal.ws.server.provider.ProviderInvokerTube<T> {
                                public constructor(arg0: com.sun.xml.internal.ws.api.server.Invoker, arg1: com.sun.xml.internal.ws.server.provider.ProviderArgumentsBuilder<T>)
                                public processRequest(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): com.sun.xml.internal.ws.api.pipe.NextAction
                                public processResponse(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): com.sun.xml.internal.ws.api.pipe.NextAction
                                public processException(arg0: java.lang.Throwable): com.sun.xml.internal.ws.api.pipe.NextAction
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}