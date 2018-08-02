declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace server {
                            abstract class ContainerResolver {
                                public constructor()
                                public static setInstance(arg0: com.sun.xml.internal.ws.api.server.ContainerResolver): void
                                public static getInstance(): com.sun.xml.internal.ws.api.server.ContainerResolver
                                public static getDefault(): com.sun.xml.internal.ws.api.server.ThreadLocalContainerResolver
                                public getContainer(): com.sun.xml.internal.ws.api.server.Container
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}