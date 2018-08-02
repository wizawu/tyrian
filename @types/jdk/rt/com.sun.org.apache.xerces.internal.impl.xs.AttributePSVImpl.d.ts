declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
class AttributePSVImpl implements com.sun.org.apache.xerces.internal.xs.AttributePSVI {
    protected fDeclaration: com.sun.org.apache.xerces.internal.xs.XSAttributeDeclaration
    protected fTypeDecl: com.sun.org.apache.xerces.internal.xs.XSTypeDefinition
    protected fSpecified: boolean
    protected fNormalizedValue: string
    protected fActualValue: java.lang.Object
    protected fActualValueType: short
    protected fItemValueTypes: com.sun.org.apache.xerces.internal.xs.ShortList
    protected fMemberType: com.sun.org.apache.xerces.internal.xs.XSSimpleTypeDefinition
    protected fValidationAttempted: short
    protected fValidity: short
    protected fErrorCodes: java.lang.String[]
    protected fValidationContext: string
    public constructor()
    public getSchemaDefault(): string
    public getSchemaNormalizedValue(): string
    public getIsSchemaSpecified(): boolean
    public getValidationAttempted(): short
    public getValidity(): short
    public getErrorCodes(): com.sun.org.apache.xerces.internal.xs.StringList
    public getValidationContext(): string
    public getTypeDefinition(): com.sun.org.apache.xerces.internal.xs.XSTypeDefinition
    public getMemberTypeDefinition(): com.sun.org.apache.xerces.internal.xs.XSSimpleTypeDefinition
    public getAttributeDeclaration(): com.sun.org.apache.xerces.internal.xs.XSAttributeDeclaration
    public getActualNormalizedValue(): java.lang.Object
    public getActualNormalizedValueType(): short
    public getItemValueTypes(): com.sun.org.apache.xerces.internal.xs.ShortList
    public reset(): void
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