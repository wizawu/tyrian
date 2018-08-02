declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace policy {
                        namespace spi {
                            interface PolicyAssertionValidator {
                                validateClientSide(arg0: com.sun.xml.internal.ws.policy.PolicyAssertion): com.sun.xml.internal.ws.policy.spi.PolicyAssertionValidator$Fitness
                                validateServerSide(arg0: com.sun.xml.internal.ws.policy.PolicyAssertion): com.sun.xml.internal.ws.policy.spi.PolicyAssertionValidator$Fitness
                                declareSupportedDomains(): java.lang.String[]
                            }
                        }
                    }
                }
            }
        }
    }
}