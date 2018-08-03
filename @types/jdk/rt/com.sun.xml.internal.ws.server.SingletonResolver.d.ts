declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace server {
                        class SingletonResolver<T> extends com.sun.xml.internal.ws.api.server.AbstractInstanceResolver<T> {
                            public constructor(arg0: T)
                            public resolve(arg0: com.sun.xml.internal.ws.api.message.Packet): T
                            public start(arg0: com.sun.xml.internal.ws.api.server.WSWebServiceContext, arg1: com.sun.xml.internal.ws.api.server.WSEndpoint): void
                            public dispose(): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}