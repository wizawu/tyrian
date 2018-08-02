declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
                                class XSAttributeUseImpl implements com.sun.org.apache.xerces.internal.xs.XSAttributeUse {
                                    public fAttrDecl: com.sun.org.apache.xerces.internal.impl.xs.XSAttributeDecl
                                    public fUse: short
                                    public fConstraintType: short
                                    public fDefault: com.sun.org.apache.xerces.internal.impl.dv.ValidatedInfo
                                    public fAnnotations: com.sun.org.apache.xerces.internal.xs.XSObjectList
                                    public constructor()
                                    public reset(): void
                                    public getType(): short
                                    public getName(): string
                                    public getNamespace(): string
                                    public getRequired(): boolean
                                    public getAttrDeclaration(): com.sun.org.apache.xerces.internal.xs.XSAttributeDeclaration
                                    public getConstraintType(): short
                                    public getConstraintValue(): string
                                    public getNamespaceItem(): com.sun.org.apache.xerces.internal.xs.XSNamespaceItem
                                    public getActualVC(): java.lang.Object
                                    public getActualVCType(): short
                                    public getItemValueTypes(): com.sun.org.apache.xerces.internal.xs.ShortList
                                    public getAnnotations(): com.sun.org.apache.xerces.internal.xs.XSObjectList
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