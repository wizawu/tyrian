declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace server {
                            abstract class EndpointData {
                                public constructor()
                                public abstract getNamespace(): string
                                public abstract getServiceName(): string
                                public abstract getPortName(): string
                                public abstract getImplClass(): string
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}