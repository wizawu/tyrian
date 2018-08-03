declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace server {
                        abstract class AbstractMultiInstanceResolver<T> extends com.sun.xml.internal.ws.api.server.AbstractInstanceResolver<T> {
                            protected clazz: java.lang.Class<T>
                            protected owner: com.sun.xml.internal.ws.api.server.WSEndpoint
                            public constructor(arg0: java.lang.Class<T>)
                            protected prepare(arg0: T): void
                            protected create(): T
                            public start(arg0: com.sun.xml.internal.ws.api.server.WSWebServiceContext | com.sun.xml.internal.ws.api.server.WSWebServiceContext$$Lambda, arg1: com.sun.xml.internal.ws.api.server.WSEndpoint): void
                            protected dispose(arg0: T): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}