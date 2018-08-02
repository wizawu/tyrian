declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
                                namespace identity {
                                    interface FieldActivator {
                                        startValueScopeFor(arg0: com.sun.org.apache.xerces.internal.impl.xs.identity.IdentityConstraint, arg1: int): void
                                        activateField(arg0: com.sun.org.apache.xerces.internal.impl.xs.identity.Field, arg1: int): com.sun.org.apache.xerces.internal.impl.xs.identity.XPathMatcher
                                        setMayMatch(arg0: com.sun.org.apache.xerces.internal.impl.xs.identity.Field, arg1: java.lang.Boolean | boolean): void
                                        mayMatch(arg0: com.sun.org.apache.xerces.internal.impl.xs.identity.Field): boolean
                                        endValueScopeFor(arg0: com.sun.org.apache.xerces.internal.impl.xs.identity.IdentityConstraint, arg1: int): void
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}