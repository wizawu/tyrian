declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
class XSAttributeGroupDecl implements com.sun.org.apache.xerces.internal.xs.XSAttributeGroupDefinition {
    public fName: string
    public fTargetNamespace: string
    public fAttributeWC: com.sun.org.apache.xerces.internal.impl.xs.XSWildcardDecl
    public fIDAttrName: string
    public fAnnotations: com.sun.org.apache.xerces.internal.xs.XSObjectList
    protected fAttrUses: com.sun.org.apache.xerces.internal.impl.xs.util.XSObjectListImpl
    public constructor()
    public addAttributeUse(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSAttributeUseImpl): string
    public replaceAttributeUse(arg0: com.sun.org.apache.xerces.internal.xs.XSAttributeUse, arg1: com.sun.org.apache.xerces.internal.impl.xs.XSAttributeUseImpl): void
    public getAttributeUse(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSAttributeUse
    public getAttributeUseNoProhibited(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSAttributeUse
    public removeProhibitedAttrs(): void
    public validRestrictionOf(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.impl.xs.XSAttributeGroupDecl): java.lang.Object[]
    public reset(): void
    public getType(): short
    public getName(): string
    public getNamespace(): string
    public getAttributeUses(): com.sun.org.apache.xerces.internal.xs.XSObjectList
    public getAttributeWildcard(): com.sun.org.apache.xerces.internal.xs.XSWildcard
    public getAnnotation(): com.sun.org.apache.xerces.internal.xs.XSAnnotation
    public getAnnotations(): com.sun.org.apache.xerces.internal.xs.XSObjectList
    public getNamespaceItem(): com.sun.org.apache.xerces.internal.xs.XSNamespaceItem
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