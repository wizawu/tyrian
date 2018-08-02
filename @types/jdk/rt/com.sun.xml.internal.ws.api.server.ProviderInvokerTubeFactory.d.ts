declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace server {
                            abstract class ProviderInvokerTubeFactory<T> {
                                public constructor()
                                protected doCreate(arg0: java.lang.Class<T>, arg1: com.sun.xml.internal.ws.api.server.Invoker, arg2: com.sun.xml.internal.ws.server.provider.ProviderArgumentsBuilder<any>, arg3: boolean): com.sun.xml.internal.ws.server.provider.ProviderInvokerTube<T>
                                public static create<T>(arg0: java.lang.ClassLoader, arg1: com.sun.xml.internal.ws.api.server.Container, arg2: java.lang.Class<T>, arg3: com.sun.xml.internal.ws.api.server.Invoker, arg4: com.sun.xml.internal.ws.server.provider.ProviderArgumentsBuilder<any>, arg5: boolean): com.sun.xml.internal.ws.server.provider.ProviderInvokerTube<T>
                                protected createDefault(arg0: java.lang.Class<T>, arg1: com.sun.xml.internal.ws.api.server.Invoker, arg2: com.sun.xml.internal.ws.server.provider.ProviderArgumentsBuilder<any>, arg3: boolean): com.sun.xml.internal.ws.server.provider.ProviderInvokerTube<T>
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}