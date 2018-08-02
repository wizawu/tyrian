declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace policy {
                        class AssertionValidationProcessor {
                            protected constructor(arg0: java.util.Collection<com.sun.xml.internal.ws.policy.spi.PolicyAssertionValidator>)
                            public static getInstance(): com.sun.xml.internal.ws.policy.AssertionValidationProcessor
                            public validateClientSide(arg0: com.sun.xml.internal.ws.policy.PolicyAssertion): com.sun.xml.internal.ws.policy.spi.PolicyAssertionValidator$Fitness
                            public validateServerSide(arg0: com.sun.xml.internal.ws.policy.PolicyAssertion): com.sun.xml.internal.ws.policy.spi.PolicyAssertionValidator$Fitness
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}