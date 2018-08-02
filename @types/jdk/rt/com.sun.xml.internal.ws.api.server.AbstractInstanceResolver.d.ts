declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace server {
                            abstract class AbstractInstanceResolver<T> extends com.sun.xml.internal.ws.api.server.InstanceResolver<T> {
                                public constructor()
                                protected static getResourceInjector(arg0: com.sun.xml.internal.ws.api.server.WSEndpoint): com.sun.xml.internal.ws.api.server.ResourceInjector
                                protected static invokeMethod(arg0: java.lang.reflect.Method, arg1: java.lang.Object, ...arg2: java.lang.Object[]): void
                                protected findAnnotatedMethod(arg0: java.lang.Class, arg1: java.lang.Class<java.lang.annotation.Annotation>): java.lang.reflect.Method
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}