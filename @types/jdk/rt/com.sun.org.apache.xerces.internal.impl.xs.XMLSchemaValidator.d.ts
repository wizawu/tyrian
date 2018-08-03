declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
                                class XMLSchemaValidator implements com.sun.org.apache.xerces.internal.xni.parser.XMLComponent , com.sun.org.apache.xerces.internal.xni.parser.XMLDocumentFilter , com.sun.org.apache.xerces.internal.impl.xs.identity.FieldActivator , com.sun.org.apache.xerces.internal.impl.RevalidationHandler {
                                    protected static readonly VALIDATION: string
                                    protected static readonly SCHEMA_VALIDATION: string
                                    protected static readonly SCHEMA_FULL_CHECKING: string
                                    protected static readonly DYNAMIC_VALIDATION: string
                                    protected static readonly NORMALIZE_DATA: string
                                    protected static readonly SCHEMA_ELEMENT_DEFAULT: string
                                    protected static readonly SCHEMA_AUGMENT_PSVI: string
                                    protected static readonly ALLOW_JAVA_ENCODINGS: string
                                    protected static readonly STANDARD_URI_CONFORMANT_FEATURE: string
                                    protected static readonly GENERATE_SYNTHETIC_ANNOTATIONS: string
                                    protected static readonly VALIDATE_ANNOTATIONS: string
                                    protected static readonly HONOUR_ALL_SCHEMALOCATIONS: string
                                    protected static readonly USE_GRAMMAR_POOL_ONLY: string
                                    protected static readonly CONTINUE_AFTER_FATAL_ERROR: string
                                    protected static readonly PARSER_SETTINGS: string
                                    protected static readonly NAMESPACE_GROWTH: string
                                    protected static readonly TOLERATE_DUPLICATES: string
                                    protected static readonly REPORT_WHITESPACE: string
                                    public static readonly SYMBOL_TABLE: string
                                    public static readonly ERROR_REPORTER: string
                                    public static readonly ENTITY_RESOLVER: string
                                    public static readonly XMLGRAMMAR_POOL: string
                                    protected static readonly VALIDATION_MANAGER: string
                                    protected static readonly ENTITY_MANAGER: string
                                    protected static readonly SCHEMA_LOCATION: string
                                    protected static readonly SCHEMA_NONS_LOCATION: string
                                    protected static readonly JAXP_SCHEMA_SOURCE: string
                                    protected static readonly JAXP_SCHEMA_LANGUAGE: string
                                    protected static readonly SCHEMA_DV_FACTORY: string
                                    protected static readonly OVERRIDE_PARSER: string
                                    protected static readonly ID_CONSTRAINT_NUM: int
                                    protected fCurrentPSVI: com.sun.org.apache.xerces.internal.impl.xs.ElementPSVImpl
                                    protected readonly fAugmentations: com.sun.org.apache.xerces.internal.util.AugmentationsImpl
                                    protected readonly fMayMatchFieldMap: java.util.HashMap
                                    protected fDefaultValue: com.sun.org.apache.xerces.internal.xni.XMLString
                                    protected fDynamicValidation: boolean
                                    protected fSchemaDynamicValidation: boolean
                                    protected fDoValidation: boolean
                                    protected fFullChecking: boolean
                                    protected fNormalizeData: boolean
                                    protected fSchemaElementDefault: boolean
                                    protected fAugPSVI: boolean
                                    protected fIdConstraint: boolean
                                    protected fUseGrammarPoolOnly: boolean
                                    protected fNamespaceGrowth: boolean
                                    protected fEntityRef: boolean
                                    protected fInCDATA: boolean
                                    protected fSawOnlyWhitespaceInElementContent: boolean
                                    protected fSymbolTable: com.sun.org.apache.xerces.internal.util.SymbolTable
                                    protected readonly fXSIErrorReporter: com.sun.org.apache.xerces.internal.impl.xs.XMLSchemaValidator$XSIErrorReporter
                                    protected fEntityResolver: com.sun.org.apache.xerces.internal.xni.parser.XMLEntityResolver
                                    protected fValidationManager: com.sun.org.apache.xerces.internal.impl.validation.ValidationManager
                                    protected fValidationState: com.sun.org.apache.xerces.internal.impl.validation.ValidationState
                                    protected fGrammarPool: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool
                                    protected fExternalSchemas: string
                                    protected fExternalNoNamespaceSchema: string
                                    protected fJaxpSchemaSource: java.lang.Object
                                    protected readonly fXSDDescription: com.sun.org.apache.xerces.internal.impl.xs.XSDDescription
                                    protected readonly fLocationPairs: java.util.Map<java.lang.String, com.sun.org.apache.xerces.internal.impl.xs.XMLSchemaLoader$LocationArray>
                                    protected fDocumentHandler: com.sun.org.apache.xerces.internal.xni.XMLDocumentHandler
                                    protected fDocumentSource: com.sun.org.apache.xerces.internal.xni.parser.XMLDocumentSource
                                    protected fMatcherStack: com.sun.org.apache.xerces.internal.impl.xs.XMLSchemaValidator$XPathMatcherStack
                                    protected fValueStoreCache: com.sun.org.apache.xerces.internal.impl.xs.XMLSchemaValidator$ValueStoreCache
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
                                    public characterData(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): boolean
                                    public elementDefault(arg0: java.lang.String | string): void
                                    public startGeneralEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public textDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public comment(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public processingInstruction(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLString, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public endGeneralEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public constructor()
                                    public reset(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager): void
                                    public startValueScopeFor(arg0: com.sun.org.apache.xerces.internal.impl.xs.identity.IdentityConstraint, arg1: int): void
                                    public activateField(arg0: com.sun.org.apache.xerces.internal.impl.xs.identity.Field, arg1: int): com.sun.org.apache.xerces.internal.impl.xs.identity.XPathMatcher
                                    public endValueScopeFor(arg0: com.sun.org.apache.xerces.internal.impl.xs.identity.IdentityConstraint, arg1: int): void
                                    public setMayMatch(arg0: com.sun.org.apache.xerces.internal.impl.xs.identity.Field, arg1: java.lang.Boolean | boolean): void
                                    public mayMatch(arg0: com.sun.org.apache.xerces.internal.impl.xs.identity.Field): boolean
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