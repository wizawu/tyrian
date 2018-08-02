declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace dtd {
                                class XMLDTDValidator implements com.sun.org.apache.xerces.internal.xni.parser.XMLComponent , com.sun.org.apache.xerces.internal.xni.parser.XMLDocumentFilter , com.sun.org.apache.xerces.internal.impl.dtd.XMLDTDValidatorFilter , com.sun.org.apache.xerces.internal.impl.RevalidationHandler {
                                    protected static NAMESPACES: string
                                    protected static VALIDATION: string
                                    protected static DYNAMIC_VALIDATION: string
                                    protected static BALANCE_SYNTAX_TREES: string
                                    protected static WARN_ON_DUPLICATE_ATTDEF: string
                                    protected static PARSER_SETTINGS: string
                                    protected static SYMBOL_TABLE: string
                                    protected static ERROR_REPORTER: string
                                    protected static GRAMMAR_POOL: string
                                    protected static DATATYPE_VALIDATOR_FACTORY: string
                                    protected static VALIDATION_MANAGER: string
                                    protected fValidationManager: com.sun.org.apache.xerces.internal.impl.validation.ValidationManager
                                    protected fValidationState: com.sun.org.apache.xerces.internal.impl.validation.ValidationState
                                    protected fNamespaces: boolean
                                    protected fValidation: boolean
                                    protected fDTDValidation: boolean
                                    protected fDynamicValidation: boolean
                                    protected fBalanceSyntaxTrees: boolean
                                    protected fWarnDuplicateAttdef: boolean
                                    protected fSymbolTable: com.sun.org.apache.xerces.internal.util.SymbolTable
                                    protected fErrorReporter: com.sun.org.apache.xerces.internal.impl.XMLErrorReporter
                                    protected fGrammarPool: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool
                                    protected fGrammarBucket: com.sun.org.apache.xerces.internal.impl.dtd.DTDGrammarBucket
                                    protected fDocLocation: com.sun.org.apache.xerces.internal.xni.XMLLocator
                                    protected fNamespaceContext: com.sun.org.apache.xerces.internal.xni.NamespaceContext
                                    protected fDatatypeValidatorFactory: com.sun.org.apache.xerces.internal.impl.dv.DTDDVFactory
                                    protected fDocumentHandler: com.sun.org.apache.xerces.internal.xni.XMLDocumentHandler
                                    protected fDocumentSource: com.sun.org.apache.xerces.internal.xni.parser.XMLDocumentSource
                                    protected fDTDGrammar: com.sun.org.apache.xerces.internal.impl.dtd.DTDGrammar
                                    protected fSeenDoctypeDecl: boolean
                                    protected fValID: com.sun.org.apache.xerces.internal.impl.dv.DatatypeValidator
                                    protected fValIDRef: com.sun.org.apache.xerces.internal.impl.dv.DatatypeValidator
                                    protected fValIDRefs: com.sun.org.apache.xerces.internal.impl.dv.DatatypeValidator
                                    protected fValENTITY: com.sun.org.apache.xerces.internal.impl.dv.DatatypeValidator
                                    protected fValENTITIES: com.sun.org.apache.xerces.internal.impl.dv.DatatypeValidator
                                    protected fValNMTOKEN: com.sun.org.apache.xerces.internal.impl.dv.DatatypeValidator
                                    protected fValNMTOKENS: com.sun.org.apache.xerces.internal.impl.dv.DatatypeValidator
                                    protected fValNOTATION: com.sun.org.apache.xerces.internal.impl.dv.DatatypeValidator
                                    public constructor()
                                    public reset(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager): void
                                    public getRecognizedFeatures(): java.lang.String[]
                                    public setFeature(arg0: java.lang.String | string, arg1: boolean): void
                                    public getRecognizedProperties(): java.lang.String[]
                                    public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                    public getFeatureDefault(arg0: java.lang.String | string): boolean
                                    public getPropertyDefault(arg0: java.lang.String | string): java.lang.Object
                                    public setDocumentHandler(arg0: com.sun.org.apache.xerces.internal.xni.XMLDocumentHandler): void
                                    public getDocumentHandler(): com.sun.org.apache.xerces.internal.xni.XMLDocumentHandler
                                    public setDocumentSource(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLDocumentSource): void
                                    public getDocumentSource(): com.sun.org.apache.xerces.internal.xni.parser.XMLDocumentSource
                                    public startDocument(arg0: com.sun.org.apache.xerces.internal.xni.XMLLocator, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.NamespaceContext, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public xmlDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public doctypeDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public startElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.XMLAttributes, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public emptyElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.XMLAttributes, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public characters(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public ignorableWhitespace(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public endElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public startCDATA(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public endCDATA(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public endDocument(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public comment(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public processingInstruction(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLString, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public startGeneralEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public endGeneralEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public textDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public hasGrammar(): boolean
                                    public validate(): boolean
                                    protected addDTDDefaultAttrsAndValidate(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: int, arg2: com.sun.org.apache.xerces.internal.xni.XMLAttributes): void
                                    protected getExternalEntityRefInAttrValue(arg0: java.lang.String | string): string
                                    protected validateDTDattribute(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.impl.dtd.XMLAttributeDecl): void
                                    protected invalidStandaloneAttDef(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.QName): boolean
                                    protected init(): void
                                    protected handleStartElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.XMLAttributes, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): boolean
                                    protected startNamespaceScope(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.XMLAttributes, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    protected handleEndElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations, arg2: boolean): void
                                    protected endNamespaceScope(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations, arg2: boolean): void
                                    protected isSpace(arg0: int): boolean
                                    public characterData(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): boolean
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