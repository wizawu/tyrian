declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
                                class XSElementDecl implements com.sun.org.apache.xerces.internal.xs.XSElementDeclaration {
                                    public static SCOPE_ABSENT: short
                                    public static SCOPE_GLOBAL: short
                                    public static SCOPE_LOCAL: short
                                    public fName: string
                                    public fTargetNamespace: string
                                    public fType: com.sun.org.apache.xerces.internal.xs.XSTypeDefinition
                                    public fUnresolvedTypeName: com.sun.org.apache.xerces.internal.xni.QName
                                    public fScope: short
                                    public fBlock: short
                                    public fFinal: short
                                    public fAnnotations: com.sun.org.apache.xerces.internal.xs.XSObjectList
                                    public fDefault: com.sun.org.apache.xerces.internal.impl.dv.ValidatedInfo
                                    public fSubGroup: com.sun.org.apache.xerces.internal.impl.xs.XSElementDecl
                                    public constructor()
                                    public setConstraintType(arg0: short): void
                                    public setIsNillable(): void
                                    public setIsAbstract(): void
                                    public setIsGlobal(): void
                                    public setIsLocal(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSComplexTypeDecl): void
                                    public addIDConstraint(arg0: com.sun.org.apache.xerces.internal.impl.xs.identity.IdentityConstraint): void
                                    public getIDConstraints(): com.sun.org.apache.xerces.internal.impl.xs.identity.IdentityConstraint[]
                                    public toString(): string
                                    public hashCode(): int
                                    public equals(arg0: java.lang.Object): boolean
                                    public reset(): void
                                    public getType(): short
                                    public getName(): string
                                    public getNamespace(): string
                                    public getTypeDefinition(): com.sun.org.apache.xerces.internal.xs.XSTypeDefinition
                                    public getScope(): short
                                    public getEnclosingCTDefinition(): com.sun.org.apache.xerces.internal.xs.XSComplexTypeDefinition
                                    public getConstraintType(): short
                                    public getConstraintValue(): string
                                    public getNillable(): boolean
                                    public getIdentityConstraints(): com.sun.org.apache.xerces.internal.xs.XSNamedMap
                                    public getSubstitutionGroupAffiliation(): com.sun.org.apache.xerces.internal.xs.XSElementDeclaration
                                    public isSubstitutionGroupExclusion(arg0: short): boolean
                                    public getSubstitutionGroupExclusions(): short
                                    public isDisallowedSubstitution(arg0: short): boolean
                                    public getDisallowedSubstitutions(): short
                                    public getAbstract(): boolean
                                    public getAnnotation(): com.sun.org.apache.xerces.internal.xs.XSAnnotation
                                    public getAnnotations(): com.sun.org.apache.xerces.internal.xs.XSObjectList
                                    public getNamespaceItem(): com.sun.org.apache.xerces.internal.xs.XSNamespaceItem
                                    public getActualVC(): java.lang.Object
                                    public getActualVCType(): short
                                    public getItemValueTypes(): com.sun.org.apache.xerces.internal.xs.ShortList
                                    public static class: java.lang.Class<any>
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}