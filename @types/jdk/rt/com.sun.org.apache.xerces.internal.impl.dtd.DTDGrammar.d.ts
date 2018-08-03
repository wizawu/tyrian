declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace dtd {
                                class DTDGrammar implements com.sun.org.apache.xerces.internal.xni.XMLDTDHandler , com.sun.org.apache.xerces.internal.xni.XMLDTDContentModelHandler , com.sun.org.apache.xerces.internal.impl.validation.EntityState , com.sun.org.apache.xerces.internal.xni.grammars.Grammar {
                                    public static readonly TOP_LEVEL_SCOPE: int
                                    protected fDTDSource: com.sun.org.apache.xerces.internal.xni.parser.XMLDTDSource
                                    protected fDTDContentModelSource: com.sun.org.apache.xerces.internal.xni.parser.XMLDTDContentModelSource
                                    protected fCurrentElementIndex: int
                                    protected fCurrentAttributeIndex: int
                                    protected fReadingExternalDTD: boolean
                                    protected fGrammarDescription: com.sun.org.apache.xerces.internal.impl.dtd.XMLDTDDescription
                                    protected readonly fAttributeDecl: com.sun.org.apache.xerces.internal.impl.dtd.XMLAttributeDecl
                                    public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable, arg1: com.sun.org.apache.xerces.internal.impl.dtd.XMLDTDDescription)
                                    public getGrammarDescription(): com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarDescription
                                    public getElementDeclIsExternal(arg0: int): boolean
                                    public getAttributeDeclIsExternal(arg0: int): boolean
                                    public getAttributeDeclIndex(arg0: int, arg1: java.lang.String | string): int
                                    public startDTD(arg0: com.sun.org.apache.xerces.internal.xni.XMLLocator, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public startParameterEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public startExternalSubset(arg0: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public endParameterEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public endExternalSubset(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public elementDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public attributeDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String[], arg4: java.lang.String | string, arg5: com.sun.org.apache.xerces.internal.xni.XMLString, arg6: com.sun.org.apache.xerces.internal.xni.XMLString, arg7: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public internalEntityDecl(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLString, arg2: com.sun.org.apache.xerces.internal.xni.XMLString, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public externalEntityDecl(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public unparsedEntityDecl(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public notationDecl(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public endDTD(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public setDTDSource(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLDTDSource): void
                                    public getDTDSource(): com.sun.org.apache.xerces.internal.xni.parser.XMLDTDSource
                                    public textDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public comment(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public processingInstruction(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLString, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public startAttlist(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public endAttlist(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public startConditional(arg0: short, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public ignoredCharacters(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public endConditional(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public setDTDContentModelSource(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLDTDContentModelSource): void
                                    public getDTDContentModelSource(): com.sun.org.apache.xerces.internal.xni.parser.XMLDTDContentModelSource
                                    public startContentModel(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public startGroup(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public pcdata(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public element(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public separator(arg0: short, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public occurrence(arg0: short, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public endGroup(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public any(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public empty(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public endContentModel(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public isNamespaceAware(): boolean
                                    public getSymbolTable(): com.sun.org.apache.xerces.internal.util.SymbolTable
                                    public getFirstElementDeclIndex(): int
                                    public getNextElementDeclIndex(arg0: int): int
                                    public getElementDeclIndex(arg0: java.lang.String | string): int
                                    public getElementDeclIndex(arg0: com.sun.org.apache.xerces.internal.xni.QName): int
                                    public getContentSpecType(arg0: int): short
                                    public getElementDecl(arg0: int, arg1: com.sun.org.apache.xerces.internal.impl.dtd.XMLElementDecl): boolean
                                    public getFirstAttributeDeclIndex(arg0: int): int
                                    public getNextAttributeDeclIndex(arg0: int): int
                                    public getAttributeDecl(arg0: int, arg1: com.sun.org.apache.xerces.internal.impl.dtd.XMLAttributeDecl): boolean
                                    public isCDATAAttribute(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.QName): boolean
                                    public getEntityDeclIndex(arg0: java.lang.String | string): int
                                    public getEntityDecl(arg0: int, arg1: com.sun.org.apache.xerces.internal.impl.dtd.XMLEntityDecl): boolean
                                    public getNotationDeclIndex(arg0: java.lang.String | string): int
                                    public getNotationDecl(arg0: int, arg1: com.sun.org.apache.xerces.internal.impl.dtd.XMLNotationDecl): boolean
                                    public getContentSpec(arg0: int, arg1: com.sun.org.apache.xerces.internal.impl.dtd.XMLContentSpec): boolean
                                    public getContentSpecIndex(arg0: int): int
                                    public getContentSpecAsString(arg0: int): string
                                    public printElements(): void
                                    public printAttributes(arg0: int): void
                                    protected addContentSpecToElement(arg0: com.sun.org.apache.xerces.internal.impl.dtd.XMLElementDecl): void
                                    protected getElementContentModelValidator(arg0: int): com.sun.org.apache.xerces.internal.impl.dtd.models.ContentModelValidator
                                    protected createElementDecl(): int
                                    protected setElementDecl(arg0: int, arg1: com.sun.org.apache.xerces.internal.impl.dtd.XMLElementDecl): void
                                    protected putElementNameMapping(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: int, arg2: int): void
                                    protected setFirstAttributeDeclIndex(arg0: int, arg1: int): void
                                    protected setContentSpecIndex(arg0: int, arg1: int): void
                                    protected createAttributeDecl(): int
                                    protected setAttributeDecl(arg0: int, arg1: int, arg2: com.sun.org.apache.xerces.internal.impl.dtd.XMLAttributeDecl): void
                                    protected createContentSpec(): int
                                    protected setContentSpec(arg0: int, arg1: com.sun.org.apache.xerces.internal.impl.dtd.XMLContentSpec): void
                                    protected createEntityDecl(): int
                                    protected setEntityDecl(arg0: int, arg1: com.sun.org.apache.xerces.internal.impl.dtd.XMLEntityDecl): void
                                    protected createNotationDecl(): int
                                    protected setNotationDecl(arg0: int, arg1: com.sun.org.apache.xerces.internal.impl.dtd.XMLNotationDecl): void
                                    protected addContentSpecNode(arg0: short, arg1: java.lang.String | string): int
                                    protected addUniqueLeafNode(arg0: java.lang.String | string): int
                                    protected addContentSpecNode(arg0: short, arg1: int, arg2: int): int
                                    protected initializeContentModelStack(): void
                                    public isEntityDeclared(arg0: java.lang.String | string): boolean
                                    public isEntityUnparsed(arg0: java.lang.String | string): boolean
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