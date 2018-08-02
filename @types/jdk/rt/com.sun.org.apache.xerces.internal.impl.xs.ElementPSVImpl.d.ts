declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
                                class ElementPSVImpl implements com.sun.org.apache.xerces.internal.xs.ElementPSVI {
                                    protected fDeclaration: com.sun.org.apache.xerces.internal.xs.XSElementDeclaration
                                    protected fTypeDecl: com.sun.org.apache.xerces.internal.xs.XSTypeDefinition
                                    protected fNil: boolean
                                    protected fSpecified: boolean
                                    protected fNormalizedValue: string
                                    protected fActualValue: java.lang.Object
                                    protected fActualValueType: short
                                    protected fItemValueTypes: com.sun.org.apache.xerces.internal.xs.ShortList
                                    protected fNotation: com.sun.org.apache.xerces.internal.xs.XSNotationDeclaration
                                    protected fMemberType: com.sun.org.apache.xerces.internal.xs.XSSimpleTypeDefinition
                                    protected fValidationAttempted: short
                                    protected fValidity: short
                                    protected fErrorCodes: java.lang.String[]
                                    protected fValidationContext: string
                                    protected fGrammars: com.sun.org.apache.xerces.internal.impl.xs.SchemaGrammar[]
                                    protected fSchemaInformation: com.sun.org.apache.xerces.internal.xs.XSModel
                                    public constructor()
                                    public getSchemaDefault(): string
                                    public getSchemaNormalizedValue(): string
                                    public getIsSchemaSpecified(): boolean
                                    public getValidationAttempted(): short
                                    public getValidity(): short
                                    public getErrorCodes(): com.sun.org.apache.xerces.internal.xs.StringList
                                    public getValidationContext(): string
                                    public getNil(): boolean
                                    public getNotation(): com.sun.org.apache.xerces.internal.xs.XSNotationDeclaration
                                    public getTypeDefinition(): com.sun.org.apache.xerces.internal.xs.XSTypeDefinition
                                    public getMemberTypeDefinition(): com.sun.org.apache.xerces.internal.xs.XSSimpleTypeDefinition
                                    public getElementDeclaration(): com.sun.org.apache.xerces.internal.xs.XSElementDeclaration
                                    public getSchemaInformation(): com.sun.org.apache.xerces.internal.xs.XSModel
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