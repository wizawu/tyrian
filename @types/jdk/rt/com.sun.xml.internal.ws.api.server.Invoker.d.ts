declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace server {
                            abstract class Invoker extends com.sun.xml.internal.ws.server.sei.Invoker {
                                public constructor()
                                public start(arg0: com.sun.xml.internal.ws.api.server.WSWebServiceContext | com.sun.xml.internal.ws.api.server.WSWebServiceContext$$Lambda, arg1: com.sun.xml.internal.ws.api.server.WSEndpoint): void
                                public start(arg0: javax.xml.ws.WebServiceContext): void
                                public dispose(): void
                                public invokeProvider<T>(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: T): T
                                public invokeAsyncProvider<T>(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: T, arg2: com.sun.xml.internal.ws.api.server.AsyncProviderCallback, arg3: javax.xml.ws.WebServiceContext): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}