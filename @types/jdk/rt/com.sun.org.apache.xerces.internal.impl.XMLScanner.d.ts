declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
abstract class XMLScanner implements com.sun.org.apache.xerces.internal.xni.parser.XMLComponent {
    protected static NAMESPACES: string
    protected static VALIDATION: string
    protected static NOTIFY_CHAR_REFS: string
    protected static PARSER_SETTINGS: string
    protected static SYMBOL_TABLE: string
    protected static ERROR_REPORTER: string
    protected static ENTITY_MANAGER: string
    protected static DEBUG_ATTR_NORMALIZATION: boolean
    protected attributeValueCache: java.util.ArrayList<com.sun.org.apache.xerces.internal.xni.XMLString>
    protected stringBufferCache: java.util.ArrayList<com.sun.org.apache.xerces.internal.util.XMLStringBuffer>
    protected fStringBufferIndex: int
    protected fAttributeCacheInitDone: boolean
    protected fAttributeCacheUsedCount: int
    protected fValidation: boolean
    protected fNamespaces: boolean
    protected fNotifyCharRefs: boolean
    protected fParserSettings: boolean
    protected fPropertyManager: com.sun.org.apache.xerces.internal.impl.PropertyManager
    protected fSymbolTable: com.sun.org.apache.xerces.internal.util.SymbolTable
    protected fErrorReporter: com.sun.org.apache.xerces.internal.impl.XMLErrorReporter
    protected fEntityManager: com.sun.org.apache.xerces.internal.impl.XMLEntityManager
    protected fEntityStore: com.sun.xml.internal.stream.XMLEntityStorage
    protected fSecurityManager: com.sun.org.apache.xerces.internal.utils.XMLSecurityManager
    protected fLimitAnalyzer: com.sun.org.apache.xerces.internal.utils.XMLLimitAnalyzer
    protected fEvent: javax.xml.stream.events.XMLEvent
    protected fEntityScanner: com.sun.org.apache.xerces.internal.impl.XMLEntityScanner
    protected fEntityDepth: int
    protected fCharRefLiteral: string
    protected fScanningAttribute: boolean
    protected fReportEntity: boolean
    protected static fVersionSymbol: string
    protected static fEncodingSymbol: string
    protected static fStandaloneSymbol: string
    protected static fAmpSymbol: string
    protected static fLtSymbol: string
    protected static fGtSymbol: string
    protected static fQuotSymbol: string
    protected static fAposSymbol: string
    protected fResourceIdentifier: com.sun.org.apache.xerces.internal.util.XMLResourceIdentifierImpl
    public constructor()
    public reset(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager): void
    protected setPropertyManager(arg0: com.sun.org.apache.xerces.internal.impl.PropertyManager): void
    public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
    public setFeature(arg0: java.lang.String | string, arg1: boolean): void
    public getFeature(arg0: java.lang.String | string): boolean
    protected reset(): void
    public reset(arg0: com.sun.org.apache.xerces.internal.impl.PropertyManager): void
    protected scanXMLDeclOrTextDecl(arg0: boolean, arg1: java.lang.String[]): void
    protected scanPseudoAttribute(arg0: boolean, arg1: com.sun.org.apache.xerces.internal.xni.XMLString): string
    protected scanPI(arg0: com.sun.org.apache.xerces.internal.util.XMLStringBuffer): void
    protected scanPIData(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.util.XMLStringBuffer): void
    protected scanComment(arg0: com.sun.org.apache.xerces.internal.util.XMLStringBuffer): void
    protected scanAttributeValue(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.XMLString, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.XMLAttributes, arg4: int, arg5: boolean, arg6: java.lang.String | string, arg7: boolean): void
    protected resolveCharacter(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.util.XMLStringBuffer): boolean
    protected scanExternalID(arg0: java.lang.String[], arg1: boolean): void
    protected scanPubidLiteral(arg0: com.sun.org.apache.xerces.internal.xni.XMLString): boolean
    protected normalizeWhitespace(arg0: com.sun.org.apache.xerces.internal.xni.XMLString): void
    public startEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public endEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    protected scanCharReferenceValue(arg0: com.sun.org.apache.xerces.internal.util.XMLStringBuffer, arg1: com.sun.org.apache.xerces.internal.util.XMLStringBuffer): int
    protected isInvalid(arg0: int): boolean
    protected isInvalidLiteral(arg0: int): boolean
    protected isValidNameChar(arg0: int): boolean
    protected isValidNCName(arg0: int): boolean
    protected isValidNameStartChar(arg0: int): boolean
    protected isValidNameStartHighSurrogate(arg0: int): boolean
    protected versionSupported(arg0: java.lang.String | string): boolean
    protected scanSurrogates(arg0: com.sun.org.apache.xerces.internal.util.XMLStringBuffer): boolean
    protected reportFatalError(arg0: java.lang.String | string, arg1: java.lang.Object[]): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}