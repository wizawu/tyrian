declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xs {
                            interface XSComplexTypeDefinition extends com.sun.org.apache.xerces.internal.xs.XSTypeDefinition {
                                CONTENTTYPE_EMPTY: short
                                CONTENTTYPE_SIMPLE: short
                                CONTENTTYPE_ELEMENT: short
                                CONTENTTYPE_MIXED: short
                                getDerivationMethod(): short
                                getAbstract(): boolean
                                getAttributeUses(): com.sun.org.apache.xerces.internal.xs.XSObjectList
                                getAttributeWildcard(): com.sun.org.apache.xerces.internal.xs.XSWildcard
                                getContentType(): short
                                getSimpleType(): com.sun.org.apache.xerces.internal.xs.XSSimpleTypeDefinition
                                getParticle(): com.sun.org.apache.xerces.internal.xs.XSParticle
                                isProhibitedSubstitution(arg0: short): boolean
                                getProhibitedSubstitutions(): short
                                getAnnotations(): com.sun.org.apache.xerces.internal.xs.XSObjectList
                            }
                        }
                    }
                }
            }
        }
    }
}