declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace handler {
                        abstract class HandlerProcessor<C extends com.sun.xml.internal.ws.handler.MessageUpdatableContext> {
                            protected constructor(arg0: com.sun.xml.internal.ws.handler.HandlerTube, arg1: com.sun.xml.internal.ws.api.WSBinding, arg2: java.util.List<javax.xml.ws.handler.Handler>)
                            public callHandlersRequest(arg0: com.sun.xml.internal.ws.handler.HandlerProcessor$Direction, arg1: C, arg2: boolean): boolean
                            public callHandlersResponse(arg0: com.sun.xml.internal.ws.handler.HandlerProcessor$Direction, arg1: C, arg2: boolean): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}