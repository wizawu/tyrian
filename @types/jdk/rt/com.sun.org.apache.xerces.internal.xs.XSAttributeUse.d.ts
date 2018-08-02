declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xs {
                            interface XSAttributeUse extends com.sun.org.apache.xerces.internal.xs.XSObject {
                                getRequired(): boolean
                                getAttrDeclaration(): com.sun.org.apache.xerces.internal.xs.XSAttributeDeclaration
                                getConstraintType(): short
                                getConstraintValue(): string
                                getActualVC(): java.lang.Object
                                getActualVCType(): short
                                getItemValueTypes(): com.sun.org.apache.xerces.internal.xs.ShortList
                                getAnnotations(): com.sun.org.apache.xerces.internal.xs.XSObjectList
                            }
                        }
                    }
                }
            }
        }
    }
}