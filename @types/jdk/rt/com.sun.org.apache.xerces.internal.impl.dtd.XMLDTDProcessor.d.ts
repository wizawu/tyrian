declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace dtd {
                                class XMLDTDProcessor implements com.sun.org.apache.xerces.internal.xni.parser.XMLComponent , com.sun.org.apache.xerces.internal.xni.parser.XMLDTDFilter , com.sun.org.apache.xerces.internal.xni.parser.XMLDTDContentModelFilter {
                                    protected static VALIDATION: string
                                    protected static NOTIFY_CHAR_REFS: string
                                    protected static WARN_ON_DUPLICATE_ATTDEF: string
                                    protected static WARN_ON_UNDECLARED_ELEMDEF: string
                                    protected static PARSER_SETTINGS: string
                                    protected static SYMBOL_TABLE: string
                                    protected static ERROR_REPORTER: string
                                    protected static GRAMMAR_POOL: string
                                    protected static DTD_VALIDATOR: string
                                    protected fValidation: boolean
                                    protected fDTDValidation: boolean
                                    protected fWarnDuplicateAttdef: boolean
                                    protected fWarnOnUndeclaredElemdef: boolean
                                    protected fSymbolTable: com.sun.org.apache.xerces.internal.util.SymbolTable
                                    protected fErrorReporter: com.sun.org.apache.xerces.internal.impl.XMLErrorReporter
                                    protected fGrammarBucket: com.sun.org.apache.xerces.internal.impl.dtd.DTDGrammarBucket
                                    protected fValidator: com.sun.org.apache.xerces.internal.impl.dtd.XMLDTDValidator
                                    protected fGrammarPool: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool
                                    protected fLocale: java.util.Locale
                                    protected fDTDHandler: com.sun.org.apache.xerces.internal.xni.XMLDTDHandler
                                    protected fDTDSource: com.sun.org.apache.xerces.internal.xni.parser.XMLDTDSource
                                    protected fDTDContentModelHandler: com.sun.org.apache.xerces.internal.xni.XMLDTDContentModelHandler
                                    protected fDTDContentModelSource: com.sun.org.apache.xerces.internal.xni.parser.XMLDTDContentModelSource
                                    protected fDTDGrammar: com.sun.org.apache.xerces.internal.impl.dtd.DTDGrammar
                                    protected fInDTDIgnore: boolean
                                    public constructor()
                                    public reset(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager): void
                                    protected reset(): void
                                    public getRecognizedFeatures(): java.lang.String[]
                                    public setFeature(arg0: java.lang.String | string, arg1: boolean): void
                                    public getRecognizedProperties(): java.lang.String[]
                                    public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                    public getFeatureDefault(arg0: java.lang.String | string): boolean
                                    public getPropertyDefault(arg0: java.lang.String | string): java.lang.Object
                                    public setDTDHandler(arg0: com.sun.org.apache.xerces.internal.xni.XMLDTDHandler): void
                                    public getDTDHandler(): com.sun.org.apache.xerces.internal.xni.XMLDTDHandler
                                    public setDTDContentModelHandler(arg0: com.sun.org.apache.xerces.internal.xni.XMLDTDContentModelHandler): void
                                    public getDTDContentModelHandler(): com.sun.org.apache.xerces.internal.xni.XMLDTDContentModelHandler
                                    public startExternalSubset(arg0: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public endExternalSubset(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    protected static checkStandaloneEntityRef(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.impl.dtd.DTDGrammar | com.sun.org.apache.xerces.internal.impl.dtd.DTDGrammar$$Lambda, arg2: com.sun.org.apache.xerces.internal.impl.dtd.XMLEntityDecl, arg3: com.sun.org.apache.xerces.internal.impl.XMLErrorReporter): void
                                    public comment(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public processingInstruction(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLString, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public startDTD(arg0: com.sun.org.apache.xerces.internal.xni.XMLLocator, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public ignoredCharacters(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public textDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public startParameterEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public endParameterEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public elementDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public startAttlist(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public attributeDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String[], arg4: java.lang.String | string, arg5: com.sun.org.apache.xerces.internal.xni.XMLString, arg6: com.sun.org.apache.xerces.internal.xni.XMLString, arg7: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public endAttlist(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public internalEntityDecl(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLString, arg2: com.sun.org.apache.xerces.internal.xni.XMLString, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public externalEntityDecl(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public unparsedEntityDecl(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public notationDecl(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public startConditional(arg0: short, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public endConditional(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public endDTD(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public setDTDSource(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLDTDSource): void
                                    public getDTDSource(): com.sun.org.apache.xerces.internal.xni.parser.XMLDTDSource
                                    public setDTDContentModelSource(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLDTDContentModelSource): void
                                    public getDTDContentModelSource(): com.sun.org.apache.xerces.internal.xni.parser.XMLDTDContentModelSource
                                    public startContentModel(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public any(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public empty(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public startGroup(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public pcdata(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public element(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public separator(arg0: short, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public occurrence(arg0: short, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public endGroup(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    public endContentModel(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                    protected isValidNmtoken(arg0: java.lang.String | string): boolean
                                    protected isValidName(arg0: java.lang.String | string): boolean
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