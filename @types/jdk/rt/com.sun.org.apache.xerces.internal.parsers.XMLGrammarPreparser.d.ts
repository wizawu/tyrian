declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace parsers {
                            class XMLGrammarPreparser {
                                protected static SYMBOL_TABLE: string
                                protected static ERROR_REPORTER: string
                                protected static ERROR_HANDLER: string
                                protected static ENTITY_RESOLVER: string
                                protected static GRAMMAR_POOL: string
                                protected fSymbolTable: com.sun.org.apache.xerces.internal.util.SymbolTable
                                protected fErrorReporter: com.sun.org.apache.xerces.internal.impl.XMLErrorReporter
                                protected fEntityResolver: com.sun.org.apache.xerces.internal.xni.parser.XMLEntityResolver
                                protected fGrammarPool: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool
                                protected fLocale: java.util.Locale
                                public constructor()
                                public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable)
                                public registerPreparser(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarLoader): boolean
                                public preparseGrammar(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource): com.sun.org.apache.xerces.internal.xni.grammars.Grammar
                                public setLocale(arg0: java.util.Locale): void
                                public getLocale(): java.util.Locale
                                public setErrorHandler(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLErrorHandler): void
                                public getErrorHandler(): com.sun.org.apache.xerces.internal.xni.parser.XMLErrorHandler
                                public setEntityResolver(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLEntityResolver | com.sun.org.apache.xerces.internal.xni.parser.XMLEntityResolver$$Lambda): void
                                public getEntityResolver(): com.sun.org.apache.xerces.internal.xni.parser.XMLEntityResolver
                                public setGrammarPool(arg0: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool): void
                                public getGrammarPool(): com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool
                                public getLoader(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarLoader
                                public setFeature(arg0: java.lang.String | string, arg1: boolean): void
                                public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                public getFeature(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
                                public getProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.Object
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}