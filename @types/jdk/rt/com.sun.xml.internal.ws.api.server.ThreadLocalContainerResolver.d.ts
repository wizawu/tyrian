declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace server {
                            class ThreadLocalContainerResolver extends com.sun.xml.internal.ws.api.server.ContainerResolver {
                                public constructor()
                                public getContainer(): com.sun.xml.internal.ws.api.server.Container
                                public enterContainer(arg0: com.sun.xml.internal.ws.api.server.Container): com.sun.xml.internal.ws.api.server.Container
                                public exitContainer(arg0: com.sun.xml.internal.ws.api.server.Container): void
                                public wrapExecutor(arg0: com.sun.xml.internal.ws.api.server.Container, arg1: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): java.util.concurrent.Executor
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}