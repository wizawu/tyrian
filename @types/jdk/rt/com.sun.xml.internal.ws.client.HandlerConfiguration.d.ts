declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace client {
                        class HandlerConfiguration {
                            public constructor(arg0: java.util.Set<java.lang.String>, arg1: java.util.List<javax.xml.ws.handler.Handler>)
                            public constructor(arg0: java.util.Set<java.lang.String>, arg1: com.sun.xml.internal.ws.client.HandlerConfiguration)
                            public getRoles(): java.util.Set<java.lang.String>
                            public getHandlerChain(): java.util.List<javax.xml.ws.handler.Handler>
                            public getLogicalHandlers(): java.util.List<javax.xml.ws.handler.LogicalHandler>
                            public getSoapHandlers(): java.util.List<javax.xml.ws.handler.soap.SOAPHandler>
                            public getMessageHandlers(): java.util.List<com.sun.xml.internal.ws.api.handler.MessageHandler>
                            public getHandlerKnownHeaders(): java.util.Set<javax.xml.namespace.QName>
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}