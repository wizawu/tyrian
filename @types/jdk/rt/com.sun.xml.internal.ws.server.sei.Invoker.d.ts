declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace server {
                        namespace sei {
                            abstract class Invoker {
                                public constructor()
                                public abstract invoke(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: java.lang.reflect.Method, ...arg2: java.lang.Object[]): java.lang.Object
                                public static class: java.lang.Class<any>
                            }
                            interface Invoker$$Lambda {
                                (arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: java.lang.reflect.Method, ...arg2: java.lang.Object[]): java.lang.Object
                            }
                        }
                    }
                }
            }
        }
    }
}