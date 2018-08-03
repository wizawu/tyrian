declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace parsers {
                            class XMLGrammarCachingConfiguration extends com.sun.org.apache.xerces.internal.parsers.XIncludeAwareParserConfiguration {
                                public static readonly BIG_PRIME: int
                                protected static readonly fStaticSymbolTable: com.sun.org.apache.xerces.internal.util.SynchronizedSymbolTable
                                protected static readonly fStaticGrammarPool: com.sun.org.apache.xerces.internal.util.XMLGrammarPoolImpl
                                protected static readonly SCHEMA_FULL_CHECKING: string
                                protected fSchemaLoader: com.sun.org.apache.xerces.internal.impl.xs.XMLSchemaLoader
                                protected fDTDLoader: com.sun.org.apache.xerces.internal.impl.dtd.XMLDTDLoader
                                public constructor()
                                public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable)
                                public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable, arg1: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool)
                                public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable, arg1: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool, arg2: com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager)
                                public lockGrammarPool(): void
                                public clearGrammarPool(): void
                                public unlockGrammarPool(): void
                                public parseGrammar(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.org.apache.xerces.internal.xni.grammars.Grammar
                                public parseGrammar(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource): com.sun.org.apache.xerces.internal.xni.grammars.Grammar
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}