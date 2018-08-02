declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace server {
                            abstract class InstanceResolver<T> {
                                public constructor()
                                public resolve(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): T
                                public postInvoke(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg1: T): void
                                public start(arg0: com.sun.xml.internal.ws.api.server.WSWebServiceContext, arg1: com.sun.xml.internal.ws.api.server.WSEndpoint): void
                                public start(arg0: javax.xml.ws.WebServiceContext): void
                                public dispose(): void
                                public static createSingleton<T>(arg0: T): com.sun.xml.internal.ws.api.server.InstanceResolver<T>
                                public static createDefault<T>(arg0: java.lang.Class<T>, arg1: boolean): com.sun.xml.internal.ws.api.server.InstanceResolver<T>
                                public static createDefault<T>(arg0: java.lang.Class<T>): com.sun.xml.internal.ws.api.server.InstanceResolver<T>
                                public static createFromInstanceResolverAnnotation<T>(arg0: java.lang.Class<T>): com.sun.xml.internal.ws.api.server.InstanceResolver<T>
                                protected static createNewInstance<T>(arg0: java.lang.Class<T>): T
                                public createInvoker(): com.sun.xml.internal.ws.api.server.Invoker
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}