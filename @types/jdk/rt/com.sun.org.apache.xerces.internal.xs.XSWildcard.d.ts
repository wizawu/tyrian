declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xs {
                            interface XSWildcard extends com.sun.org.apache.xerces.internal.xs.XSTerm {
                                NSCONSTRAINT_ANY: short
                                NSCONSTRAINT_NOT: short
                                NSCONSTRAINT_LIST: short
                                PC_STRICT: short
                                PC_SKIP: short
                                PC_LAX: short
                                getConstraintType(): short
                                getNsConstraintList(): com.sun.org.apache.xerces.internal.xs.StringList
                                getProcessContents(): short
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