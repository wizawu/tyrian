declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace client {
abstract class ServiceInterceptor {
    public constructor()
    public preCreateBinding(arg0: com.sun.xml.internal.ws.api.client.WSPortInfo, arg1: java.lang.Class<any>, arg2: com.sun.xml.internal.ws.api.WSFeatureList): java.util.List<javax.xml.ws.WebServiceFeature>
    public postCreateProxy(arg0: com.sun.xml.internal.ws.developer.WSBindingProvider, arg1: java.lang.Class<any>): void
    public postCreateDispatch(arg0: com.sun.xml.internal.ws.developer.WSBindingProvider): void
    public static aggregate(...arg0: com.sun.xml.internal.ws.api.client.ServiceInterceptor[]): com.sun.xml.internal.ws.api.client.ServiceInterceptor
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}