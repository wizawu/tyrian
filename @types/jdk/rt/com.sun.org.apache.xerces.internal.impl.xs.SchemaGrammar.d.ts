declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
                                class SchemaGrammar implements com.sun.org.apache.xerces.internal.xni.grammars.XSGrammar , com.sun.org.apache.xerces.internal.xs.XSNamespaceItem {
                                    public static fAnyType: com.sun.org.apache.xerces.internal.impl.xs.XSComplexTypeDecl
                                    public static SG_SchemaNS: com.sun.org.apache.xerces.internal.impl.xs.SchemaGrammar$BuiltinSchemaGrammar
                                    public static fAnySimpleType: com.sun.org.apache.xerces.internal.impl.dv.XSSimpleType
                                    public static SG_XSI: com.sun.org.apache.xerces.internal.impl.xs.SchemaGrammar$BuiltinSchemaGrammar
                                    protected constructor()
                                    public constructor(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.impl.xs.XSDDescription, arg2: com.sun.org.apache.xerces.internal.util.SymbolTable)
                                    public constructor(arg0: com.sun.org.apache.xerces.internal.impl.xs.SchemaGrammar)
                                    public getGrammarDescription(): com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarDescription
                                    public isNamespaceAware(): boolean
                                    public setImportedGrammars(arg0: java.util.Vector): void
                                    public getImportedGrammars(): java.util.Vector
                                    public getTargetNamespace(): string
                                    public addGlobalAttributeDecl(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSAttributeDecl): void
                                    public addGlobalAttributeDecl(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSAttributeDecl, arg1: java.lang.String | string): void
                                    public addGlobalAttributeGroupDecl(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSAttributeGroupDecl): void
                                    public addGlobalAttributeGroupDecl(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSAttributeGroupDecl, arg1: java.lang.String | string): void
                                    public addGlobalElementDeclAll(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSElementDecl): void
                                    public addGlobalElementDecl(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSElementDecl): void
                                    public addGlobalElementDecl(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSElementDecl, arg1: java.lang.String | string): void
                                    public addGlobalGroupDecl(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSGroupDecl): void
                                    public addGlobalGroupDecl(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSGroupDecl, arg1: java.lang.String | string): void
                                    public addGlobalNotationDecl(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSNotationDecl): void
                                    public addGlobalNotationDecl(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSNotationDecl, arg1: java.lang.String | string): void
                                    public addGlobalTypeDecl(arg0: com.sun.org.apache.xerces.internal.xs.XSTypeDefinition): void
                                    public addGlobalTypeDecl(arg0: com.sun.org.apache.xerces.internal.xs.XSTypeDefinition, arg1: java.lang.String | string): void
                                    public addGlobalComplexTypeDecl(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSComplexTypeDecl): void
                                    public addGlobalComplexTypeDecl(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSComplexTypeDecl, arg1: java.lang.String | string): void
                                    public addGlobalSimpleTypeDecl(arg0: com.sun.org.apache.xerces.internal.impl.dv.XSSimpleType): void
                                    public addGlobalSimpleTypeDecl(arg0: com.sun.org.apache.xerces.internal.impl.dv.XSSimpleType, arg1: java.lang.String | string): void
                                    public addIDConstraintDecl(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSElementDecl, arg1: com.sun.org.apache.xerces.internal.impl.xs.identity.IdentityConstraint): void
                                    public addIDConstraintDecl(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSElementDecl, arg1: com.sun.org.apache.xerces.internal.impl.xs.identity.IdentityConstraint, arg2: java.lang.String | string): void
                                    public getGlobalAttributeDecl(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.impl.xs.XSAttributeDecl
                                    public getGlobalAttributeDecl(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.org.apache.xerces.internal.impl.xs.XSAttributeDecl
                                    public getGlobalAttributeGroupDecl(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.impl.xs.XSAttributeGroupDecl
                                    public getGlobalAttributeGroupDecl(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.org.apache.xerces.internal.impl.xs.XSAttributeGroupDecl
                                    public getGlobalElementDecl(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.impl.xs.XSElementDecl
                                    public getGlobalElementDecl(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.org.apache.xerces.internal.impl.xs.XSElementDecl
                                    public getGlobalGroupDecl(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.impl.xs.XSGroupDecl
                                    public getGlobalGroupDecl(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.org.apache.xerces.internal.impl.xs.XSGroupDecl
                                    public getGlobalNotationDecl(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.impl.xs.XSNotationDecl
                                    public getGlobalNotationDecl(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.org.apache.xerces.internal.impl.xs.XSNotationDecl
                                    public getGlobalTypeDecl(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSTypeDefinition
                                    public getGlobalTypeDecl(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSTypeDefinition
                                    public getIDConstraintDecl(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.impl.xs.identity.IdentityConstraint
                                    public getIDConstraintDecl(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.org.apache.xerces.internal.impl.xs.identity.IdentityConstraint
                                    public hasIDConstraints(): boolean
                                    public addComplexTypeDecl(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSComplexTypeDecl, arg1: com.sun.org.apache.xerces.internal.impl.xs.util.SimpleLocator): void
                                    public addRedefinedGroupDecl(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSGroupDecl, arg1: com.sun.org.apache.xerces.internal.impl.xs.XSGroupDecl, arg2: com.sun.org.apache.xerces.internal.impl.xs.util.SimpleLocator): void
                                    public static getS4SGrammar(arg0: short): com.sun.org.apache.xerces.internal.impl.xs.SchemaGrammar
                                    public addDocument(arg0: java.lang.Object, arg1: java.lang.String | string): void
                                    public removeDocument(arg0: int): void
                                    public getSchemaNamespace(): string
                                    public getComponents(arg0: short): com.sun.org.apache.xerces.internal.xs.XSNamedMap
                                    public getComponentsExt(arg0: short): com.sun.org.apache.xerces.internal.xs.datatypes.ObjectList
                                    public resetComponents(): void
                                    public getTypeDefinition(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSTypeDefinition
                                    public getAttributeDeclaration(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSAttributeDeclaration
                                    public getElementDeclaration(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSElementDeclaration
                                    public getAttributeGroup(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSAttributeGroupDefinition
                                    public getModelGroupDefinition(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSModelGroupDefinition
                                    public getNotationDeclaration(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSNotationDeclaration
                                    public getDocumentLocations(): com.sun.org.apache.xerces.internal.xs.StringList
                                    public toXSModel(): com.sun.org.apache.xerces.internal.xs.XSModel
                                    public toXSModel(arg0: com.sun.org.apache.xerces.internal.xni.grammars.XSGrammar[]): com.sun.org.apache.xerces.internal.xs.XSModel
                                    public getAnnotations(): com.sun.org.apache.xerces.internal.xs.XSObjectList
                                    public addAnnotation(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSAnnotationImpl): void
                                    public setImmutable(arg0: boolean): void
                                    public isImmutable(): boolean
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