declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
class XSComplexTypeDecl implements com.sun.org.apache.xerces.internal.xs.XSComplexTypeDefinition , org.w3c.dom.TypeInfo {
    public constructor()
    public setValues(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xs.XSTypeDefinition, arg3: short, arg4: short, arg5: short, arg6: short, arg7: boolean, arg8: com.sun.org.apache.xerces.internal.impl.xs.XSAttributeGroupDecl, arg9: com.sun.org.apache.xerces.internal.impl.dv.XSSimpleType, arg10: com.sun.org.apache.xerces.internal.impl.xs.XSParticleDecl, arg11: com.sun.org.apache.xerces.internal.impl.xs.util.XSObjectListImpl): void
    public setName(arg0: java.lang.String | string): void
    public getTypeCategory(): short
    public getTypeName(): string
    public getFinalSet(): short
    public getTargetNamespace(): string
    public containsTypeID(): boolean
    public setIsAbstractType(): void
    public setContainsTypeID(): void
    public setIsAnonymous(): void
    public getContentModel(arg0: com.sun.org.apache.xerces.internal.impl.xs.models.CMBuilder): com.sun.org.apache.xerces.internal.impl.xs.models.XSCMValidator
    public getAttrGrp(): com.sun.org.apache.xerces.internal.impl.xs.XSAttributeGroupDecl
    public toString(): string
    public derivedFromType(arg0: com.sun.org.apache.xerces.internal.xs.XSTypeDefinition, arg1: short): boolean
    public derivedFrom(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: short): boolean
    public isDOMDerivedFrom(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int): boolean
    public reset(): void
    public getType(): short
    public getName(): string
    public getAnonymous(): boolean
    public getNamespace(): string
    public getBaseType(): com.sun.org.apache.xerces.internal.xs.XSTypeDefinition
    public getDerivationMethod(): short
    public isFinal(arg0: short): boolean
    public getFinal(): short
    public getAbstract(): boolean
    public getAttributeUses(): com.sun.org.apache.xerces.internal.xs.XSObjectList
    public getAttributeWildcard(): com.sun.org.apache.xerces.internal.xs.XSWildcard
    public getContentType(): short
    public getSimpleType(): com.sun.org.apache.xerces.internal.xs.XSSimpleTypeDefinition
    public getParticle(): com.sun.org.apache.xerces.internal.xs.XSParticle
    public isProhibitedSubstitution(arg0: short): boolean
    public getProhibitedSubstitutions(): short
    public getAnnotations(): com.sun.org.apache.xerces.internal.xs.XSObjectList
    public getNamespaceItem(): com.sun.org.apache.xerces.internal.xs.XSNamespaceItem
    public getAttributeUse(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSAttributeUse
    public getTypeNamespace(): string
    public isDerivedFrom(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int): boolean
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