declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace dom {
class PSVIAttrNSImpl extends com.sun.org.apache.xerces.internal.dom.AttrNSImpl implements com.sun.org.apache.xerces.internal.xs.AttributePSVI {
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
    protected fErrorCodes: com.sun.org.apache.xerces.internal.xs.StringList
    protected fValidationContext: string
    public constructor(arg0: com.sun.org.apache.xerces.internal.dom.CoreDocumentImpl, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string)
    public constructor(arg0: com.sun.org.apache.xerces.internal.dom.CoreDocumentImpl, arg1: java.lang.String | string, arg2: java.lang.String | string)
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
    public setPSVI(arg0: com.sun.org.apache.xerces.internal.xs.AttributePSVI): void
    public getActualNormalizedValue(): java.lang.Object
    public getActualNormalizedValueType(): short
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