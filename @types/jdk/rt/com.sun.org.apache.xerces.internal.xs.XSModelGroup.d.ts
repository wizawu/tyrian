declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xs {
interface XSModelGroup extends com.sun.org.apache.xerces.internal.xs.XSTerm {
    COMPOSITOR_SEQUENCE: short
    COMPOSITOR_CHOICE: short
    COMPOSITOR_ALL: short
    getCompositor(): short
    getParticles(): com.sun.org.apache.xerces.internal.xs.XSObjectList
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