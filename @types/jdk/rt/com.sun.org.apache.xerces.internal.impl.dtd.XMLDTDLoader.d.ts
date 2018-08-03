declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace dtd {
                                class XMLDTDLoader extends com.sun.org.apache.xerces.internal.impl.dtd.XMLDTDProcessor implements com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarLoader {
                                    protected static STANDARD_URI_CONFORMANT_FEATURE: string
                                    protected static BALANCE_SYNTAX_TREES: string
                                    protected static ERROR_HANDLER: string
                                    public static ENTITY_RESOLVER: string
                                    public static LOCALE: string
                                    protected fEntityResolver: com.sun.org.apache.xerces.internal.xni.parser.XMLEntityResolver
                                    protected fDTDScanner: com.sun.org.apache.xerces.internal.impl.XMLDTDScannerImpl
                                    protected fEntityManager: com.sun.org.apache.xerces.internal.impl.XMLEntityManager
                                    protected fLocale: java.util.Locale
                                    public constructor()
                                    public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable)
                                    public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable, arg1: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool)
                                    public getRecognizedFeatures(): java.lang.String[]
                                    public setFeature(arg0: java.lang.String | string, arg1: boolean): void
                                    public getRecognizedProperties(): java.lang.String[]
                                    public getProperty(arg0: java.lang.String | string): java.lang.Object
                                    public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                    public getFeature(arg0: java.lang.String | string): boolean
                                    public setLocale(arg0: java.util.Locale): void
                                    public getLocale(): java.util.Locale
                                    public setErrorHandler(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLErrorHandler): void
                                    public getErrorHandler(): com.sun.org.apache.xerces.internal.xni.parser.XMLErrorHandler
                                    public setEntityResolver(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLEntityResolver | com.sun.org.apache.xerces.internal.xni.parser.XMLEntityResolver$$Lambda): void
                                    public getEntityResolver(): com.sun.org.apache.xerces.internal.xni.parser.XMLEntityResolver
                                    public loadGrammar(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource): com.sun.org.apache.xerces.internal.xni.grammars.Grammar
                                    public loadGrammarWithContext(arg0: com.sun.org.apache.xerces.internal.impl.dtd.XMLDTDValidator, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.String | string): void
                                    protected reset(): void
                                    protected createDTDScanner(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable, arg1: com.sun.org.apache.xerces.internal.impl.XMLErrorReporter, arg2: com.sun.org.apache.xerces.internal.impl.XMLEntityManager): com.sun.org.apache.xerces.internal.impl.XMLDTDScannerImpl
                                    protected getScannerVersion(): short
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