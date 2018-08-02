declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xs {
interface XSAttributeDeclaration extends com.sun.org.apache.xerces.internal.xs.XSObject {
    getTypeDefinition(): com.sun.org.apache.xerces.internal.xs.XSSimpleTypeDefinition
    getScope(): short
    getEnclosingCTDefinition(): com.sun.org.apache.xerces.internal.xs.XSComplexTypeDefinition
    getConstraintType(): short
    getConstraintValue(): string
    getActualVC(): java.lang.Object
    getActualVCType(): short
    getItemValueTypes(): com.sun.org.apache.xerces.internal.xs.ShortList
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