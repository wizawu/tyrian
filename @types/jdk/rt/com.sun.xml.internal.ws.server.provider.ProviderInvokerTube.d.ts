declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace server {
                        namespace provider {
                            abstract class ProviderInvokerTube<T> extends com.sun.xml.internal.ws.server.InvokerTube<javax.xml.ws.Provider<T>> {
                                protected argsBuilder: com.sun.xml.internal.ws.server.provider.ProviderArgumentsBuilder<T>
                                public static create<T>(arg0: java.lang.Class<T>, arg1: com.sun.xml.internal.ws.api.WSBinding, arg2: com.sun.xml.internal.ws.api.server.Invoker, arg3: com.sun.xml.internal.ws.api.server.Container): com.sun.xml.internal.ws.server.provider.ProviderInvokerTube<T>
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}