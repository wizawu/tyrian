declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xs {
                            interface XSFacet extends com.sun.org.apache.xerces.internal.xs.XSObject {
                                getFacetKind(): short
                                getLexicalFacetValue(): string
                                getFixed(): boolean
                                getAnnotation(): com.sun.org.apache.xerces.internal.xs.XSAnnotation
                                getAnnotations(): com.sun.org.apache.xerces.internal.xs.XSObjectList
                            }
                        }
                    }
                }
            }
        }
    }
}