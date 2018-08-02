declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace policy {
                        namespace spi {
                            interface PolicyAssertionCreator {
                                getSupportedDomainNamespaceURIs(): java.lang.String[]
                                createAssertion(arg0: com.sun.xml.internal.ws.policy.sourcemodel.AssertionData, arg1: java.util.Collection<com.sun.xml.internal.ws.policy.PolicyAssertion>, arg2: com.sun.xml.internal.ws.policy.AssertionSet, arg3: com.sun.xml.internal.ws.policy.spi.PolicyAssertionCreator): com.sun.xml.internal.ws.policy.PolicyAssertion
                            }
                        }
                    }
                }
            }
        }
    }
}