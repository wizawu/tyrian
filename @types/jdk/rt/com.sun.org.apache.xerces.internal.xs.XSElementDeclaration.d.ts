declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xs {
interface XSElementDeclaration extends com.sun.org.apache.xerces.internal.xs.XSTerm {
    getTypeDefinition(): com.sun.org.apache.xerces.internal.xs.XSTypeDefinition
    getScope(): short
    getEnclosingCTDefinition(): com.sun.org.apache.xerces.internal.xs.XSComplexTypeDefinition
    getConstraintType(): short
    getConstraintValue(): string
    getActualVC(): java.lang.Object
    getActualVCType(): short
    getItemValueTypes(): com.sun.org.apache.xerces.internal.xs.ShortList
    getNillable(): boolean
    getIdentityConstraints(): com.sun.org.apache.xerces.internal.xs.XSNamedMap
    getSubstitutionGroupAffiliation(): com.sun.org.apache.xerces.internal.xs.XSElementDeclaration
    isSubstitutionGroupExclusion(arg0: short): boolean
    getSubstitutionGroupExclusions(): short
    isDisallowedSubstitution(arg0: short): boolean
    getDisallowedSubstitutions(): short
    getAbstract(): boolean
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