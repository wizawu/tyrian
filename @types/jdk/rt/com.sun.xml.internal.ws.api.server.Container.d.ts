declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace server {
                            abstract class Container implements com.sun.xml.internal.ws.api.ComponentRegistry , com.sun.xml.internal.ws.api.ComponentEx {
                                public static NONE: com.sun.xml.internal.ws.api.server.Container
                                protected constructor()
                                public getSPI<S>(arg0: java.lang.Class<S>): S
                                public getComponents<S>(): java.util.Set<com.sun.xml.internal.ws.api.Component>
                                public getIterableSPI<E>(arg0: java.lang.Class<E>): java.lang.Iterable<E>
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}