declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace client {
abstract class ServiceInterceptorFactory {
    public constructor()
    public create(arg0: com.sun.xml.internal.ws.api.WSService): com.sun.xml.internal.ws.api.client.ServiceInterceptor
    public static load(arg0: com.sun.xml.internal.ws.api.WSService, arg1: java.lang.ClassLoader): com.sun.xml.internal.ws.api.client.ServiceInterceptor
    public static registerForThread(arg0: com.sun.xml.internal.ws.api.client.ServiceInterceptorFactory): boolean
    public static unregisterForThread(arg0: com.sun.xml.internal.ws.api.client.ServiceInterceptorFactory): boolean
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}