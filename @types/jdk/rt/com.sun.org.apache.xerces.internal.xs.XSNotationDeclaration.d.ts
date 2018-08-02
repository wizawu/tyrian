declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xs {
                            interface XSNotationDeclaration extends com.sun.org.apache.xerces.internal.xs.XSObject {
                                getSystemId(): string
                                getPublicId(): string
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