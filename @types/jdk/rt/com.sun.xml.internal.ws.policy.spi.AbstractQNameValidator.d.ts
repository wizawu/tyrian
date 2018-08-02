declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace policy {
                        namespace spi {
                            abstract class AbstractQNameValidator implements com.sun.xml.internal.ws.policy.spi.PolicyAssertionValidator {
                                protected constructor(arg0: java.util.Collection<javax.xml.namespace.QName>, arg1: java.util.Collection<javax.xml.namespace.QName>)
                                public declareSupportedDomains(): java.lang.String[]
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
}