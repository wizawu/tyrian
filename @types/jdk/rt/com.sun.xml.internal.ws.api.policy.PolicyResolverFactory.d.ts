declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace policy {
                            abstract class PolicyResolverFactory {
                                public static readonly DEFAULT_POLICY_RESOLVER: com.sun.xml.internal.ws.api.policy.PolicyResolver
                                public constructor()
                                public abstract doCreate(): com.sun.xml.internal.ws.api.policy.PolicyResolver
                                public static create(): com.sun.xml.internal.ws.api.policy.PolicyResolver
                                public static class: java.lang.Class<any>
                            }
                            interface PolicyResolverFactory$$Lambda {
                                (): com.sun.xml.internal.ws.api.policy.PolicyResolver
                            }
                        }
                    }
                }
            }
        }
    }
}