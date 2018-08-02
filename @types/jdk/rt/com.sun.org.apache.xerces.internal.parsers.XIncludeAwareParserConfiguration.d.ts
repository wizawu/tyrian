declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace parsers {
                            class XIncludeAwareParserConfiguration extends com.sun.org.apache.xerces.internal.parsers.XML11Configuration {
                                protected static ALLOW_UE_AND_NOTATION_EVENTS: string
                                protected static XINCLUDE_FIXUP_BASE_URIS: string
                                protected static XINCLUDE_FIXUP_LANGUAGE: string
                                protected static XINCLUDE_FEATURE: string
                                protected static XINCLUDE_HANDLER: string
                                protected static NAMESPACE_CONTEXT: string
                                protected fXIncludeHandler: com.sun.org.apache.xerces.internal.xinclude.XIncludeHandler
                                protected fNonXIncludeNSContext: com.sun.org.apache.xerces.internal.util.NamespaceSupport
                                protected fXIncludeNSContext: com.sun.org.apache.xerces.internal.xinclude.XIncludeNamespaceSupport
                                protected fCurrentNSContext: com.sun.org.apache.xerces.internal.xni.NamespaceContext
                                protected fXIncludeEnabled: boolean
                                public constructor()
                                public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable)
                                public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable, arg1: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool)
                                public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable, arg1: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool, arg2: com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager)
                                protected configurePipeline(): void
                                protected configureXML11Pipeline(): void
                                public getFeatureState(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.util.FeatureState
                                public setFeature(arg0: java.lang.String | string, arg1: boolean): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}