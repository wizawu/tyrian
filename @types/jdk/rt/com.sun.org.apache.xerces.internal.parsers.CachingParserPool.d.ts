declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace parsers {
                            class CachingParserPool {
                                public static readonly DEFAULT_SHADOW_SYMBOL_TABLE: boolean
                                public static readonly DEFAULT_SHADOW_GRAMMAR_POOL: boolean
                                protected fSynchronizedSymbolTable: com.sun.org.apache.xerces.internal.util.SymbolTable
                                protected fSynchronizedGrammarPool: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool
                                protected fShadowSymbolTable: boolean
                                protected fShadowGrammarPool: boolean
                                public constructor()
                                public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable, arg1: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool)
                                public getSymbolTable(): com.sun.org.apache.xerces.internal.util.SymbolTable
                                public getXMLGrammarPool(): com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool
                                public setShadowSymbolTable(arg0: boolean): void
                                public createDOMParser(): com.sun.org.apache.xerces.internal.parsers.DOMParser
                                public createSAXParser(): com.sun.org.apache.xerces.internal.parsers.SAXParser
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}