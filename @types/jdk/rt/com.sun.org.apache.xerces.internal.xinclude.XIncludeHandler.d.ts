declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xinclude {
class XIncludeHandler implements com.sun.org.apache.xerces.internal.xni.parser.XMLComponent , com.sun.org.apache.xerces.internal.xni.parser.XMLDocumentFilter , com.sun.org.apache.xerces.internal.xni.parser.XMLDTDFilter {
    public static XINCLUDE_DEFAULT_CONFIGURATION: string
    public static HTTP_ACCEPT: string
    public static HTTP_ACCEPT_LANGUAGE: string
    public static XPOINTER: string
    public static XINCLUDE_NS_URI: string
    public static XINCLUDE_INCLUDE: string
    public static XINCLUDE_FALLBACK: string
    public static XINCLUDE_PARSE_XML: string
    public static XINCLUDE_PARSE_TEXT: string
    public static XINCLUDE_ATTR_HREF: string
    public static XINCLUDE_ATTR_PARSE: string
    public static XINCLUDE_ATTR_ENCODING: string
    public static XINCLUDE_ATTR_ACCEPT: string
    public static XINCLUDE_ATTR_ACCEPT_LANGUAGE: string
    public static XINCLUDE_INCLUDED: string
    public static CURRENT_BASE_URI: string
    public static XINCLUDE_BASE: string
    public static XML_BASE_QNAME: com.sun.org.apache.xerces.internal.xni.QName
    public static XINCLUDE_LANG: string
    public static XML_LANG_QNAME: com.sun.org.apache.xerces.internal.xni.QName
    public static NEW_NS_ATTR_QNAME: com.sun.org.apache.xerces.internal.xni.QName
    protected static VALIDATION: string
    protected static SCHEMA_VALIDATION: string
    protected static DYNAMIC_VALIDATION: string
    protected static ALLOW_UE_AND_NOTATION_EVENTS: string
    protected static XINCLUDE_FIXUP_BASE_URIS: string
    protected static XINCLUDE_FIXUP_LANGUAGE: string
    protected static SYMBOL_TABLE: string
    protected static ERROR_REPORTER: string
    protected static ENTITY_RESOLVER: string
    protected static SECURITY_MANAGER: string
    public static BUFFER_SIZE: string
    protected static PARSER_SETTINGS: string
    protected static XML_SECURITY_PROPERTY_MANAGER: string
    protected fDocumentHandler: com.sun.org.apache.xerces.internal.xni.XMLDocumentHandler
    protected fDocumentSource: com.sun.org.apache.xerces.internal.xni.parser.XMLDocumentSource
    protected fDTDHandler: com.sun.org.apache.xerces.internal.xni.XMLDTDHandler
    protected fDTDSource: com.sun.org.apache.xerces.internal.xni.parser.XMLDTDSource
    protected fParentXIncludeHandler: com.sun.org.apache.xerces.internal.xinclude.XIncludeHandler
    protected fBufferSize: int
    protected fParentRelativeURI: string
    protected fChildConfig: com.sun.org.apache.xerces.internal.xni.parser.XMLParserConfiguration
    protected fXIncludeChildConfig: com.sun.org.apache.xerces.internal.xni.parser.XMLParserConfiguration
    protected fXPointerChildConfig: com.sun.org.apache.xerces.internal.xni.parser.XMLParserConfiguration
    protected fXPtrProcessor: com.sun.org.apache.xerces.internal.xpointer.XPointerProcessor
    protected fDocLocation: com.sun.org.apache.xerces.internal.xni.XMLLocator
    protected fXIncludeMessageFormatter: com.sun.org.apache.xerces.internal.xinclude.XIncludeMessageFormatter
    protected fNamespaceContext: com.sun.org.apache.xerces.internal.xinclude.XIncludeNamespaceSupport
    protected fSymbolTable: com.sun.org.apache.xerces.internal.util.SymbolTable
    protected fErrorReporter: com.sun.org.apache.xerces.internal.impl.XMLErrorReporter
    protected fEntityResolver: com.sun.org.apache.xerces.internal.xni.parser.XMLEntityResolver
    protected fSecurityManager: com.sun.org.apache.xerces.internal.utils.XMLSecurityManager
    protected fSecurityPropertyMgr: com.sun.org.apache.xerces.internal.utils.XMLSecurityPropertyManager
    protected fXInclude10TextReader: com.sun.org.apache.xerces.internal.xinclude.XIncludeTextReader
    protected fXInclude11TextReader: com.sun.org.apache.xerces.internal.xinclude.XIncludeTextReader
    protected fCurrentBaseURI: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier
    protected fBaseURIScope: com.sun.org.apache.xerces.internal.util.IntStack
    protected fBaseURI: java.util.Stack
    protected fLiteralSystemID: java.util.Stack
    protected fExpandedSystemID: java.util.Stack
    protected fLanguageScope: com.sun.org.apache.xerces.internal.util.IntStack
    protected fLanguageStack: java.util.Stack
    protected fCurrentLanguage: string
    protected fSettings: com.sun.org.apache.xerces.internal.util.ParserConfigurationSettings
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
    public startDocument(arg0: com.sun.org.apache.xerces.internal.xni.XMLLocator, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.NamespaceContext, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public xmlDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public doctypeDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public comment(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public processingInstruction(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLString, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public startElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.XMLAttributes, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public emptyElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.XMLAttributes, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public endElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public startGeneralEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public textDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public endGeneralEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public characters(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public ignorableWhitespace(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public startCDATA(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public endCDATA(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public endDocument(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public setDocumentSource(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLDocumentSource): void
    public getDocumentSource(): com.sun.org.apache.xerces.internal.xni.parser.XMLDocumentSource
    public attributeDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String[], arg4: java.lang.String | string, arg5: com.sun.org.apache.xerces.internal.xni.XMLString, arg6: com.sun.org.apache.xerces.internal.xni.XMLString, arg7: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public elementDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public endAttlist(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public endConditional(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public endDTD(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public endExternalSubset(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public endParameterEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public externalEntityDecl(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public getDTDSource(): com.sun.org.apache.xerces.internal.xni.parser.XMLDTDSource
    public ignoredCharacters(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public internalEntityDecl(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLString, arg2: com.sun.org.apache.xerces.internal.xni.XMLString, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public notationDecl(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public setDTDSource(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLDTDSource): void
    public startAttlist(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public startConditional(arg0: short, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public startDTD(arg0: com.sun.org.apache.xerces.internal.xni.XMLLocator, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public startExternalSubset(arg0: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public startParameterEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public unparsedEntityDecl(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public getDTDHandler(): com.sun.org.apache.xerces.internal.xni.XMLDTDHandler
    public setDTDHandler(arg0: com.sun.org.apache.xerces.internal.xni.XMLDTDHandler): void
    protected handleFallbackElement(): void
    protected handleIncludeElement(arg0: com.sun.org.apache.xerces.internal.xni.XMLAttributes): boolean
    protected hasXIncludeNamespace(arg0: com.sun.org.apache.xerces.internal.xni.QName): boolean
    protected isIncludeElement(arg0: com.sun.org.apache.xerces.internal.xni.QName): boolean
    protected isFallbackElement(arg0: com.sun.org.apache.xerces.internal.xni.QName): boolean
    protected sameBaseURIAsIncludeParent(): boolean
    protected sameLanguageAsIncludeParent(): boolean
    protected searchForRecursiveIncludes(arg0: com.sun.org.apache.xerces.internal.xni.XMLLocator): boolean
    protected isTopLevelIncludedItem(): boolean
    protected isTopLevelIncludedItemViaInclude(): boolean
    protected isTopLevelIncludedItemViaFallback(): boolean
    protected processAttributes(arg0: com.sun.org.apache.xerces.internal.xni.XMLAttributes): com.sun.org.apache.xerces.internal.xni.XMLAttributes
    protected getRelativeBaseURI(): string
    protected modifyAugmentations(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): com.sun.org.apache.xerces.internal.xni.Augmentations
    protected modifyAugmentations(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations, arg1: boolean): com.sun.org.apache.xerces.internal.xni.Augmentations
    protected getState(arg0: int): int
    protected getState(): int
    protected setState(arg0: int): void
    protected setSawFallback(arg0: int, arg1: boolean): void
    protected getSawFallback(arg0: int): boolean
    protected setSawInclude(arg0: int, arg1: boolean): void
    protected getSawInclude(arg0: int): boolean
    protected reportResourceError(arg0: java.lang.String | string): void
    protected reportResourceError(arg0: java.lang.String | string, arg1: java.lang.Object[]): void
    protected reportFatalError(arg0: java.lang.String | string): void
    protected reportFatalError(arg0: java.lang.String | string, arg1: java.lang.Object[]): void
    protected setParent(arg0: com.sun.org.apache.xerces.internal.xinclude.XIncludeHandler): void
    protected isRootDocument(): boolean
    protected addUnparsedEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    protected addNotation(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    protected checkUnparsedEntity(arg0: java.lang.String | string): void
    protected checkNotation(arg0: java.lang.String | string): void
    protected checkAndSendUnparsedEntity(arg0: com.sun.org.apache.xerces.internal.xinclude.XIncludeHandler$UnparsedEntity): void
    protected checkAndSendNotation(arg0: com.sun.org.apache.xerces.internal.xinclude.XIncludeHandler$Notation): void
    protected copyFeatures(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager, arg1: com.sun.org.apache.xerces.internal.util.ParserConfigurationSettings): void
    protected copyFeatures(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager, arg1: com.sun.org.apache.xerces.internal.xni.parser.XMLParserConfiguration): void
    protected saveBaseURI(): void
    protected restoreBaseURI(): void
    protected saveLanguage(arg0: java.lang.String | string): void
    public restoreLanguage(): string
    public getBaseURI(arg0: int): string
    public getLanguage(arg0: int): string
    public getRelativeURI(arg0: int): string
    protected processXMLBaseAttributes(arg0: com.sun.org.apache.xerces.internal.xni.XMLAttributes): void
    protected processXMLLangAttributes(arg0: com.sun.org.apache.xerces.internal.xni.XMLAttributes): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}